/**
 * Generates branded, downloadable PDFs for investor guides, resources, and reports.
 *
 * Usage: npm run pdfs
 * Output: public/downloads/guides/*.pdf, public/downloads/resources/*.pdf, public/reports/*.pdf
 */
import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';
import { investorGuides } from '../app/data/investor-guides';
import { reports } from '../app/data/reports';
import { resources } from '../app/data/resources';
import { contactAddressFull, contactEmail, contactPhone } from '../app/data/contact';

const NAVY = '#001f4d';
const GOLD = '#BF9B5F';
const INK = '#2b3440';
const MUTED = '#6b7482';
const FAINT = '#9aa2ae';
const RULE = '#d8dce2';

const PAGE_W = 595.28; // A4
const PAGE_H = 841.89;
const MARGIN_X = 68;
const TOP_Y = 92;
const BOTTOM_Y = PAGE_H - 88;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const SERIF = 'Times-Roman';
const SERIF_BOLD = 'Times-Bold';
const SANS = 'Helvetica';
const SANS_BOLD = 'Helvetica-Bold';

interface DocSpec {
  outPath: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  meta: string;
  content: string;
  keyFindings?: string[];
  closing?: { heading: string; body: string };
}

type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] };

function parseContent(content: string): Block[] {
  const rawBlocks = content.split('\n\n').map((b) => b.trim()).filter(Boolean);
  const blocks: Block[] = [];

  for (const raw of rawBlocks) {
    if (raw.startsWith('## ')) {
      blocks.push({ kind: 'heading', text: raw.slice(3).trim() });
      continue;
    }
    const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);
    let bullets: string[] = [];
    let paragraph: string[] = [];
    const flushParagraph = () => {
      if (paragraph.length) {
        blocks.push({ kind: 'paragraph', text: paragraph.join(' ') });
        paragraph = [];
      }
    };
    const flushBullets = () => {
      if (bullets.length) {
        blocks.push({ kind: 'bullets', items: bullets });
        bullets = [];
      }
    };
    for (const line of lines) {
      if (line.startsWith('• ') || line.startsWith('- ')) {
        flushParagraph();
        bullets.push(line.slice(2).trim());
      } else {
        flushBullets();
        paragraph.push(line);
      }
    }
    flushParagraph();
    flushBullets();
  }

  return blocks;
}

function drawCover(doc: PDFKit.PDFDocument, spec: DocSpec) {
  doc.rect(0, 0, PAGE_W, PAGE_H).fill(NAVY);

  doc
    .font(SANS_BOLD)
    .fontSize(12)
    .fillColor('#ffffff')
    .text('KENINGFORD PARTNERS', MARGIN_X, 96, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 3.5,
    });
  doc
    .font(SANS)
    .fontSize(8)
    .fillColor(GOLD)
    .text('C A P I T A L   A D V I S O R Y', MARGIN_X, doc.y + 8, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 2,
    });

  const midRuleY = 210;
  doc
    .moveTo(PAGE_W / 2 - 26, midRuleY)
    .lineTo(PAGE_W / 2 + 26, midRuleY)
    .lineWidth(1)
    .strokeColor(GOLD)
    .stroke();

  doc
    .font(SANS_BOLD)
    .fontSize(9)
    .fillColor(GOLD)
    .text(spec.eyebrow.toUpperCase(), MARGIN_X, midRuleY + 44, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 3,
    });

  doc
    .font(SERIF)
    .fontSize(30)
    .fillColor('#ffffff')
    .text(spec.title, MARGIN_X + 24, doc.y + 22, {
      width: CONTENT_W - 48,
      align: 'center',
      lineGap: 5,
    });

  doc
    .font(SANS)
    .fontSize(10.5)
    .fillColor('#b9c2d4')
    .text(spec.subtitle, MARGIN_X + 48, doc.y + 22, {
      width: CONTENT_W - 96,
      align: 'center',
      lineGap: 4,
    });

  doc
    .moveTo(PAGE_W / 2 - 26, PAGE_H - 168)
    .lineTo(PAGE_W / 2 + 26, PAGE_H - 168)
    .lineWidth(1)
    .strokeColor(GOLD)
    .stroke();

  doc
    .font(SANS)
    .fontSize(8.5)
    .fillColor('#8e99b1')
    .text(spec.meta.toUpperCase(), MARGIN_X, PAGE_H - 148, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 1.6,
    });
  doc
    .font(SANS)
    .fontSize(8.5)
    .fillColor('#8e99b1')
    .text('keningfordpartners.com', MARGIN_X, PAGE_H - 128, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 1,
    });
}

function ensureRoom(doc: PDFKit.PDFDocument, needed: number) {
  if (doc.y + needed > BOTTOM_Y) {
    doc.addPage();
    doc.y = TOP_Y;
  }
}

function drawParagraph(doc: PDFKit.PDFDocument, text: string, opts: { lead?: boolean } = {}) {
  const size = opts.lead ? 12 : 10.5;
  const font = opts.lead ? SERIF : SANS;
  const color = opts.lead ? NAVY : INK;
  doc.font(font).fontSize(size).fillColor(color);
  ensureRoom(doc, doc.heightOfString(text.slice(0, 160), { width: CONTENT_W }) + 14);
  doc.text(text, MARGIN_X, doc.y, { width: CONTENT_W, lineGap: 4.5, paragraphGap: 0 });
  doc.y += 12;
}

function drawBullets(doc: PDFKit.PDFDocument, items: string[]) {
  for (const item of items) {
    doc.font(SANS).fontSize(10.5);
    const h = doc.heightOfString(item, { width: CONTENT_W - 18, lineGap: 4 });
    ensureRoom(doc, Math.min(h, 60) + 8);
    const y = doc.y;
    doc.font(SANS_BOLD).fontSize(10.5).fillColor(GOLD).text('•', MARGIN_X + 2, y);
    doc
      .font(SANS)
      .fontSize(10.5)
      .fillColor(INK)
      .text(item, MARGIN_X + 18, y, { width: CONTENT_W - 18, lineGap: 4 });
    doc.y += 7;
  }
  doc.y += 6;
}

function drawSectionHeading(doc: PDFKit.PDFDocument, text: string, index: number, total: number) {
  ensureRoom(doc, 120);
  doc.y += index === 1 && doc.y <= TOP_Y ? 0 : 14;
  doc
    .font(SANS_BOLD)
    .fontSize(8)
    .fillColor(GOLD)
    .text(
      `SECTION ${String(index).padStart(2, '0')} OF ${String(total).padStart(2, '0')}`,
      MARGIN_X,
      doc.y,
      { characterSpacing: 2.2 },
    );
  doc.y += 8;
  doc
    .font(SERIF_BOLD)
    .fontSize(16.5)
    .fillColor(NAVY)
    .text(text, MARGIN_X, doc.y, { width: CONTENT_W, lineGap: 3 });
  doc.y += 4;
  doc
    .moveTo(MARGIN_X, doc.y)
    .lineTo(MARGIN_X + 42, doc.y)
    .lineWidth(1)
    .strokeColor(GOLD)
    .stroke();
  doc.y += 14;
}

function drawKeyFindings(doc: PDFKit.PDFDocument, findings: string[]) {
  ensureRoom(doc, 140);
  doc.y += 8;
  doc
    .font(SANS_BOLD)
    .fontSize(8.5)
    .fillColor(GOLD)
    .text('KEY FINDINGS', MARGIN_X, doc.y, { characterSpacing: 2.4 });
  doc.y += 6;
  doc
    .moveTo(MARGIN_X, doc.y)
    .lineTo(MARGIN_X + CONTENT_W, doc.y)
    .lineWidth(0.75)
    .strokeColor(RULE)
    .stroke();
  doc.y += 14;

  findings.forEach((finding, i) => {
    doc.font(SANS).fontSize(10);
    const h = doc.heightOfString(finding, { width: CONTENT_W - 30, lineGap: 3.5 });
    ensureRoom(doc, Math.min(h, 70) + 10);
    const y = doc.y;
    doc
      .font(SERIF_BOLD)
      .fontSize(11)
      .fillColor(GOLD)
      .text(String(i + 1).padStart(2, '0'), MARGIN_X, y);
    doc
      .font(SANS)
      .fontSize(10)
      .fillColor(INK)
      .text(finding, MARGIN_X + 30, y, { width: CONTENT_W - 30, lineGap: 3.5 });
    doc.y += 9;
  });

  doc.y += 4;
  doc
    .moveTo(MARGIN_X, doc.y)
    .lineTo(MARGIN_X + CONTENT_W, doc.y)
    .lineWidth(0.75)
    .strokeColor(RULE)
    .stroke();
  doc.y += 20;
}

function drawClosing(doc: PDFKit.PDFDocument, spec: DocSpec) {
  const closing = spec.closing ?? {
    heading: 'Discuss this with our team',
    body:
      'Keningford Partners is a New York-based, principal-led capital advisory and M&A firm advising companies from Series A through the pre-IPO stage, alongside institutional investors, on equity, debt, and strategic transactions. Every mandate is led directly by senior bankers from origination through close.',
  };

  doc.addPage();
  doc.y = TOP_Y + 40;

  doc
    .font(SANS_BOLD)
    .fontSize(8.5)
    .fillColor(GOLD)
    .text('NEXT STEP', MARGIN_X, doc.y, { width: CONTENT_W, align: 'center', characterSpacing: 2.6 });
  doc.y += 10;
  doc
    .font(SERIF)
    .fontSize(21)
    .fillColor(NAVY)
    .text(closing.heading, MARGIN_X, doc.y, { width: CONTENT_W, align: 'center' });
  doc.y += 12;
  doc
    .font(SANS)
    .fontSize(10.5)
    .fillColor(MUTED)
    .text(closing.body, MARGIN_X + 40, doc.y, { width: CONTENT_W - 80, align: 'center', lineGap: 4.5 });

  doc.y += 26;
  doc
    .moveTo(PAGE_W / 2 - 26, doc.y)
    .lineTo(PAGE_W / 2 + 26, doc.y)
    .lineWidth(1)
    .strokeColor(GOLD)
    .stroke();
  doc.y += 22;

  const lines: [string, string][] = [
    ['EMAIL', contactEmail],
    ['PHONE', contactPhone],
    ['OFFICE', contactAddressFull],
    ['WEB', 'keningfordpartners.com'],
  ];
  for (const [label, value] of lines) {
    doc
      .font(SANS_BOLD)
      .fontSize(7.5)
      .fillColor(FAINT)
      .text(label, MARGIN_X, doc.y, { width: CONTENT_W, align: 'center', characterSpacing: 2 });
    doc.y += 3;
    doc
      .font(SANS)
      .fontSize(10.5)
      .fillColor(NAVY)
      .text(value, MARGIN_X, doc.y, { width: CONTENT_W, align: 'center' });
    doc.y += 14;
  }

  const disclaimer =
    'This document is provided by Keningford Partners for informational purposes only. It does not constitute an offer, solicitation, recommendation, or commitment for any transaction, nor investment, legal, tax, or accounting advice. Market observations reflect conditions at the date of publication and are subject to change without notice. Figures drawn from third-party sources are believed reliable but are not independently verified. Recipients should conduct their own analysis and consult their own advisors before acting on any matter described herein. © ' +
    new Date().getFullYear() +
    ' Keningford Partners. All rights reserved.';
  doc
    .font(SANS)
    .fontSize(7.5)
    .fillColor(FAINT)
    .text(disclaimer, MARGIN_X, BOTTOM_Y - 70, { width: CONTENT_W, align: 'center', lineGap: 2.5 });
}

function drawChrome(doc: PDFKit.PDFDocument, spec: DocSpec) {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i += 1) {
    if (i === 0) continue; // cover
    doc.switchToPage(i);

    // Header
    doc
      .font(SANS_BOLD)
      .fontSize(7.5)
      .fillColor(NAVY)
      .text('KENINGFORD PARTNERS', MARGIN_X, 44, { characterSpacing: 2, lineBreak: false });
    doc
      .font(SANS)
      .fontSize(7.5)
      .fillColor(FAINT)
      .text(spec.eyebrow.toUpperCase(), MARGIN_X, 44, {
        width: CONTENT_W,
        align: 'right',
        characterSpacing: 1.6,
        lineBreak: false,
      });
    doc
      .moveTo(MARGIN_X, 60)
      .lineTo(MARGIN_X + CONTENT_W, 60)
      .lineWidth(0.75)
      .strokeColor(RULE)
      .stroke();

    // Footer
    doc
      .moveTo(MARGIN_X, PAGE_H - 58)
      .lineTo(MARGIN_X + CONTENT_W, PAGE_H - 58)
      .lineWidth(0.75)
      .strokeColor(RULE)
      .stroke();
    const footerTitle = spec.title.length > 72 ? `${spec.title.slice(0, 69)}…` : spec.title;
    doc
      .font(SANS)
      .fontSize(7.5)
      .fillColor(FAINT)
      .text(footerTitle, MARGIN_X, PAGE_H - 48, { lineBreak: false });
    doc
      .font(SANS)
      .fontSize(7.5)
      .fillColor(FAINT)
      .text(`Page ${i + 1} of ${range.count}`, MARGIN_X, PAGE_H - 48, {
        width: CONTENT_W,
        align: 'right',
        lineBreak: false,
      });
  }
}

async function renderPdf(spec: DocSpec): Promise<void> {
  fs.mkdirSync(path.dirname(spec.outPath), { recursive: true });

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: TOP_Y, bottom: PAGE_H - BOTTOM_Y, left: MARGIN_X, right: MARGIN_X },
    bufferPages: true,
    info: {
      Title: spec.title,
      Author: 'Keningford Partners',
      Subject: spec.subtitle,
      Creator: 'Keningford Partners',
    },
  });

  const stream = fs.createWriteStream(spec.outPath);
  doc.pipe(stream);

  drawCover(doc, spec);

  doc.addPage();
  doc.y = TOP_Y;

  const blocks = parseContent(spec.content);
  const totalSections = blocks.filter((b) => b.kind === 'heading').length;
  let sectionIndex = 0;
  let paragraphsBeforeFirstHeading = 0;
  let findingsRendered = spec.keyFindings ? false : true;

  for (const block of blocks) {
    if (block.kind === 'heading') {
      if (!findingsRendered) {
        drawKeyFindings(doc, spec.keyFindings!);
        findingsRendered = true;
      }
      sectionIndex += 1;
      doc.outline.addItem(block.text);
      drawSectionHeading(doc, block.text, sectionIndex, totalSections);
    } else if (block.kind === 'paragraph') {
      const isLead = sectionIndex === 0 && paragraphsBeforeFirstHeading === 0;
      if (sectionIndex === 0) paragraphsBeforeFirstHeading += 1;
      drawParagraph(doc, block.text, { lead: isLead });
    } else {
      drawBullets(doc, block.items);
    }
  }
  if (!findingsRendered) drawKeyFindings(doc, spec.keyFindings!);

  drawClosing(doc, spec);
  drawChrome(doc, spec);

  doc.end();
  await new Promise<void>((resolve, reject) => {
    stream.on('finish', () => resolve());
    stream.on('error', reject);
  });
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const jobs: DocSpec[] = [];

  for (const guide of investorGuides) {
    jobs.push({
      outPath: path.join(publicDir, 'downloads', 'guides', `${guide.slug}.pdf`),
      eyebrow: 'Investor Guide',
      title: guide.title,
      subtitle: guide.excerpt,
      meta: `${guide.date} · ${guide.readTime}`,
      content: guide.content,
      keyFindings: guide.stats ?? guide.takeaways,
    });
  }

  for (const resource of resources) {
    jobs.push({
      outPath: path.join(publicDir, 'downloads', 'resources', `${resource.slug}.pdf`),
      eyebrow: 'Founder Resource',
      title: resource.title,
      subtitle: resource.description,
      meta: 'Keningford Partners Research',
      content: resource.content,
      closing: {
        heading: 'Put this to work with our team',
        body:
          'This resource is part of the Keningford Partners founder toolkit. If you are preparing for a capital raise, sale process, or board decision, our team will review your materials against this framework and tell you where the gaps are, at no cost.',
      },
    });
  }

  for (const report of reports) {
    jobs.push({
      outPath: path.join(publicDir, report.pdfUrl.replace(/^\//, '').split('/').join(path.sep)),
      eyebrow: `${report.type} · ${report.sector}`,
      title: report.title,
      subtitle: report.excerpt,
      meta: `${report.date} · Keningford Partners Research`,
      content: report.pdfContent ?? report.summary,
    });
  }

  for (const job of jobs) {
    await renderPdf(job);
    const stat = fs.statSync(job.outPath);
    console.log(`✓ ${path.relative(process.cwd(), job.outPath)} (${(stat.size / 1024).toFixed(0)} KB)`);
  }

  console.log(`\nGenerated ${jobs.length} PDFs.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

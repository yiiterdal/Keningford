/**
 * Generates branded, downloadable PDFs for investor guides, resources, and reports.
 *
 * Usage: npm run pdfs
 * Output: public/downloads/guides/*.pdf, public/downloads/resources/*.pdf, public/reports/*.pdf
 *
 * Pagination is fully manual (margin: 0) so PDFKit never auto-inserts blank pages.
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
const TOP_Y = 78;
const BOTTOM_Y = PAGE_H - 72;
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

/** Advance to a fresh content page. */
function newPage(doc: PDFKit.PDFDocument) {
  doc.addPage();
  doc.y = TOP_Y;
}

/** If remaining space is under `needed`, start a new page. */
function ensureRoom(doc: PDFKit.PDFDocument, needed: number) {
  if (doc.y + needed > BOTTOM_Y) {
    newPage(doc);
  }
}

/**
 * Draw wrapped text with manual page breaks. Never lets PDFKit auto-paginate,
 * which is what was producing blank pages when mixed with addPage().
 */
function drawWrappedText(
  doc: PDFKit.PDFDocument,
  text: string,
  opts: {
    x: number;
    width: number;
    font: string;
    size: number;
    color: string;
    lineGap?: number;
    align?: 'left' | 'center' | 'right';
    afterGap?: number;
  },
) {
  const lineGap = opts.lineGap ?? 3.5;
  const afterGap = opts.afterGap ?? 10;
  doc.font(opts.font).fontSize(opts.size).fillColor(opts.color);

  const words = text.split(/\s+/).filter(Boolean);
  let line = '';
  const lines: string[] = [];

  for (const word of words) {
    const trial = line ? `${line} ${word}` : word;
    if (doc.widthOfString(trial) > opts.width && line) {
      lines.push(line);
      line = word;
    } else {
      line = trial;
    }
  }
  if (line) lines.push(line);

  const lineHeight = opts.size * 1.15 + lineGap;

  for (const l of lines) {
    ensureRoom(doc, lineHeight);
    doc.font(opts.font).fontSize(opts.size).fillColor(opts.color);
    doc.text(l, opts.x, doc.y, {
      width: opts.width,
      align: opts.align ?? 'left',
      lineBreak: false,
    });
    doc.y += lineHeight;
  }

  doc.y += afterGap;
}

function drawCover(doc: PDFKit.PDFDocument, spec: DocSpec) {
  // First page already exists from PDFDocument constructor.
  doc.rect(0, 0, PAGE_W, PAGE_H).fill(NAVY);

  doc
    .font(SANS_BOLD)
    .fontSize(12)
    .fillColor('#ffffff')
    .text('KENINGFORD PARTNERS', MARGIN_X, 96, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 3.5,
      lineBreak: false,
    });
  doc
    .font(SANS)
    .fontSize(8)
    .fillColor(GOLD)
    .text('C A P I T A L   A D V I S O R Y', MARGIN_X, 118, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 2,
      lineBreak: false,
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
      lineBreak: false,
    });

  // Title — wrap manually so we stay on the cover page.
  doc.font(SERIF).fontSize(28).fillColor('#ffffff');
  const titleWords = spec.title.split(/\s+/);
  let titleLine = '';
  const titleLines: string[] = [];
  const titleWidth = CONTENT_W - 48;
  for (const word of titleWords) {
    const trial = titleLine ? `${titleLine} ${word}` : word;
    if (doc.widthOfString(trial) > titleWidth && titleLine) {
      titleLines.push(titleLine);
      titleLine = word;
    } else {
      titleLine = trial;
    }
  }
  if (titleLine) titleLines.push(titleLine);

  let titleY = midRuleY + 72;
  for (const l of titleLines) {
    doc.font(SERIF).fontSize(28).fillColor('#ffffff').text(l, MARGIN_X + 24, titleY, {
      width: titleWidth,
      align: 'center',
      lineBreak: false,
    });
    titleY += 36;
  }

  doc.font(SANS).fontSize(10.5).fillColor('#b9c2d4');
  const subWords = spec.subtitle.split(/\s+/);
  let subLine = '';
  const subLines: string[] = [];
  const subWidth = CONTENT_W - 96;
  for (const word of subWords) {
    const trial = subLine ? `${subLine} ${word}` : word;
    if (doc.widthOfString(trial) > subWidth && subLine) {
      subLines.push(subLine);
      subLine = word;
    } else {
      subLine = trial;
    }
  }
  if (subLine) subLines.push(subLine);

  let subY = titleY + 18;
  for (const l of subLines.slice(0, 5)) {
    doc.font(SANS).fontSize(10.5).fillColor('#b9c2d4').text(l, MARGIN_X + 48, subY, {
      width: subWidth,
      align: 'center',
      lineBreak: false,
    });
    subY += 16;
  }

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
      lineBreak: false,
    });
  doc
    .font(SANS)
    .fontSize(8.5)
    .fillColor('#8e99b1')
    .text('keningfordpartners.com', MARGIN_X, PAGE_H - 128, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 1,
      lineBreak: false,
    });
}

function drawParagraph(doc: PDFKit.PDFDocument, text: string, opts: { lead?: boolean } = {}) {
  drawWrappedText(doc, text, {
    x: MARGIN_X,
    width: CONTENT_W,
    font: opts.lead ? SERIF : SANS,
    size: opts.lead ? 11.5 : 10,
    color: opts.lead ? NAVY : INK,
    lineGap: opts.lead ? 4 : 3.25,
    afterGap: 11,
  });
}

function drawBullets(doc: PDFKit.PDFDocument, items: string[]) {
  for (const item of items) {
    // Keep the bullet with at least the first line of text.
    ensureRoom(doc, 28);

    const bulletX = MARGIN_X + 2;
    const textX = MARGIN_X + 16;
    const textW = CONTENT_W - 16;
    const startY = doc.y;

    doc.font(SANS_BOLD).fontSize(10).fillColor(GOLD).text('•', bulletX, startY, { lineBreak: false });

    // Draw item text starting at the same Y; subsequent lines indent without the bullet.
    doc.y = startY;
    drawWrappedText(doc, item, {
      x: textX,
      width: textW,
      font: SANS,
      size: 10,
      color: INK,
      lineGap: 3,
      afterGap: 8,
    });
  }
  doc.y += 4;
}

function drawSectionHeading(doc: PDFKit.PDFDocument, text: string, index: number, total: number) {
  // Keep heading with the first lines of the section — break only if under ~2 lines of room.
  ensureRoom(doc, 56);

  if (!(index === 1 && doc.y <= TOP_Y + 2)) {
    doc.y += 10;
  }

  doc
    .font(SANS_BOLD)
    .fontSize(7.5)
    .fillColor(GOLD)
    .text(
      `SECTION ${String(index).padStart(2, '0')} OF ${String(total).padStart(2, '0')}`,
      MARGIN_X,
      doc.y,
      { characterSpacing: 2, lineBreak: false },
    );
  doc.y += 14;

  drawWrappedText(doc, text, {
    x: MARGIN_X,
    width: CONTENT_W,
    font: SERIF_BOLD,
    size: 14.5,
    color: NAVY,
    lineGap: 2.5,
    afterGap: 4,
  });

  doc
    .moveTo(MARGIN_X, doc.y)
    .lineTo(MARGIN_X + 42, doc.y)
    .lineWidth(1)
    .strokeColor(GOLD)
    .stroke();
  doc.y += 12;
}

function drawKeyFindings(doc: PDFKit.PDFDocument, findings: string[]) {
  ensureRoom(doc, 48);
  doc.y += 6;

  doc
    .font(SANS_BOLD)
    .fontSize(8)
    .fillColor(GOLD)
    .text('KEY FINDINGS', MARGIN_X, doc.y, { characterSpacing: 2.2, lineBreak: false });
  doc.y += 12;

  doc
    .moveTo(MARGIN_X, doc.y)
    .lineTo(MARGIN_X + CONTENT_W, doc.y)
    .lineWidth(0.75)
    .strokeColor(RULE)
    .stroke();
  doc.y += 12;

  findings.forEach((finding, i) => {
    ensureRoom(doc, 28);
    const y = doc.y;
    doc
      .font(SERIF_BOLD)
      .fontSize(10)
      .fillColor(GOLD)
      .text(String(i + 1).padStart(2, '0'), MARGIN_X, y, { lineBreak: false });

    doc.y = y;
    drawWrappedText(doc, finding, {
      x: MARGIN_X + 28,
      width: CONTENT_W - 28,
      font: SANS,
      size: 9.5,
      color: INK,
      lineGap: 2.75,
      afterGap: 8,
    });
  });

  ensureRoom(doc, 16);
  doc
    .moveTo(MARGIN_X, doc.y)
    .lineTo(MARGIN_X + CONTENT_W, doc.y)
    .lineWidth(0.75)
    .strokeColor(RULE)
    .stroke();
  doc.y += 16;
}

function drawClosing(doc: PDFKit.PDFDocument, spec: DocSpec) {
  const closing = spec.closing ?? {
    heading: 'Discuss this with our team',
    body:
      'Keningford Partners is a New York-based, principal-led capital advisory and M&A firm advising companies from Series A through the pre-IPO stage, alongside institutional investors, on equity, debt, and strategic transactions. Every mandate is led directly by senior bankers from origination through close.',
  };

  // Prefer filling the current page. Only break when the page is already full and
  // there is not enough room left for the closing block (~280pt).
  const closingNeeds = 280;
  const remaining = BOTTOM_Y - doc.y;
  if (remaining < closingNeeds && doc.y > TOP_Y + 80) {
    newPage(doc);
    doc.y = TOP_Y + 36;
  } else if (doc.y > TOP_Y + 4) {
    doc.y += 28;
  } else {
    doc.y = TOP_Y + 36;
  }

  doc
    .font(SANS_BOLD)
    .fontSize(8)
    .fillColor(GOLD)
    .text('NEXT STEP', MARGIN_X, doc.y, {
      width: CONTENT_W,
      align: 'center',
      characterSpacing: 2.4,
      lineBreak: false,
    });
  doc.y += 18;

  drawWrappedText(doc, closing.heading, {
    x: MARGIN_X,
    width: CONTENT_W,
    font: SERIF,
    size: 20,
    color: NAVY,
    lineGap: 3,
    align: 'center',
    afterGap: 14,
  });

  drawWrappedText(doc, closing.body, {
    x: MARGIN_X + 36,
    width: CONTENT_W - 72,
    font: SANS,
    size: 10,
    color: MUTED,
    lineGap: 3.5,
    align: 'center',
    afterGap: 20,
  });

  doc
    .moveTo(PAGE_W / 2 - 26, doc.y)
    .lineTo(PAGE_W / 2 + 26, doc.y)
    .lineWidth(1)
    .strokeColor(GOLD)
    .stroke();
  doc.y += 20;

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
      .text(label, MARGIN_X, doc.y, {
        width: CONTENT_W,
        align: 'center',
        characterSpacing: 2,
        lineBreak: false,
      });
    doc.y += 12;
    doc
      .font(SANS)
      .fontSize(10)
      .fillColor(NAVY)
      .text(value, MARGIN_X, doc.y, {
        width: CONTENT_W,
        align: 'center',
        lineBreak: false,
      });
    doc.y += 16;
  }

  const disclaimer =
    'This document is provided by Keningford Partners for informational purposes only. It does not constitute an offer, solicitation, recommendation, or commitment for any transaction, nor investment, legal, tax, or accounting advice. Market observations reflect conditions at the date of publication and are subject to change without notice. Figures drawn from third-party sources are believed reliable but are not independently verified. Recipients should conduct their own analysis and consult their own advisors before acting on any matter described herein. © ' +
    new Date().getFullYear() +
    ' Keningford Partners. All rights reserved.';

  // Pin disclaimer near the bottom of this closing page.
  doc.font(SANS).fontSize(7).fillColor(FAINT);
  const discWords = disclaimer.split(/\s+/);
  let discLine = '';
  const discLines: string[] = [];
  for (const word of discWords) {
    const trial = discLine ? `${discLine} ${word}` : word;
    if (doc.widthOfString(trial) > CONTENT_W && discLine) {
      discLines.push(discLine);
      discLine = word;
    } else {
      discLine = trial;
    }
  }
  if (discLine) discLines.push(discLine);

  let discY = BOTTOM_Y - discLines.length * 11 - 4;
  for (const l of discLines) {
    doc.font(SANS).fontSize(7).fillColor(FAINT).text(l, MARGIN_X, discY, {
      width: CONTENT_W,
      align: 'center',
      lineBreak: false,
    });
    discY += 11;
  }
}

function drawChrome(doc: PDFKit.PDFDocument, spec: DocSpec) {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i += 1) {
    if (i === 0) continue; // cover
    doc.switchToPage(i);

    doc
      .font(SANS_BOLD)
      .fontSize(7)
      .fillColor(NAVY)
      .text('KENINGFORD PARTNERS', MARGIN_X, 36, { characterSpacing: 1.8, lineBreak: false });
    doc
      .font(SANS)
      .fontSize(7)
      .fillColor(FAINT)
      .text(spec.eyebrow.toUpperCase(), MARGIN_X, 36, {
        width: CONTENT_W,
        align: 'right',
        characterSpacing: 1.4,
        lineBreak: false,
      });
    doc
      .moveTo(MARGIN_X, 50)
      .lineTo(MARGIN_X + CONTENT_W, 50)
      .lineWidth(0.75)
      .strokeColor(RULE)
      .stroke();

    doc
      .moveTo(MARGIN_X, PAGE_H - 48)
      .lineTo(MARGIN_X + CONTENT_W, PAGE_H - 48)
      .lineWidth(0.75)
      .strokeColor(RULE)
      .stroke();
    const footerTitle = spec.title.length > 72 ? `${spec.title.slice(0, 69)}…` : spec.title;
    doc
      .font(SANS)
      .fontSize(7)
      .fillColor(FAINT)
      .text(footerTitle, MARGIN_X, PAGE_H - 38, { lineBreak: false });
    doc
      .font(SANS)
      .fontSize(7)
      .fillColor(FAINT)
      .text(`Page ${i + 1} of ${range.count}`, MARGIN_X, PAGE_H - 38, {
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
    margin: 0, // critical: disables PDFKit auto page-breaks that were creating blanks
    bufferPages: true,
    autoFirstPage: true,
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

  newPage(doc);

  const blocks = parseContent(spec.content);
  const totalSections = blocks.filter((b) => b.kind === 'heading').length;
  let sectionIndex = 0;
  let paragraphsBeforeFirstHeading = 0;
  let findingsRendered = !spec.keyFindings?.length;

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

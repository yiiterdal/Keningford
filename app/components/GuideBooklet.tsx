'use client';

import { useMemo, useState } from 'react';
import { contactEmail } from '../data/contact';
import PdfPageCanvas from './PdfPageCanvas';

interface GuideBookletProps {
  title: string;
  date: string;
  excerpt: string;
  content: string;
  subtitle?: string;
  docCode?: string;
  coverDate?: string;
  /** Path to the PDF under /public (download + optional chart-rich paper). */
  pdfUrl?: string;
  /**
   * When true, embed the handcrafted PDF (with charts/figures) in the Yanne-sized booklet frame.
   */
  embedPdf?: boolean;
  /** Total pages in the embedded PDF (for Prev/Next). Defaults to 12. */
  pdfPageCount?: number;
  /** When true, download CTA emphasizes the chart-rich research PDF. */
  hasChartPdf?: boolean;
  readTime?: string;
}

const pagerBtnActive =
  'inline-flex min-w-[5.5rem] items-center justify-center gap-1.5 rounded-sm bg-[#3d7a84] px-4 py-2 text-[13px] font-medium text-white transition hover:bg-[#326870] disabled:cursor-not-allowed disabled:bg-[#c5ced1] disabled:text-white/90';

/** Yanne-style PDF stage: one canvas page at a time (no iframe scrollbar / black gutters). */
function PdfBookletViewer({
  title,
  pdfUrl,
  pageCount: initialPageCount,
}: {
  title: string;
  pdfUrl: string;
  pageCount: number;
}) {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(initialPageCount);
  const isFirst = page <= 1;
  const isLast = page >= pageCount;

  return (
    <div className="w-full">
      <div className="bg-[#f0f0f0] px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto flex w-full max-w-[min(34rem,calc((100vh-14rem)*8.5/11))] flex-col items-center">
          <div className="w-full overflow-hidden bg-white shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
            <PdfPageCanvas
              url={pdfUrl}
              page={page}
              onDocumentLoad={(count) => {
                setPageCount(count);
                setPage((current) => Math.min(current, count));
              }}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 md:mt-7 md:gap-8">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={isFirst}
              aria-label="Previous page"
              className={pagerBtnActive}
            >
              ← Prev
            </button>
            <span className="min-w-[7rem] text-center text-[13px] tabular-nums text-gray-600">
              Page {page} of {pageCount}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={isLast}
              aria-label="Next page"
              className={pagerBtnActive}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 text-center">
        <a
          href={pdfUrl}
          download
          aria-label={`Download ${title} PDF`}
          className="inline-flex items-center gap-2 border border-[#1f4a52] px-6 py-3 text-sm font-medium text-[#1f4a52] transition hover:bg-[#1f4a52] hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"
            />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
}

interface Section {
  heading: string | null;
  paragraphs: string[];
}

type BookletPage =
  | { type: 'cover' }
  | { type: 'contents'; sections: { heading: string; pageIndex: number }[] }
  | { type: 'section'; heading: string | null; paragraphs: string[]; number: number; total: number }
  | { type: 'back' };

function parseSections(content: string): Section[] {
  const blocks = content.split('\n\n').filter(Boolean);
  const sections: Section[] = [];

  for (const block of blocks) {
    if (block.startsWith('## ')) {
      sections.push({ heading: block.slice(3), paragraphs: [] });
    } else if (sections.length === 0) {
      sections.push({ heading: null, paragraphs: [block] });
    } else {
      sections[sections.length - 1].paragraphs.push(block);
    }
  }

  return sections;
}

/** Teal mesh wave from bottom-left (Yanne cover motif). */
function CoverWave() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 h-[48%] w-[72%] text-[#7eb8c0]"
      viewBox="0 0 420 260"
      fill="none"
      aria-hidden
    >
      {[0, 12, 24, 36, 48, 60, 72, 84].map((offset) => (
        <path
          key={offset}
          d={`M-20 ${210 - offset * 0.35} C60 ${160 - offset * 0.4}, 140 ${230 - offset * 0.35}, 220 ${150 - offset * 0.45} C300 ${70 - offset * 0.35}, 360 ${140 - offset * 0.4}, 460 ${90 - offset * 0.3}`}
          stroke="currentColor"
          strokeWidth={offset === 0 ? 1.15 : 0.85}
          opacity={Math.max(0.22, 0.7 - offset * 0.06)}
        />
      ))}
    </svg>
  );
}

export default function GuideBooklet({
  title,
  date,
  excerpt,
  content,
  subtitle,
  docCode,
  coverDate,
  pdfUrl,
  embedPdf = false,
  pdfPageCount = 12,
  hasChartPdf = false,
}: GuideBookletProps) {
  const pages: BookletPage[] = useMemo(() => {
    const sections = parseSections(content);
    const numbered = sections.filter((s) => s.heading);
    const total = numbered.length;

    let counter = 0;
    const sectionPages: BookletPage[] = sections.map((s) => {
      if (s.heading) counter += 1;
      return {
        type: 'section' as const,
        heading: s.heading,
        paragraphs: s.paragraphs,
        number: s.heading ? counter : 0,
        total,
      };
    });

    const contents = sections
      .map((s, i) => ({ heading: s.heading, pageIndex: i + 2 }))
      .filter((entry): entry is { heading: string; pageIndex: number } => entry.heading !== null);

    return [{ type: 'cover' }, { type: 'contents', sections: contents }, ...sectionPages, { type: 'back' }];
  }, [content]);

  const [pageIndex, setPageIndex] = useState(0);

  if (embedPdf && pdfUrl) {
    return <PdfBookletViewer title={title} pdfUrl={pdfUrl} pageCount={pdfPageCount} />;
  }

  const page = pages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;
  const isCover = page.type === 'cover';

  const goPrev = () => setPageIndex((i) => Math.max(0, i - 1));
  const goNext = () => setPageIndex((i) => Math.min(pages.length - 1, i + 1));

  const coverSubtitle = subtitle ?? excerpt;
  const coverDateLabel = coverDate ?? date;
  const coverDocCode = docCode ?? 'KP/WP';

  return (
    <div className="mx-auto">
      <div className="bg-[#e8eaed] px-4 py-6 md:px-10 md:py-10">
        <div className="relative mx-auto flex min-h-[700px] w-full max-w-[40rem] flex-col overflow-hidden bg-white shadow-[0_10px_40px_rgba(15,23,42,0.1)] md:min-h-[840px]">
          {isCover ? (
            <>
              <CoverWave />
              <div className="relative z-10 flex flex-1 flex-col px-10 pb-9 pt-14 text-center md:px-16 md:pt-16">
                <div>
                  <p className="font-serif text-[12px] uppercase tracking-[0.22em] text-[#1f3d42]">
                    Keningford Partners
                  </p>
                  <p className="mt-2 font-serif text-[9px] uppercase tracking-[0.3em] text-gray-400">
                    Institutional Research
                  </p>
                </div>

                <div className="mx-auto my-auto max-w-[22rem] px-1 py-12 md:max-w-md">
                  <h3 className="font-serif text-[1.55rem] font-semibold leading-[1.28] text-[#1f4a52] md:text-[1.85rem]">
                    Keningford Partners White Paper: {title}
                  </h3>
                  <p className="mx-auto mt-7 max-w-sm font-serif text-[15px] italic leading-relaxed text-gray-600 md:text-[16px]">
                    {coverSubtitle}
                  </p>

                  <div className="mt-11 flex items-center justify-center gap-2.5" aria-hidden>
                    <span className="h-[3px] w-[3px] rounded-full bg-gray-400" />
                    <span className="h-[3px] w-[3px] rounded-full bg-gray-400" />
                    <span className="h-[3px] w-[3px] rounded-full bg-gray-400" />
                  </div>

                  <p className="mt-9 font-serif text-[15px] text-[#1f3d42]">Keningford Partners Research</p>
                  <p className="mt-1.5 font-serif text-[15px] text-gray-500">{coverDateLabel}</p>
                </div>

                <p className="font-serif text-[10px] tracking-[0.02em] text-gray-400">
                  Keningford Partners | {coverDocCode} | keningfordpartners.com
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between border-b border-gray-200 px-8 pb-4 pt-6 md:px-12">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1f4a52]">
                  Keningford Partners
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                  Institutional Research
                </span>
              </div>

              <div
                className={`flex flex-1 flex-col px-8 py-10 md:px-14 md:py-12 ${
                  page.type === 'back' ? 'justify-center' : 'justify-start'
                }`}
              >
                {page.type === 'contents' && (
                  <div>
                    <h3 className="mb-8 font-serif text-2xl text-[#1f4a52]">Contents</h3>
                    <ol className="space-y-1">
                      {page.sections.map((entry, i) => (
                        <li key={entry.heading}>
                          <button
                            type="button"
                            onClick={() => setPageIndex(entry.pageIndex)}
                            className="group flex w-full items-baseline gap-4 border-b border-dotted border-gray-300 py-3 text-left"
                          >
                            <span className="font-serif text-sm text-[#3d7a84]">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="flex-1 text-[14px] font-medium text-[#1f4a52] group-hover:underline">
                              {entry.heading}
                            </span>
                            <span className="text-xs tabular-nums text-gray-400">{entry.pageIndex + 1}</span>
                          </button>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {page.type === 'section' && (
                  <div>
                    {page.heading ? (
                      <>
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3d7a84]">
                          Section {String(page.number).padStart(2, '0')} of{' '}
                          {String(page.total).padStart(2, '0')}
                        </p>
                        <h3 className="mb-6 font-serif text-xl text-[#1f4a52] md:text-2xl">
                          {page.heading}
                        </h3>
                      </>
                    ) : (
                      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3d7a84]">
                        Introduction
                      </p>
                    )}
                    <div className="space-y-3.5">
                      {page.paragraphs.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-[13px] leading-[1.75] text-gray-700 md:text-[13.5px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {page.type === 'back' && (
                  <div className="text-center">
                    <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400">
                      Next Step
                    </p>
                    <h3 className="mb-5 font-serif text-2xl text-[#1f4a52] md:text-3xl">
                      Discuss this with our team
                    </h3>
                    <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-600">
                      If you are preparing a raise, sale, or acquisition, our team will run a focused
                      readiness review against the framework in this paper and tell you which workstreams
                      are ready and which need attention.
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="inline-flex items-center border border-[#1f4a52] px-6 py-3 text-sm font-medium text-[#1f4a52] transition hover:bg-[#1f4a52] hover:text-white"
                    >
                      {contactEmail}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 px-8 py-3 md:px-12">
                <span className="truncate pr-4 text-[10px] uppercase tracking-[0.14em] text-gray-400">
                  {title}
                </span>
                <span className="shrink-0 text-[10px] tabular-nums text-gray-400">
                  {pageIndex + 1} / {pages.length}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="mt-7 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={isFirst}
            aria-label="Previous page"
            className={pagerBtnActive}
          >
            ← Prev
          </button>
          <span className="min-w-[7rem] text-center text-[13px] tabular-nums text-gray-600">
            Page {pageIndex + 1} of {pages.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={isLast}
            aria-label="Next page"
            className={pagerBtnActive}
          >
            Next →
          </button>
        </div>
      </div>

      {pdfUrl && (
        <div className="mt-7 text-center">
          <a
            href={pdfUrl}
            download
            aria-label={`Download ${title} PDF`}
            className="inline-flex items-center gap-2 border border-[#1f4a52] px-6 py-3 text-sm font-medium text-[#1f4a52] transition hover:bg-[#1f4a52] hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"
              />
            </svg>
            {hasChartPdf ? 'Download PDF with charts' : 'Download PDF'}
          </a>
          {hasChartPdf && (
            <p className="mt-2 text-xs text-gray-500">
              Full research PDF includes charts and source figures.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

'use client';

import { useMemo, useState } from 'react';
import { contactEmail } from '../data/contact';

interface GuideBookletProps {
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  /** Path to the generated PDF under /public, e.g. /downloads/guides/slug.pdf */
  pdfUrl?: string;
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

export default function GuideBooklet({ title, readTime, date, excerpt, content, pdfUrl }: GuideBookletProps) {
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

    // Contents page lives at index 1, so section pages start at index 2.
    const contents = sections
      .map((s, i) => ({ heading: s.heading, pageIndex: i + 2 }))
      .filter((entry): entry is { heading: string; pageIndex: number } => entry.heading !== null);

    return [{ type: 'cover' }, { type: 'contents', sections: contents }, ...sectionPages, { type: 'back' }];
  }, [content]);

  const [pageIndex, setPageIndex] = useState(0);
  const page = pages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;

  const goPrev = () => setPageIndex((i) => Math.max(0, i - 1));
  const goNext = () => setPageIndex((i) => Math.min(pages.length - 1, i + 1));

  const isSpreadPage = page.type === 'cover' || page.type === 'back';

  return (
    <div className="mx-auto">
      {/* Document viewer frame */}
      <div className="border border-gray-200 bg-gray-100 p-4 md:p-10">
        {/* Sheet */}
        <div className="relative mx-auto flex min-h-[640px] max-w-2xl flex-col bg-white shadow-lg shadow-black/10 md:min-h-[780px]">
          {/* Letterhead */}
          <div className="flex items-center justify-between border-b border-gray-200 px-8 pb-4 pt-6 md:px-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-navy">
              Keningford Partners
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Research</span>
          </div>

          {/* Page body */}
          <div
            className={`flex flex-1 flex-col px-8 py-10 md:px-14 md:py-12 ${
              isSpreadPage ? 'justify-center' : 'justify-start'
            }`}
          >
            {page.type === 'cover' && (
              <div className="text-center">
                <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400">
                  Founder Briefing
                </p>
                <div aria-hidden className="mx-auto mb-8 h-px w-14 bg-[#BF9B5F]" />
                <h3 className="mx-auto mb-6 max-w-md font-serif text-2xl leading-snug text-navy md:text-[2.1rem] md:leading-[1.25]">
                  {title}
                </h3>
                <p className="mx-auto mb-10 max-w-sm text-sm leading-relaxed text-gray-500">{excerpt}</p>
                <div aria-hidden className="mx-auto mb-8 h-px w-14 bg-[#BF9B5F]" />
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                  {date} · {readTime}
                </p>
              </div>
            )}

            {page.type === 'contents' && (
              <div>
                <h3 className="mb-8 font-serif text-2xl text-navy">Contents</h3>
                <ol className="space-y-1">
                  {page.sections.map((entry, i) => (
                    <li key={entry.heading}>
                      <button
                        type="button"
                        onClick={() => setPageIndex(entry.pageIndex)}
                        className="group flex w-full items-baseline gap-4 border-b border-dotted border-gray-300 py-3 text-left"
                      >
                        <span className="font-serif text-sm text-[#BF9B5F]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-[14px] font-medium text-navy group-hover:underline">
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
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#BF9B5F]">
                      Section {String(page.number).padStart(2, '0')} of {String(page.total).padStart(2, '0')}
                    </p>
                    <h3 className="mb-6 font-serif text-xl text-navy md:text-2xl">{page.heading}</h3>
                  </>
                ) : (
                  <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#BF9B5F]">
                    Introduction
                  </p>
                )}
                <div className="space-y-3.5">
                  {page.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-[13px] leading-[1.75] text-gray-700 md:text-[13.5px]">
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
                <h3 className="mb-5 font-serif text-2xl text-navy md:text-3xl">Discuss this with our team</h3>
                <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-600">
                  If you are a founder six to twelve months from launching a growth-round process, our team
                  will run a no-cost readiness review against this framework and tell you which workstreams
                  are ready and which need attention.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center border border-navy px-6 py-3 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
                >
                  {contactEmail}
                </a>
              </div>
            )}
          </div>

          {/* Page footer */}
          <div className="flex items-center justify-between border-t border-gray-200 px-8 py-3 md:px-12">
            <span className="truncate pr-4 text-[10px] uppercase tracking-[0.14em] text-gray-400">{title}</span>
            <span className="shrink-0 text-[10px] tabular-nums text-gray-400">
              {pageIndex + 1} / {pages.length}
            </span>
          </div>
        </div>

        {/* Pager */}
        <div className="mt-5 flex items-center justify-center gap-6 text-[13px]">
          <button
            type="button"
            onClick={goPrev}
            disabled={isFirst}
            aria-label="Previous page"
            className="font-medium text-navy transition disabled:cursor-not-allowed disabled:text-gray-300 enabled:hover:underline"
          >
            ←Prev
          </button>
          <span className="tabular-nums text-gray-500">
            Page {pageIndex + 1} of {pages.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={isLast}
            aria-label="Next page"
            className="font-medium text-navy transition disabled:cursor-not-allowed disabled:text-gray-300 enabled:hover:underline"
          >
            Next→
          </button>
        </div>
      </div>

      {/* Download PDF */}
      {pdfUrl && (
        <div className="mt-5 text-center">
          <a
            href={pdfUrl}
            download
            aria-label={`Download ${title} PDF`}
            className="inline-flex items-center gap-2 border border-navy px-6 py-3 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
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
      )}
    </div>
  );
}

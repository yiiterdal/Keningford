'use client';

import { useMemo, useState } from 'react';
import { GuideIcon } from './GuideIcons';
import ResourceCard from './ResourceCard';
import { contactEmail } from '../data/contact';
import type { GuideIconId } from '../data/investor-guides';
import type { Resource } from '../data/resources';

interface GuideBookletProps {
  title: string;
  readTime: string;
  excerpt: string;
  content: string;
  icon: GuideIconId;
  resource?: Resource;
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

export default function GuideBooklet({ title, readTime, excerpt, content, icon, resource }: GuideBookletProps) {
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
  const [showDownload, setShowDownload] = useState(false);
  const page = pages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;
  const progress = ((pageIndex + 1) / pages.length) * 100;

  const goPrev = () => setPageIndex((i) => Math.max(0, i - 1));
  const goNext = () => setPageIndex((i) => Math.min(pages.length - 1, i + 1));

  const isDarkPage = page.type === 'cover' || page.type === 'back';

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        {/* Book spine and stacked-page edges */}
        <div aria-hidden className="absolute -left-2 top-3 bottom-3 hidden w-2 rounded-l-sm bg-navy md:block" />
        <div aria-hidden className="absolute -right-1.5 top-4 bottom-4 hidden w-1.5 border-r border-gray-300 bg-gray-100 md:block" />
        <div aria-hidden className="absolute -right-3 top-6 bottom-6 hidden w-1.5 border-r border-gray-200 bg-gray-50 md:block" />

        <div className="relative overflow-hidden border border-gray-200 bg-white shadow-xl shadow-black/10">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-5 py-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M12 6.5c-1.8-1.3-4.2-2-6.5-2v13c2.3 0 4.7.7 6.5 2 1.8-1.3 4.2-2 6.5-2v-13c-2.3 0-4.7.7-6.5 2zm0 0v13"
                />
              </svg>
              Booklet
            </span>
            <button
              type="button"
              onClick={() => setShowDownload((prev) => !prev)}
              className="inline-flex items-center gap-2 bg-navy px-4 py-2 text-[12px] font-medium text-white transition hover:bg-navy-dark"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"
                />
              </svg>
              Download PDF
            </button>
          </div>

          {/* Page body */}
          <div
            className={`flex min-h-[460px] flex-col justify-center px-8 py-10 md:min-h-[500px] md:px-14 md:py-12 ${
              isDarkPage ? 'bg-[#0e1c38]' : 'bg-[#fbfaf7]'
            }`}
          >
            {page.type === 'cover' && (
              <div className="text-center">
                <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a062]">
                  Keningford Partners Research
                </p>
                <span className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-[#c4a062]/50 bg-[#c4a062]/10 text-[#c4a062]">
                  <GuideIcon id={icon} className="h-6 w-6" />
                </span>
                <h3 className="mx-auto mb-5 max-w-md font-serif text-2xl leading-snug text-white md:text-[2rem]">
                  {title}
                </h3>
                <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-white/60">{excerpt}</p>
                <div className="mx-auto mb-8 h-px w-16 bg-[#c4a062]/50" aria-hidden />
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">{readTime}</p>
              </div>
            )}

            {page.type === 'contents' && (
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                  Contents
                </p>
                <h3 className="mb-8 font-serif text-2xl text-navy">In this booklet</h3>
                <ol className="space-y-1">
                  {page.sections.map((entry, i) => (
                    <li key={entry.heading}>
                      <button
                        type="button"
                        onClick={() => setPageIndex(entry.pageIndex)}
                        className="group flex w-full items-baseline gap-4 border-b border-gray-200 py-3 text-left transition-colors hover:border-[#BF9B5F]"
                      >
                        <span className="font-serif text-sm text-[#BF9B5F]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-[15px] font-medium text-navy group-hover:underline">
                          {entry.heading}
                        </span>
                        <span aria-hidden className="text-xs text-gray-400 transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
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
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                      Section {String(page.number).padStart(2, '0')} / {String(page.total).padStart(2, '0')}
                    </p>
                    <h3 className="mb-6 font-serif text-xl font-semibold text-navy md:text-2xl">{page.heading}</h3>
                  </>
                ) : (
                  <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                    Introduction
                  </p>
                )}
                <div className="space-y-4">
                  {page.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-[15px] leading-[1.85] text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {page.type === 'back' && (
              <div className="text-center">
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a062]">
                  Next Step
                </p>
                <h3 className="mb-5 font-serif text-2xl text-white md:text-3xl">
                  Discuss this with our team
                </h3>
                <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/65">
                  If you are a founder six to twelve months from launching a growth-round process, our team
                  will run a no-cost readiness review against this framework and tell you which workstreams
                  are ready and which need attention.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 border border-[#c4a062] px-6 py-3 text-sm font-medium text-[#c4a062] transition hover:bg-[#c4a062] hover:text-[#0e1c38]"
                >
                  {contactEmail}
                </a>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="h-0.5 bg-gray-200" aria-hidden>
            <div className="h-full bg-[#BF9B5F] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Pager */}
          <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-5 py-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              aria-label="Previous page"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-navy transition disabled:cursor-not-allowed disabled:text-gray-300 enabled:hover:underline"
            >
              <span aria-hidden>←</span> Prev
            </button>
            <span className="text-[11px] uppercase tracking-[0.12em] text-gray-400">
              {pageIndex + 1} / {pages.length}
            </span>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label="Next page"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-navy transition disabled:cursor-not-allowed disabled:text-gray-300 enabled:hover:underline"
            >
              Next <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>

      {showDownload && resource && (
        <div className="mt-6 border border-gray-200 bg-white p-6">
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Enter your work email to receive the full PDF version of this booklet.
          </p>
          <ResourceCard resource={resource} />
        </div>
      )}
    </div>
  );
}

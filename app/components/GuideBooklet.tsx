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

type BookletPage =
  | { type: 'cover' }
  | { type: 'section'; heading: string | null; paragraphs: string[] }
  | { type: 'back' };

function parseSections(content: string): { heading: string | null; paragraphs: string[] }[] {
  const blocks = content.split('\n\n').filter(Boolean);
  const sections: { heading: string | null; paragraphs: string[] }[] = [];

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
    return [{ type: 'cover' }, ...sections.map((s) => ({ type: 'section' as const, ...s })), { type: 'back' }];
  }, [content]);

  const [pageIndex, setPageIndex] = useState(0);
  const [showDownload, setShowDownload] = useState(false);
  const page = pages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;

  const goPrev = () => setPageIndex((i) => Math.max(0, i - 1));
  const goNext = () => setPageIndex((i) => Math.min(pages.length - 1, i + 1));

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        <div
          aria-hidden
          className="absolute -left-2 top-3 bottom-3 hidden w-2 rounded-l-sm bg-navy/80 md:block"
        />
        <div className="relative overflow-hidden border border-gray-200 bg-[#faf8f4] shadow-lg shadow-black/5">
          <div className="flex items-center justify-between border-b border-gray-200 bg-white/70 px-5 py-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">
              Booklet Preview
            </span>
            <button
              type="button"
              onClick={() => setShowDownload((prev) => !prev)}
              className="inline-flex items-center gap-2 border border-navy px-3.5 py-1.5 text-[12px] font-medium text-navy transition hover:bg-navy hover:text-white"
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

          <div className="flex min-h-[420px] flex-col justify-center overflow-y-auto px-8 py-10 md:min-h-[460px] md:px-14 md:py-12">
            {page.type === 'cover' && (
              <div className="text-center">
                <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-[#BF9B5F]/50 bg-[#BF9B5F]/10 text-[#BF9B5F]">
                  <GuideIcon id={icon} className="h-5 w-5" />
                </span>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                  Downloadable Booklet
                </p>
                <h3 className="mb-4 font-serif text-2xl leading-snug text-navy md:text-3xl">{title}</h3>
                <p className="mb-6 text-sm italic text-gray-500">Keningford Partners Research · {readTime}</p>
                <p className="mx-auto max-w-md text-base leading-relaxed text-gray-600">{excerpt}</p>
              </div>
            )}

            {page.type === 'section' && (
              <div>
                {page.heading && (
                  <h3 className="mb-5 font-serif text-xl font-semibold text-navy md:text-2xl">{page.heading}</h3>
                )}
                <div className="space-y-4">
                  {page.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base leading-relaxed text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {page.type === 'back' && (
              <div className="text-center">
                <h3 className="mb-4 font-serif text-2xl text-navy">Discuss This With Our Team</h3>
                <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-gray-600">
                  If you are a founder six to twelve months from launching a growth-round process, our team
                  will run a no-cost readiness review against this framework and tell you which workstreams
                  are ready and which need attention.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 border border-navy px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
                >
                  {contactEmail}
                </a>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 bg-white/70 px-5 py-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              className="text-[13px] font-medium text-navy transition disabled:cursor-not-allowed disabled:text-gray-300 enabled:hover:underline"
            >
              ← Prev Page
            </button>
            <span className="text-[11px] uppercase tracking-[0.12em] text-gray-400">
              Page {pageIndex + 1} of {pages.length}
            </span>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              className="text-[13px] font-medium text-navy transition disabled:cursor-not-allowed disabled:text-gray-300 enabled:hover:underline"
            >
              Next Page →
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

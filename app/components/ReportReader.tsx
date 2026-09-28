'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

interface ReportReaderProps {
  title: string;
  pdfUrl: string;
  pageCount: number;
}

const PAGE_WIDTH = 1530;
const PAGE_HEIGHT = 1980;

function reportPageUrl(pdfUrl: string, page: number): string {
  return `${pdfUrl.replace(/\.pdf$/, '')}/page-${String(page).padStart(2, '0')}.jpg`;
}

export default function ReportReader({ title, pdfUrl, pageCount }: ReportReaderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const goTo = useCallback(
    (page: number) => {
      const track = trackRef.current;
      if (!track) return;
      const target = Math.min(Math.max(page, 1), pageCount);
      track.scrollTo({ left: (target - 1) * track.clientWidth, behavior: 'smooth' });
    },
    [pageCount],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      setCurrent(Math.round(track.scrollLeft / track.clientWidth) + 1);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(current + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(current - 1);
    }
  };

  const arrowClassName =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-gray-200 bg-white text-navy shadow-sm transition hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-0';

  return (
    <div className="border border-gray-200 bg-gray-100">
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-3">
        <span className="truncate pr-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
          {title}
        </span>
        <span className="shrink-0 text-[11px] tabular-nums uppercase tracking-[0.14em] text-gray-400">
          Page {current} of {pageCount}
        </span>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 1}
          aria-label="Previous page"
          className={`${arrowClassName} left-2 md:left-4`}
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={current === pageCount}
          aria-label="Next page"
          className={`${arrowClassName} right-2 md:right-4`}
        >
          →
        </button>

        <div
          ref={trackRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label={`${title}, use the arrow keys to turn pages`}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pages.map((page) => (
            <div key={page} className="flex w-full shrink-0 snap-center justify-center px-14 py-6 md:px-20 md:py-8">
              <Image
                src={reportPageUrl(pdfUrl, page)}
                alt={`${title}, page ${page} of ${pageCount}`}
                width={PAGE_WIDTH}
                height={PAGE_HEIGHT}
                sizes="(max-width: 768px) 100vw, 560px"
                priority={page === 1}
                loading={page === 1 ? undefined : page === 2 ? 'eager' : 'lazy'}
                className="h-auto max-h-[78vh] w-auto max-w-full bg-white shadow-md shadow-black/10"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 border-t border-gray-200 bg-white px-4 py-3">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => goTo(page)}
            aria-label={`Go to page ${page}`}
            aria-current={page === current ? 'page' : undefined}
            className={`h-7 min-w-7 px-1.5 text-[11px] tabular-nums transition ${
              page === current ? 'bg-navy text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-navy'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

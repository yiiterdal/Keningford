'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { InvestorGuideFaqItem } from '../data/investor-guides';

interface GuideFaqProps {
  items: InvestorGuideFaqItem[];
  limit?: number;
  viewAllHref?: string;
  id?: string;
  className?: string;
}

export default function GuideFaq({ items, limit, viewAllHref, id = 'faq', className = '' }: GuideFaqProps) {
  const displayed = limit ? items.slice(0, limit) : items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id={id} className={`scroll-mt-28 ${className}`}>
      <div className="mb-6 md:mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">FAQ</p>
        <h2 className="mt-2 font-serif text-2xl leading-snug text-navy md:text-3xl">
          Frequently asked questions
        </h2>
      </div>

      <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
        {displayed.map((item, index) => {
          const isOpen = openIndex === index;
          const isLast = index === displayed.length - 1;

          return (
            <div key={item.question} className={!isLast ? 'border-b border-gray-100' : undefined}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50 md:px-6 md:py-5"
              >
                <span className="text-[15px] font-semibold leading-snug text-navy md:text-base">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border transition-colors ${
                    isOpen
                      ? 'rotate-45 border-navy/20 bg-navy/5 text-navy'
                      : 'border-gray-200 text-gray-400'
                  }`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-gray-100 bg-gray-50 px-5 py-4 md:px-6 md:py-5">
                  <p className="text-[15px] leading-[1.85] text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {viewAllHref && limit !== undefined && items.length > limit && (
        <Link
          href={viewAllHref}
          className="mt-5 inline-flex text-sm font-medium text-navy transition hover:text-navy-dark hover:underline"
        >
          View all {items.length} questions →
        </Link>
      )}
    </div>
  );
}

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
    <div id={id} className={`grid scroll-mt-28 grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8 ${className}`}>
      <div className="lg:col-span-4">
        <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
          <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
          FAQ
        </p>
        <h2 className="max-w-[420px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem]">
          Frequently asked questions.
        </h2>
        {viewAllHref && limit !== undefined && items.length > limit && (
          <Link
            href={viewAllHref}
            className="mt-8 inline-flex items-center gap-2 border border-navy/15 bg-white px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/30"
          >
            View all {items.length} questions <span aria-hidden>→</span>
          </Link>
        )}
      </div>

      <div className="lg:col-span-8">
        {displayed.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question} className="border-b border-navy/[0.12]">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-4 text-left ${index === 0 ? 'pb-5 pt-0' : 'py-6'}`}
              >
                <span className="text-base font-medium tracking-[-0.01em] text-navy md:text-lg">{item.question}</span>
                <span
                  aria-hidden
                  className={`flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none transition-transform duration-200 ${
                    isOpen ? 'rotate-45 text-gray-400' : 'text-navy'
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[680px] pb-6 text-[15px] leading-[1.6] tracking-[-0.02em] text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

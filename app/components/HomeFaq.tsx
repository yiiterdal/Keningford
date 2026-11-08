'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SCHEDULE_HREF } from '../lib/scheduling';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

const faqs = [
  {
    question: 'Who do you work with?',
    answer:
      'Keningford Partners advises boards, founders, and institutional investors on their most consequential transactions. We work with leading companies and institutional capital across healthcare, life sciences, energy, software, industrials, and financial services.',
  },
  {
    question: 'What do you advise on?',
    answer:
      'Our work covers mergers and acquisitions, capital raising, buy-side advisory and deal origination, strategic advisory, valuation and fairness opinions, and restructuring.',
  },
  {
    question: 'What sets the firm apart?',
    answer:
      'We provide independent strategic advice aligned with long-term value creation, with senior-level attention on every engagement and a customized approach tailored to each client\'s circumstances.',
  },
  {
    question: 'Where do you work?',
    answer:
      'We combine deep market knowledge with extensive transaction experience across industries and geographies. Our principals have advised transactions across 14 cross-border markets.',
  },
  {
    question: 'How do we begin?',
    answer:
      'Begin with a confidential conversation. We start by understanding your objectives and assessing mutual fit before any mandate is framed.',
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 700 });
  const listAnimation = useFadeInAnimation({ delay: 120, duration: 700 });

  return (
    <section className="bg-white py-20 md:py-28" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style}>
          <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-[#f0f0f0] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden />
            FAQ
          </p>
          <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
            Questions we are asked before a mandate.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="max-w-[260px] text-base leading-[1.4] tracking-[-0.01em] text-navy">
              Weighing a raise, a sale, or a strategic alternative? Start with a confidential conversation.
            </p>
            <Link
              href={SCHEDULE_HREF}
              className="mt-6 inline-flex items-center gap-2.5 bg-navy px-5 py-3 text-[13px] font-medium text-white transition-colors duration-150 hover:bg-navy/90 active:scale-[0.98]"
            >
              Schedule a consultation
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div ref={listAnimation.ref} style={listAnimation.style} className="lg:col-span-8 lg:col-start-5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between gap-4 text-left ${index === 0 ? 'pb-5 pt-0' : 'py-6'}`}
                  >
                    <span className="text-base font-medium tracking-[-0.01em] text-navy md:text-lg">{item.question}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none transition-transform duration-200 ${
                        isOpen ? 'rotate-45 text-gray-400' : 'text-navy'
                      }`}
                      aria-hidden
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
                      <p className="max-w-[620px] pb-6 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { SCHEDULE_HREF } from '../lib/scheduling';
import { IMAGE_QUALITY } from '../lib/image-utils';

const tabs = [
  {
    id: 'capital-raising',
    label: 'Capital Raising',
    intro:
      'We help companies access institutional capital, including equity, debt, and hybrid instruments, to fund growth, acquisitions, refinancings, and balance sheet optimization.',
    items: [
      {
        title: 'Growth Equity',
        body: 'Growth equity and minority recapitalizations for expansion or shareholder liquidity.',
      },
      {
        title: 'Debt Financing',
        body: 'Senior, unitranche, and mezzanine financings, including refinancing of existing facilities.',
      },
      {
        title: 'Structured & Hybrid Capital',
        body: 'Structured, asset-backed, and preferred instruments aligning risk, return, and governance.',
      },
    ],
    href: '/capabilities/capital-raising',
    image: '/images/home/advisory-capital-hq.jpg',
    imageAlt: 'Hand pointing at a printed schedule of figures posted on a glass panel',
    imagePosition: 'center',
  },
  {
    id: 'mergers-acquisitions',
    label: 'Mergers & Acquisitions',
    intro:
      'We advise corporates, financial sponsors, and family-owned businesses on strategically important M&A transactions, both sell-side and buy-side.',
    items: [
      {
        title: 'Sell-side Mandates',
        body: 'Full or partial company sales, including carve-outs and spin-offs.',
      },
      {
        title: 'Buy-side Advisory',
        body: 'Target screening and confidential approach to selected counterparties.',
      },
      {
        title: 'Joint Ventures & Partnerships',
        body: 'Strategic partnerships where governance and economics must be carefully balanced.',
      },
    ],
    href: '/capabilities/mergers-acquisitions',
    image: '/images/home/advisory-ma-hq.jpg',
    imageAlt: 'Executive in a dark suit seated in a sunlit office lounge',
    imagePosition: 'center 40%',
  },
  {
    id: 'strategic-advisory',
    label: 'Strategic Advisory',
    intro:
      'We work with boards, shareholders, and management teams on high-stakes decisions that shape the long-term direction of the business.',
    items: [
      {
        title: 'Capital Structure Review',
        body: 'Recommendations on leverage, dividend, and buyback policies.',
      },
      {
        title: 'Strategic Alternatives',
        body: 'Assessments of sale, IPO, recapitalization, or partnership scenarios.',
      },
      {
        title: 'Board-level Advisory',
        body: 'Shareholder alignment, governance, and stakeholder communication.',
      },
    ],
    href: '/capabilities/strategic-advisory',
    image: '/images/home/advisory-strategic-hq.jpg',
    imageAlt: 'Advisor working on a laptop in a quiet office lounge',
    imagePosition: 'center 45%',
  },
];

export default function HomeAdvisoryTabs() {
  const [active, setActive] = useState(0);
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 700 });
  const bodyAnimation = useFadeInAnimation({ delay: 150, duration: 700 });

  return (
    <section className="bg-[#0f141c] pb-24 pt-8 md:pb-32 md:pt-12" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style} className="mb-14 text-center md:mb-16">
          <p className="mb-6 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#e8d5a8]" aria-hidden />
            How We Advise
          </p>
          <h2 className="mx-auto max-w-[700px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-white md:text-[2.5rem] lg:text-[3rem]">
            Senior-led advice from origination through close.
          </h2>
        </div>

        <div ref={bodyAnimation.ref} style={bodyAnimation.style}>
          <div role="tablist" aria-label="Advisory services" className="grid grid-cols-3 border-b border-white/15">
            {tabs.map((tab, index) => {
              const isActive = index === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActive(index)}
                  className={`-mb-px border-b px-2 pb-4 pt-2 text-[12px] font-medium transition-colors duration-200 md:text-sm ${
                    isActive ? 'border-white text-white' : 'border-transparent text-white/45 hover:text-white/75'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid md:mt-12">
            {tabs.map((tab, index) => {
              const isActive = index === active;
              return (
                <div
                  key={tab.id}
                  id={`panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  className={`col-start-1 row-start-1 grid grid-cols-1 gap-12 transition-opacity duration-300 ease-out motion-reduce:transition-none lg:grid-cols-2 lg:gap-16 ${
                    isActive ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="flex flex-col justify-center">
                    <p className="max-w-md text-base leading-[1.4] tracking-[-0.01em] text-white/70">{tab.intro}</p>
                    <ul className="mt-10 space-y-8">
                      {tab.items.map((item) => (
                        <li key={item.title}>
                          <div className="flex items-center gap-3">
                            <span
                              className="flex h-5 w-5 shrink-0 items-center justify-center bg-white/10 text-white"
                              aria-hidden
                            >
                              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <h3 className="font-sans text-lg font-medium tracking-[-0.01em] text-white">{item.title}</h3>
                          </div>
                          <p className="ml-[9px] mt-3 max-w-sm border-l border-white/15 pl-[22px] text-sm leading-relaxed text-white/60">
                            {item.body}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={tab.href}
                      className="mt-10 inline-flex w-fit items-center gap-2 text-[13px] font-medium text-white/80 transition-colors hover:text-white"
                    >
                      Explore {tab.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="relative aspect-[4/5] overflow-hidden bg-white/5 md:aspect-[5/4] lg:aspect-[4/5]">
                      <Image
                        src={tab.image}
                        alt={tab.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        quality={IMAGE_QUALITY}
                        style={{ objectPosition: tab.imagePosition }}
                        className="object-cover"
                      />
                    </div>
                    <Link
                      href={SCHEDULE_HREF}
                      tabIndex={isActive ? 0 : -1}
                      className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 bg-white px-6 py-4 md:bottom-5 md:left-5 text-[13px] font-medium text-navy transition-colors hover:bg-[#f0f0f0]"
                    >
                      Schedule a consultation
                      <span aria-hidden>→</span>
                    </Link>
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

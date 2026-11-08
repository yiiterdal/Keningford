'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { IMAGE_QUALITY } from '../lib/image-utils';

const items = [
  {
    title: 'Senior Attention',
    body: 'Senior-level attention on every engagement. Clients work directly with decision-makers throughout strategy design, investor positioning, negotiation, and closing.',
    points: [
      'Every mandate is led by senior bankers from start to finish',
      'Clients work directly with decision-makers',
      'A focused number of concurrent assignments',
    ],
  },
  {
    title: 'Independent Advice',
    body: 'Independent strategic advice aligned with long-term value creation.',
  },
  {
    title: 'Customized Approach',
    body: "No one-size-fits-all solutions. Every mandate is tailored to the client's capital structure, ownership dynamics, and strategic priorities.",
  },
  {
    title: 'Disciplined Execution',
    body: 'Disciplined execution with institutional-grade process management, from materials and outreach through diligence and close.',
  },
];

export default function WhyItWorks() {
  const [openIndex, setOpenIndex] = useState(0);
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 700 });
  const listAnimation = useFadeInAnimation({ delay: 120, duration: 700 });
  const imageAnimation = useFadeInAnimation({ delay: 180, duration: 800 });

  return (
    <section className="bg-white py-20 md:py-28" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        <div
          ref={headerAnimation.ref}
          style={headerAnimation.style}
          className="mb-14 grid grid-cols-1 items-end gap-8 lg:mb-16 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
              What Sets Us Apart
            </p>
            <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
              Senior attention on every mandate. No hand-offs.
            </h2>
          </div>
          <p className="max-w-[350px] text-base leading-[1.4] tracking-[-0.01em] text-gray-500 lg:col-span-5 lg:justify-self-end">
            We maintain a focused number of concurrent assignments so each client receives depth, speed, and
            high-quality execution.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div ref={listAnimation.ref} style={listAnimation.style} className="lg:col-span-5">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.title} className="border-b border-gray-200 first:border-t">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-lg font-medium tracking-tight text-navy md:text-xl">{item.title}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center border transition-colors duration-200 ${
                        isOpen ? 'border-navy bg-navy text-white' : 'border-gray-300 text-transparent'
                      }`}
                      aria-hidden
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-2 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-600">{item.body}</p>
                      {item.points && (
                        <ul className="space-y-2 pb-6">
                          {item.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-gray-600">
                              <svg
                                className="mt-1 h-4 w-4 shrink-0 text-navy/50"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-hidden
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                      {!item.points && <div className="pb-6" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div ref={imageAnimation.ref} style={imageAnimation.style} className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1f5] md:aspect-[5/4]">
              <Image
                src="/images/home/why-executive-hq.jpg"
                alt="Executive seated by a high-rise window overlooking the city skyline"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                quality={IMAGE_QUALITY}
                className="object-cover object-[90%_center]"
              />
            </div>
            <blockquote className="absolute bottom-0 left-0 max-w-[22rem] bg-white px-6 py-5 shadow-[0_16px_40px_-20px_rgba(11,20,38,0.35)] md:px-7 md:py-6">
              <p className="text-[15px] leading-[1.6] text-navy md:text-base">
                &ldquo;We operate as an embedded partner rather than a transactional intermediary.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

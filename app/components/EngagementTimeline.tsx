'use client';

import Link from 'next/link';
import {
  engagementTimelineSteps,
  engagementTimelineSummary,
} from '../data/engagement-timeline';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

function StepIcon({ index }: { index: number }) {
  const icons = [
    <svg key="fit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    <svg key="focus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>,
    <svg key="frame" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key="forge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    <svg key="forward" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}

export default function EngagementTimeline() {
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 800 });
  const stepAnimations = engagementTimelineSteps.map((_, index) =>
    useFadeInAnimation({ delay: 150 + index * 120, duration: 700 }),
  );
  const summaryAnimation = useFadeInAnimation({
    delay: 150 + engagementTimelineSteps.length * 120,
    duration: 700,
  });

  return (
    <section className="border-t border-gray-200 bg-white py-20 md:py-28" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style} className="mb-16 md:mb-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 shrink-0 bg-[#BF9B5F] md:w-12" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
              How We Work
            </p>
          </div>
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-navy md:text-4xl lg:text-[2.75rem]">
            How an engagement looks
          </h2>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute bottom-8 left-5 top-5 hidden w-px bg-gray-200 md:block"
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-[40px_minmax(0,24rem)_1fr] md:gap-x-12 lg:grid-cols-[40px_minmax(0,28rem)_1fr] lg:gap-x-16">
            {engagementTimelineSteps.map((step, index) => {
              const anim = stepAnimations[index];
              const isLast = index === engagementTimelineSteps.length - 1;

              return (
                <div key={step.number} ref={anim.ref} style={anim.style} className="contents">
                  {/* Timeline icon */}
                  <div
                    className={`relative z-10 hidden md:flex md:justify-center ${isLast ? 'pb-0' : 'pb-24'}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500">
                      <StepIcon index={index} />
                    </div>
                  </div>

                  {/* Title + background number */}
                  <div className={`relative ${isLast ? 'pb-12 md:pb-0' : 'pb-12 md:pb-24'}`}>
                    <div className="relative inline-block max-w-full">
                      <span
                        className="pointer-events-none absolute left-0 top-1/2 z-0 -translate-x-[8%] -translate-y-1/2 select-none text-[7.5rem] font-bold leading-none tracking-[-0.05em] text-[#E6E6E6] sm:text-[8.5rem] md:text-[9.5rem] lg:text-[10.5rem]"
                        aria-hidden
                      >
                        {step.number}
                      </span>
                      <h3 className="relative z-10 pl-10 text-[1.75rem] font-bold leading-[1.05] tracking-[-0.02em] text-navy sm:pl-11 sm:text-[2rem] md:pl-12 md:text-[2.25rem] lg:text-[2.5rem]">
                        <span className="block">{step.phase}</span>
                        <span className="block">{step.title}</span>
                      </h3>
                    </div>
                  </div>

                  {/* Description + output */}
                  <div className={`md:pt-1 ${isLast ? 'pb-0' : 'pb-16 md:pb-24'}`}>
                    <p className="mb-0 max-w-md text-base leading-[1.6] text-gray-700 md:max-w-lg md:text-[17px]">
                      {step.description}
                    </p>
                    <div className="mt-10 md:mt-12">
                      <p className="mb-3 font-mono text-xs lowercase tracking-[0.06em] text-gray-400">
                        output
                      </p>
                      <p className="max-w-md text-lg font-semibold leading-[1.35] tracking-[-0.01em] text-navy md:max-w-lg md:text-xl">
                        {step.output}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          ref={summaryAnimation.ref}
          style={summaryAnimation.style}
          className="border-t border-gray-100 pt-12 md:pt-16"
        >
          <p className="mb-10 max-w-2xl text-base leading-[1.6] text-gray-700 md:text-lg">
            {engagementTimelineSummary}
          </p>
          <div>
            <p className="mb-4 text-xl font-bold leading-[1.15] tracking-[-0.02em] text-navy md:text-2xl">
              Have a mandate the board is asking about?
            </p>
            <Link
              href="/contact"
              className="inline-flex border border-navy px-6 py-3 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

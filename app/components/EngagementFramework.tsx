'use client';

import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

const steps = [
  {
    number: '01',
    title: 'Fit',
    description: 'It starts with a confidential conversation to understand your objectives and assess mutual fit.',
  },
  {
    number: '02',
    title: 'Focus',
    description: 'We build a deeper understanding of your business, financial profile, and capital position.',
  },
  {
    number: '03',
    title: 'Frame',
    description: 'We present strategic options and frame the optimal structure, positioning, and path forward.',
  },
  {
    number: '04',
    title: 'Forge',
    description: 'We formalize the mandate and commit senior attention to your company\u2019s future.',
  },
  {
    number: '05',
    title: 'Forward',
    description: 'We run the process \u2014 from investor outreach through negotiation and close.',
  },
];

/** Ascending stair offsets, left (lowest) to right (highest) on desktop */
const stepOffsets = ['lg:mt-40', 'lg:mt-[7.5rem]', 'lg:mt-20', 'lg:mt-10', 'lg:mt-0'];

export default function EngagementFramework() {
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 800 });
  const stepAnimation0 = useFadeInAnimation({ delay: 150, duration: 700 });
  const stepAnimation1 = useFadeInAnimation({ delay: 300, duration: 700 });
  const stepAnimation2 = useFadeInAnimation({ delay: 450, duration: 700 });
  const stepAnimation3 = useFadeInAnimation({ delay: 600, duration: 700 });
  const stepAnimation4 = useFadeInAnimation({ delay: 750, duration: 700 });
  const stepAnimations = [stepAnimation0, stepAnimation1, stepAnimation2, stepAnimation3, stepAnimation4];

  return (
    <section className="bg-white py-24 md:py-32" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style} className="mb-16 md:mb-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 shrink-0 bg-[#BF9B5F] md:w-12" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
              How We Work
            </p>
          </div>
          <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-5xl">
            The Keningford Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => {
            const anim = stepAnimations[index];
            const isLast = index === steps.length - 1;
            return (
              <div key={step.number} className={`relative ${stepOffsets[index]}`}>
                <div ref={anim.ref} style={anim.style}>
                  <p className="mb-2 text-xs font-medium tracking-[0.14em] text-gray-400">
                    {step.number}
                  </p>
                  <div className="mb-5 flex items-center gap-0" aria-hidden>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#BF9B5F]" />
                    <span className="h-px flex-1 bg-[#BF9B5F]/60" />
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="mb-3 font-serif text-2xl font-semibold text-navy md:text-[1.75rem]">
                      {step.title}
                    </h3>
                    {isLast && (
                      <svg
                        className="mt-1.5 h-5 w-5 shrink-0 text-[#BF9B5F]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

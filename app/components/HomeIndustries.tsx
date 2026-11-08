'use client';

import Link from 'next/link';
import { industries } from '../data/industries';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

const tags: Record<string, string> = {
  healthcare: 'Physicians · Outpatient · HealthTech',
  'biotech-life-sciences': 'Biotech · Life sciences · Materials',
  energy: 'Transition · Infrastructure · Renewables',
  software: 'Vertical SaaS · Tech-enabled services',
  industrials: 'Manufacturing · Business services',
  'financial-services': 'Lending · Fintech · Asset management',
};

export default function HomeIndustries() {
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 700 });
  const gridAnimation = useFadeInAnimation({ delay: 120, duration: 700 });

  return (
    <section className="bg-[#f0f0f0] py-20 md:py-28" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div
            ref={headerAnimation.ref}
            style={headerAnimation.style}
            className="flex flex-col justify-between gap-10 lg:col-span-5"
          >
            <div>
              <p className="mb-6 inline-flex items-center gap-2.5 bg-[#e4e4e4] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden />
                Industries we serve
              </p>
              <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
                Deep expertise across the sectors we advise.
              </h2>
            </div>

            <div>
              <p className="max-w-[350px] text-base leading-[1.4] tracking-[-0.01em] text-gray-600">
                We advise across healthcare, life sciences, energy, software, industrials, and financial services, where
                capital structure and sector dynamics have to be read together.
              </p>
              <Link
                href="/industries"
                className="mt-6 inline-flex items-center gap-2.5 bg-navy px-5 py-3 text-[13px] font-medium text-white transition-colors duration-150 hover:bg-navy/90 active:scale-[0.98]"
              >
                Explore industries
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div
            ref={gridAnimation.ref}
            style={gridAnimation.style}
            className="grid grid-cols-1 gap-3 self-center sm:grid-cols-2 lg:col-span-7 lg:col-start-6"
          >
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white px-5 py-5 transition-shadow duration-150 hover:shadow-[0_1px_0_rgba(11,20,38,0.06),0_8px_24px_-16px_rgba(11,20,38,0.25)]"
              >
                <h3 className="font-sans text-lg font-medium leading-[1.3] tracking-[-0.01em] text-navy">{industry.title}</h3>
                <p className="mt-1.5 truncate text-sm tracking-[-0.01em] text-gray-500">{tags[industry.slug] ?? industry.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

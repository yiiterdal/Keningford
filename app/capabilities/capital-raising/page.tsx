import Link from 'next/link';
import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import HomeSectionHeader from '../../components/HomeSectionHeader';
import CTABlock from '../../components/CTABlock';
import { unsplashSrc } from '../../lib/image-utils';

export const metadata = {
  title: 'Capital Raising | Keningford Partners',
  description: 'Debt and equity financing solutions for growth, acquisitions, and strategic initiatives.',
};

const relatedCapabilities = [
  {
    title: 'Buy-side Advisory & Deal Origination',
    description: 'Deal origination for investors seeking proprietary private-market opportunities.',
    href: '/capabilities/buy-side-advisory',
  },
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic M&A advisory including acquisition financing and sale processes.',
    href: '/capabilities/mergers-acquisitions',
  },
];

export default function CapitalRaisingPage() {
  return (
    <>
      <Hero
        eyebrow="Capital Raising"
        title="Debt and equity solutions for growth."
        subtitle="Debt and equity financing solutions for growth, acquisitions, and strategic initiatives."
        imageUrl={unsplashSrc('photo-1518837695005-2083093ee35b')}
        imageAlt="Ocean waves on rocky coast"
        secondaryCta={{ label: 'Raise readiness diagnostic', href: '/raise-readiness' }}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <Breadcrumbs
                items={[
                  { label: 'Capabilities', href: '/capabilities' },
                  { label: 'Capital Raising' },
                ]}
              />
              <SidebarNav />
            </aside>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We help companies access institutional capital, including equity, debt, and hybrid instruments, to fund growth, acquisitions, refinancings, and balance sheet optimization. 
                    Our role is to position the story, design the right structure, and run a focused investor process.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We maintain relationships with private equity funds, credit funds, banks, family offices, and strategic investors, enabling us to match each situation with the most relevant capital providers.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Typical Engagements</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Growth equity and minority recapitalizations for expansion or shareholder liquidity</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Senior, unitranche, and mezzanine financings, including refinancing of existing facilities</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Structured and asset-backed solutions for cash-flowing or asset-heavy platforms</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Hybrid and preferred instruments aligning risk, return, and governance for all stakeholders</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Our Process</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We start with a detailed capital structure review and cash flow analysis to define the feasible financing range and structure. 
                    We then prepare concise marketing materials and selectively approach investors who understand your sector and risk profile.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We manage indicative offers, due diligence, documentation, and syndication, always focusing on optimizing pricing, covenants, and flexibility for future strategic moves.
                    For growth equity processes, plan against our{' '}
                    <Link
                      href="/insights/guides/14-week-growth-round-equity-process-map"
                      className="font-medium text-navy underline-offset-2 hover:underline"
                    >
                      14-week process map
                    </Link>{' '}
                    and{' '}
                    <Link href="/raise-readiness" className="font-medium text-navy underline-offset-2 hover:underline">
                      raise readiness diagnostic
                    </Link>
                    .
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our clients secure capital that is appropriately sized, competitively priced, and structured to support long-term value creation rather than short-term constraints.
                    Transactions are designed to withstand market volatility and align with management&apos;s strategic agenda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto">
          <HomeSectionHeader pill="Capabilities" title="Related capabilities." />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {relatedCapabilities.map((capability, index) => (
              <CapabilityCard
                key={index}
                title={capability.title}
                description={capability.description}
                href={capability.href}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}


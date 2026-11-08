import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import HomeSectionHeader from '../../components/HomeSectionHeader';
import CTABlock from '../../components/CTABlock';
import { unsplashSrc } from '../../lib/image-utils';

export const metadata = {
  title: 'Valuation & Fairness Opinions | Keningford Partners',
  description: 'Independent valuation services and fairness opinions for M&A transactions, restructuring, and strategic initiatives.',
};

const relatedCapabilities = [
  {
    title: 'Mergers & Acquisitions',
    description: 'M&A advisory services with independent valuation and fairness opinions.',
    href: '/capabilities/mergers-acquisitions',
  },
  {
    title: 'Restructuring',
    description: 'Restructuring advisory with valuation and capital structure analysis.',
    href: '/capabilities/restructuring',
  },
];

export default function ValuationFairnessOpinionsPage() {
  return (
    <>
      <Hero
        eyebrow="Valuation & Fairness Opinions"
        title="Independent judgment you can rely on."
        subtitle="Independent valuation services and fairness opinions for M&A transactions, restructuring, and strategic initiatives."
        imageUrl={unsplashSrc('photo-1450101499163-c8848c66ca85')}
        imageAlt="Financial district skyline with modern office buildings"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <Breadcrumbs
                items={[
                  { label: 'Capabilities', href: '/capabilities' },
                  { label: 'Valuation & Fairness Opinions' },
                ]}
              />
              <SidebarNav />
            </aside>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We deliver independent valuation analyses and fairness opinions to boards, special committees, and shareholders faced with complex or conflicted transactions.
                    Our work supports informed decision-making and robust governance.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We apply multiple valuation techniques, stress testing, and market benchmarking to provide a defensible view of value and deal fairness.
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
                      <span className="text-gray-700">Fairness opinions for public and private M&A transactions</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Business and asset valuations for strategic reviews, tax, or financial reporting</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Valuations in connection with restructurings, recapitalizations, and distress situations</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Valuation of complex equity and debt instruments, including preferred and convertible securities</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Our Process</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We review transaction terms, financial projections, historical performance, and industry dynamics, and then apply appropriate valuation methodologies such as DCF, trading comparables, and precedent transactions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Findings are documented in detailed valuation reports and fairness opinion letters that can withstand scrutiny from regulators, auditors, and stakeholders.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Boards and shareholders gain an independent view on value and deal fairness, strengthening governance and reducing execution risk in sensitive transactions.
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


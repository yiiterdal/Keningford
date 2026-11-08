import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import HomeSectionHeader from '../../components/HomeSectionHeader';
import CTABlock from '../../components/CTABlock';
import { unsplashSrc } from '../../lib/image-utils';

export const metadata = {
  title: 'Restructuring | Keningford Partners',
  description: 'Strategic restructuring advisory for companies facing operational or financial challenges.',
};

const relatedCapabilities = [
  {
    title: 'Capital Raising',
    description: 'Financing solutions for companies undergoing restructuring and recapitalization.',
    href: '/capabilities/capital-raising',
  },
  {
    title: 'Strategic Advisory',
    description: 'Strategic advisory services to optimize operations and capital structure.',
    href: '/capabilities/strategic-advisory',
  },
];

export default function RestructuringPage() {
  return (
    <>
      <Hero
        eyebrow="Restructuring"
        title="Clarity when the stakes are highest."
        subtitle="Strategic restructuring advisory for companies facing operational or financial challenges."
        imageUrl={unsplashSrc('photo-1500375592092-40eb2168fd21')}
        imageAlt="Calm blue ocean with gentle waves at sunset"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <Breadcrumbs
                items={[
                  { label: 'Capabilities', href: '/capabilities' },
                  { label: 'Restructuring' },
                ]}
              />
              <SidebarNav />
            </aside>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We advise companies, sponsors, and creditors in situations of stress or transition, from covenant pressure to full financial distress. 
                    Our focus is on stabilizing the business, preserving value, and designing sustainable capital structures.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We operate at the intersection of strategy, finance, and stakeholder negotiation, helping clients navigate complex multi-party situations.
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
                      <span className="text-gray-700">Debt amendments, maturity extensions, and covenant resets</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Operational restructuring plans and performance improvement programs</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Recapitalizations, debt-for-equity swaps, and new-money solutions</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Stakeholder negotiation, creditor coordination, and contingency planning</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Our Process</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We rapidly assess liquidity, covenant headroom, and business performance to define the real options set. 
                    Together with management, we build a credible standalone plan and restructuring proposal supported by detailed financial analysis.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We then help manage negotiations with lenders, bondholders, and other stakeholders, coordinating advisors and workstreams to drive the process to a binding agreement.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The outcome is a more sustainable capital structure, improved liquidity profile, and a business plan that stakeholders can credibly support, positioning the company for recovery and future growth.
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


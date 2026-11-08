import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import HomeSectionHeader from '../../components/HomeSectionHeader';
import { unsplashSrc } from '../../lib/image-utils';

export const metadata = {
  title: 'Mergers & Acquisitions | Keningford Partners',
  description: 'Strategic M&A advisory services from deal origination through execution and integration.',
};

const relatedCapabilities = [
  {
    title: 'Buy-side Advisory & Deal Origination',
    description: 'Proprietary deal sourcing and buy-side mandates for institutional investors.',
    href: '/capabilities/buy-side-advisory',
  },
  {
    title: 'Capital Raising',
    description: 'Debt and equity financing solutions for acquisitions and strategic initiatives.',
    href: '/capabilities/capital-raising',
  },
];

export default function MergersAcquisitionsPage() {
  return (
    <>
      <Hero
        eyebrow="Mergers & Acquisitions"
        title="From origination through integration."
        subtitle="Strategic M&A advisory from deal origination through execution and integration."
        imageUrl={unsplashSrc('photo-1505142468610-359e7d316be0')}
        imageAlt="Mountain landscape with lake"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <Breadcrumbs
                items={[
                  { label: 'Capabilities', href: '/capabilities' },
                  { label: 'Mergers & Acquisitions' },
                ]}
              />
              <SidebarNav />
            </aside>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We advise corporates, financial sponsors, and family-owned businesses on strategically important M&A transactions, both sell-side and buy-side. 
                    Our role is to shape the right transaction thesis, position the asset, and run a disciplined, competitive process that maximizes value and certainty of closing.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We combine sector insight, valuation expertise, and hands-on execution to support you from early option analysis through negotiation of final terms and post-closing handover.
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
                      <span className="text-gray-700">Sell-side mandates for full or partial company sales, including carve-outs and spin-offs</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Buy-side advisory, target screening, and confidential approach to selected counterparties</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Divestitures and non-core asset sales to refocus the portfolio</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Joint ventures and strategic partnerships where governance and economics must be carefully balanced</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Our Process</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Every mandate starts with a clear understanding of your strategic objectives, valuation expectations, and stakeholder priorities. 
                    We prepare robust materials, coordinate due diligence, and actively manage bidder interaction and timelines.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Throughout the process we remain closely aligned with management and shareholders, providing independent advice on structure, consideration mix, and key commercial terms.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our clients achieve transactions that are strategically sound, competitively priced, and executable under real-world market conditions, not just on paper. 
                    We measure success by quality of counterparties, deal economics, and the long-term fit with your strategy.
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
    </>
  );
}


import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';

export const metadata = {
  title: 'Mergers & Acquisitions | Keningford',
  description: 'Strategic M&A advisory services from deal origination through execution and integration.',
};

const relatedCapabilities = [
  {
    title: 'Capital Raising',
    description: 'Debt and equity financing solutions for acquisitions and strategic initiatives.',
    href: '/capabilities/capital-raising',
  },
  {
    title: 'Valuation & Fairness Opinions',
    description: 'Independent valuation services and fairness opinions for M&A transactions.',
    href: '/capabilities/valuation-fairness-opinions',
  },
];

export default function MergersAcquisitionsPage() {
  return (
    <>
      <Hero
        title="Mergers & Acquisitions"
        subtitle="Strategic M&A advisory from deal origination through execution and integration."
        imageUrl="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Mountain landscape with lake"
      />

      <section className="py-12 bg-white">
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
                  <h2 className="text-2xl font-semibold text-navy mb-4">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We advise corporates, financial sponsors, and family-owned businesses on strategically important M&A transactions&mdash;both sell-side and buy-side. 
                    Our role is to shape the right transaction thesis, position the asset, and run a disciplined, competitive process that maximizes value and certainty of closing.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We combine sector insight, valuation expertise, and hands-on execution to support you from early option analysis through negotiation of final terms and post-closing handover.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Typical Engagements</h2>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Sell-side mandates for full or partial company sales, including carve-outs and spin-offs</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Buy-side advisory, target screening, and confidential approach to selected counterparties</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Divestitures and non-core asset sales to refocus the portfolio</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Joint ventures and strategic partnerships where governance and economics must be carefully balanced</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Our Process</h2>
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
                  <h2 className="text-2xl font-semibold text-navy mb-4">Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our clients achieve transactions that are strategically sound, competitively priced, and executable under real-world market conditions&mdash;not just on paper. 
                    We measure success by quality of counterparties, deal economics, and the long-term fit with your strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-navy mb-8">Related Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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


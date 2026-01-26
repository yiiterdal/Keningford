import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import CTABlock from '../../components/CTABlock';

export const metadata = {
  title: 'Capital Raising | Keningford',
  description: 'Debt and equity financing solutions for growth, acquisitions, and strategic initiatives.',
};

const relatedCapabilities = [
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic M&A advisory including acquisition financing and sale processes.',
    href: '/capabilities/mergers-acquisitions',
  },
  {
    title: 'Strategic Advisory',
    description: 'Customized strategic advisory to optimize capital structure and efficiency.',
    href: '/capabilities/strategic-advisory',
  },
];

export default function CapitalRaisingPage() {
  return (
    <>
      <Hero
        title="Capital Raising"
        subtitle="Debt and equity financing solutions for growth, acquisitions, and strategic initiatives."
        imageUrl="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Ocean waves on rocky coast"
      />

      <section className="py-12 bg-white">
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
                  <h2 className="text-2xl font-semibold text-navy mb-4">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We help companies access institutional capital&mdash;equity, debt, and hybrid instruments&mdash;to fund growth, acquisitions, refinancings, and balance sheet optimization. 
                    Our role is to position the story, design the right structure, and run a focused investor process.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We maintain relationships with private equity funds, credit funds, banks, family offices, and strategic investors, enabling us to match each situation with the most relevant capital providers.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Typical Engagements</h2>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Growth equity and minority recapitalizations for expansion or shareholder liquidity</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Senior, unitranche, and mezzanine financings, including refinancing of existing facilities</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Structured and asset-backed solutions for cash-flowing or asset-heavy platforms</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Hybrid and preferred instruments aligning risk, return, and governance for all stakeholders</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Our Process</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We start with a detailed capital structure review and cash flow analysis to define the feasible financing range and structure. 
                    We then prepare concise marketing materials and selectively approach investors who understand your sector and risk profile.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We manage indicative offers, due diligence, documentation, and syndication, always focusing on optimizing pricing, covenants, and flexibility for future strategic moves.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Outcomes</h2>
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

      <CTABlock />
    </>
  );
}


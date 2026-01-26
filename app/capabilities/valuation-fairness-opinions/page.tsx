import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import CTABlock from '../../components/CTABlock';

export const metadata = {
  title: 'Valuation & Fairness Opinions | Keningford',
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
        title="Valuation & Fairness Opinions"
        subtitle="Independent valuation services and fairness opinions for M&A transactions, restructuring, and strategic initiatives."
        imageUrl="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Cold blue ocean with distant mountains and cloudy sky"
      />

      <section className="py-12 bg-white">
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
                  <h2 className="text-2xl font-semibold text-navy mb-4">What We Do</h2>
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
                  <h2 className="text-2xl font-semibold text-navy mb-4">Typical Engagements</h2>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Fairness opinions for public and private M&A transactions</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Business and asset valuations for strategic reviews, tax, or financial reporting</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Valuations in connection with restructurings, recapitalizations, and distress situations</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Valuation of complex equity and debt instruments, including preferred and convertible securities</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Our Process</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We review transaction terms, financial projections, historical performance, and industry dynamics, and then apply appropriate valuation methodologies such as DCF, trading comparables, and precedent transactions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Findings are documented in detailed valuation reports and fairness opinion letters that can withstand scrutiny from regulators, auditors, and stakeholders.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Boards and shareholders gain an independent view on value and deal fairness, strengthening governance and reducing execution risk in sensitive transactions.
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


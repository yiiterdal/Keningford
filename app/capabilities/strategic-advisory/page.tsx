import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import CTABlock from '../../components/CTABlock';

export const metadata = {
  title: 'Strategic Advisory | Keningford',
  description: 'Customized strategic advisory services to optimize capital efficiency and strategic flexibility.',
};

const relatedCapabilities = [
  {
    title: 'Capital Raising',
    description: 'Strategic financing solutions aligned with long-term business strategy.',
    href: '/capabilities/capital-raising',
  },
  {
    title: 'Mergers & Acquisitions',
    description: 'M&A advisory services for strategic transactions and partnerships.',
    href: '/capabilities/mergers-acquisitions',
  },
];

export default function StrategicAdvisoryPage() {
  return (
    <>
      <Hero
        title="Strategic Advisory"
        subtitle="Customized strategic advisory services to optimize capital efficiency and strategic flexibility."
        imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Coastal landscape with horizon and water"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <Breadcrumbs
                items={[
                  { label: 'Capabilities', href: '/capabilities' },
                  { label: 'Strategic Advisory' },
                ]}
              />
              <SidebarNav />
            </aside>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We work with boards, shareholders, and management teams on high-stakes decisions that shape the long-term direction of the business. 
                    Our focus is on capital structure, portfolio configuration, and strategic options that create resilience and optionality.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We act as an independent sounding board, combining analytical rigor with practical transaction experience to help you compare, prioritize, and execute strategic paths.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Typical Engagements</h2>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Capital structure reviews and recommendations on leverage, dividend, and buyback policies</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Strategic alternatives assessments, including sale, IPO, recapitalization, or partnership scenarios</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Board-level advisory on shareholder alignment, governance, and stakeholder communication</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-navy mt-1">—</span>
                      <span className="text-gray-700">Investor messaging, positioning, and preparation ahead of capital markets or M&A activity</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Our Process</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We start with a fact-based assessment of the company&apos;s financial profile, competitive positioning, and stakeholder expectations. 
                    We then develop scenario analyses and decision frameworks that clarify trade-offs between different strategic paths.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our work typically spans workshops, board materials, and implementation roadmaps, ensuring that recommendations are actionable rather than theoretical.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-navy mb-4">Outcomes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Clients gain a clear, shared view of strategic priorities, a capital structure aligned with those priorities, and a roadmap for execution.
                    This enables faster decision-making and stronger alignment between management, shareholders, and financing partners.
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


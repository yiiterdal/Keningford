import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import HomeSectionHeader from '../../components/HomeSectionHeader';
import CTABlock from '../../components/CTABlock';
import { unsplashSrc } from '../../lib/image-utils';

export const metadata = {
  title: 'Strategic Advisory | Keningford Partners',
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
        eyebrow="Strategic Advisory"
        title="Customized counsel for complex decisions."
        subtitle="Customized strategic advisory services to optimize capital efficiency and strategic flexibility."
        imageUrl={unsplashSrc('photo-1506905925346-21bda4d32df4')}
        imageAlt="Coastal landscape with horizon and water"
      />

      <section className="bg-white py-20 md:py-28">
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
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">What We Do</h2>
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
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Typical Engagements</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Capital structure reviews and recommendations on leverage, dividend, and buyback policies</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Strategic alternatives assessments, including sale, IPO, recapitalization, or partnership scenarios</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Board-level advisory on shareholder alignment, governance, and stakeholder communication</span>
                    </li>
                    <li className="flex gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0] text-navy" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Investor messaging, positioning, and preparation ahead of capital markets or M&A activity</span>
                    </li>
                  </ul>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Our Process</h2>
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
                  <h2 className="mb-5 font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2rem]">Outcomes</h2>
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


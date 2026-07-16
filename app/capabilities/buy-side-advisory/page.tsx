import Hero from '../../components/Hero';
import Breadcrumbs from '../../components/Breadcrumbs';
import SidebarNav from '../../components/SidebarNav';
import CapabilityCard from '../../components/CapabilityCard';
import Divider from '../../components/Divider';
import CTABlock from '../../components/CTABlock';
import { unsplashSrc } from '../../lib/image-utils';

export const metadata = {
  title: 'Buy-side Advisory & Deal Origination | Keningford Partners',
  description:
    'Buy-side advisory and proprietary deal origination for institutional investors, family offices, and private equity funds.',
};

const serviceAreas = [
  {
    title: 'Acquisitions & Buyouts',
    body: 'We help investors identify and execute acquisition targets that fit their thesis and portfolio strategy — including off-market sourcing, diligence coordination, and transaction structuring from first approach through close.',
  },
  {
    title: 'Minority Investments',
    body: 'We advise on strategic minority stakes where capital and expertise can drive value without requiring operational control, with structures designed for governance clarity and future liquidity optionality.',
  },
  {
    title: 'Exit Planning',
    body: 'We support portfolio exit readiness — timing analysis, buyer identification, and process design for strategic sales, secondary buyouts, or public-market pathways that protect return objectives.',
  },
  {
    title: 'Joint Ventures & Partnerships',
    body: 'We help structure joint ventures and co-investment frameworks with strategic partners, funds, or corporates that expand market access while protecting investor economics and governance rights.',
  },
];

const relatedCapabilities = [
  {
    title: 'Mergers & Acquisitions',
    description: 'Sell-side and buy-side M&A advisory from thesis through closing.',
    href: '/capabilities/mergers-acquisitions',
  },
  {
    title: 'Capital Raising',
    description: 'Debt and equity financing for growth, acquisitions, and balance sheet strategy.',
    href: '/capabilities/capital-raising',
  },
];

export default function BuySideAdvisoryPage() {
  return (
    <>
      <Hero
        eyebrow="Buy-side Advisory"
        title="Targeted deal access for institutional capital."
        subtitle="Deal origination and buy-side advisory for funds, family offices, and institutional investors seeking proprietary private-market opportunities."
        imageUrl={unsplashSrc('photo-1486406146926-c627a92ad1ab')}
        imageAlt="Corporate skyline reflecting institutional capital markets"
      />

      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <Breadcrumbs
                items={[
                  { label: 'Capabilities', href: '/capabilities' },
                  { label: 'Buy-side Advisory' },
                ]}
              />
              <SidebarNav />
            </aside>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-12">
                  <h2 className="mb-4 text-2xl font-semibold text-navy">What We Do</h2>
                  <p className="mb-4 leading-relaxed text-gray-700">
                    Our deal origination specialists advise institutional investors, family offices, and
                    private equity funds on identifying and executing investment opportunities across
                    private markets. Engagements span target identification through transaction
                    completion and portfolio optimization.
                  </p>
                  <p className="mb-4 leading-relaxed text-gray-700">
                    We support off-market deal sourcing, competitive acquisition processes, strategic
                    partnership formations, and portfolio company add-on acquisitions — with a focus on
                    opportunities that align to mandate, sector focus, and return objectives.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    Through a curated network of corporates, sponsors, and management teams, investors
                    gain access to proprietary deal flow including management buyouts, growth equity,
                    distressed situations, and strategic carve-outs.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-4 text-2xl font-semibold text-navy">How We Engage</h2>
                  <p className="mb-4 leading-relaxed text-gray-700">
                    Sector specialists and the origination team work as one mandate team. We translate
                    investment criteria into a focused screening framework, run confidential outreach,
                    and coordinate diligence so investors spend time only on opportunities with a real
                    path to close.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    Mandates are senior-led from first conversation through documentation — the same
                    principals who map the opportunity set remain accountable through negotiation and
                    closing.
                  </p>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-semibold text-navy">Service Areas</h2>
                  <div className="space-y-8">
                    {serviceAreas.map((area) => (
                      <div key={area.title}>
                        <h3 className="mb-2 text-lg font-semibold text-navy">{area.title}</h3>
                        <p className="leading-relaxed text-gray-700">{area.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Divider />

                <div className="mb-12">
                  <h2 className="mb-4 text-2xl font-semibold text-navy">Typical Mandates</h2>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <span className="mt-1 text-navy">•</span>
                      <span className="text-gray-700">
                        Proprietary target screening against a defined investment mandate
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-1 text-navy">•</span>
                      <span className="text-gray-700">
                        Confidential approach and process management for off-market opportunities
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-1 text-navy">•</span>
                      <span className="text-gray-700">
                        Add-on acquisition programs for portfolio platforms
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-1 text-navy">•</span>
                      <span className="text-gray-700">
                        Co-investment and joint venture structuring alongside strategic partners
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-navy">Related Capabilities</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {relatedCapabilities.map((capability) => (
              <CapabilityCard
                key={capability.href}
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

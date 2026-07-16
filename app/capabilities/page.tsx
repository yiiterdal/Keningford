import Hero from '../components/Hero';
import CapabilitiesOverview from '../components/CapabilitiesOverview';
import Divider from '../components/Divider';
import CTABlock from '../components/CTABlock';
import { CAPABILITIES_HERO_IMAGE, CAPABILITIES_HERO_IMAGE_ALT } from '../lib/image-utils';

export const metadata = {
  title: 'Capabilities | Keningford Partners',
  description:
    'Strategic capital advisory including M&A, capital raising, buy-side deal origination, strategic advisory, valuation, and restructuring.',
};

const approachPoints = [
  'Deep institutional relationships across global capital markets',
  "Customized approach tailored to each client's unique strategic objectives",
  'Proven execution track record in complex transactions',
  'Disciplined process management and strategic insight',
  'Long-term partnership approach extending beyond transaction closure',
];

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        eyebrow="Capabilities"
        title="Full-spectrum capital advisory."
        subtitle="Strategic capital advisory and financial services for leading companies and institutional investors."
        imageUrl={CAPABILITIES_HERO_IMAGE}
        imageAlt={CAPABILITIES_HERO_IMAGE_ALT}
      />

      <CapabilitiesOverview showHeader={false} />

      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-8">
          <Divider />

          <div className="max-w-3xl mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-6">Our Approach</h2>
            <ul className="space-y-4">
              {approachPoints.map((point, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-navy mt-1 shrink-0">•</span>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}

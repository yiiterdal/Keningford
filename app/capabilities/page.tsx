import Hero from '../components/Hero';
import CapabilityCard from '../components/CapabilityCard';
import Divider from '../components/Divider';
import CTABlock from '../components/CTABlock';

export const metadata = {
  title: 'Capabilities | Keningford',
  description: 'Strategic capital advisory and financial services including M&A, capital raising, strategic advisory, valuation, and restructuring.',
};

const capabilities = [
  {
    title: 'Mergers & Acquisitions',
    description:
      'Advising on company and asset sales, acquisitions, carve‑outs, and joint ventures with a focus on valuation, process design, and deal execution.',
    href: '/capabilities/mergers-acquisitions',
  },
  {
    title: 'Capital Raising',
    description:
      'Structuring and executing debt, equity, and hybrid financings to fund growth, acquisitions, refinancings, and balance sheet optimization.',
    href: '/capabilities/capital-raising',
  },
  {
    title: 'Strategic Advisory',
    description:
      'Board‑level advice on capital structure, portfolio decisions, and strategic alternatives, providing clear options and decision frameworks.',
    href: '/capabilities/strategic-advisory',
  },
  {
    title: 'Valuation & Fairness Opinions',
    description:
      'Independent valuations and fairness opinions that support boards and shareholders in complex or conflicted transactions.',
    href: '/capabilities/valuation-fairness-opinions',
  },
  {
    title: 'Restructuring',
    description:
      'Financial and operational restructuring support in periods of stress, focusing on liquidity, capital structure, and stakeholder negotiation.',
    href: '/capabilities/restructuring',
  },
];

const approachPoints = [
  'Deep institutional relationships across global capital markets',
  'Customized approach tailored to each client\'s unique strategic objectives',
  'Proven execution track record in complex transactions',
  'Disciplined process management and strategic insight',
  'Long-term partnership approach extending beyond transaction closure',
];

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        title="Capabilities"
        subtitle="Strategic capital advisory and financial services for leading companies and institutional investors."
        imageUrl="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Modern office building with glass facade"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={index}
                title={capability.title}
                description={capability.description}
                href={capability.href}
              />
            ))}
          </div>

          <Divider />

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-navy mb-6">Our Approach</h2>
            <ul className="space-y-4">
              {approachPoints.map((point, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-navy mt-1">—</span>
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


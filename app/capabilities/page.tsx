import Hero from '../components/Hero';
import CapabilitiesOverview from '../components/CapabilitiesOverview';
import EngagementTimeline from '../components/EngagementTimeline';
import { CAPABILITIES_HERO_IMAGE, CAPABILITIES_HERO_IMAGE_ALT } from '../lib/image-utils';

export const metadata = {
  title: 'Capabilities | Keningford Partners',
  description:
    'Strategic capital advisory including M&A, capital raising, buy-side deal origination, strategic advisory, valuation, and restructuring.',
};

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

      <EngagementTimeline />
    </>
  );
}

import Hero from '../components/Hero';
import CapabilitiesOverview from '../components/CapabilitiesOverview';
import EngagementTimeline from '../components/EngagementTimeline';
import HomeCta from '../components/HomeCta';
import ImageBand from '../components/ImageBand';
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

      <CapabilitiesOverview />

      <ImageBand
        image="/images/bands/nyc-sunset-v2.jpg"
        imageAlt="New York City skyline at sunset seen across the water"
        pill="Senior-Led Execution"
        title="Senior bankers lead every mandate, from origination through close."
        description="Clients work directly with decision-makers throughout strategy design, investor positioning, negotiation, and closing."
        primaryCta={{ label: 'Meet the team →', href: '/about#team' }}
        secondaryCta={{ label: 'View transactions', href: '/transactions' }}
      />

      <EngagementTimeline />

      <HomeCta />
    </>
  );
}

import dynamic from 'next/dynamic';
import Hero, { DEFAULT_HERO_IMAGE, DEFAULT_HERO_IMAGE_ALT } from './components/Hero';
import EditorialImage from './components/EditorialImage';
import SelectedExperience from './components/SelectedExperience';
import MarketPerspective from './components/MarketPerspective';
import NewsSection from './components/NewsSection';

const FirmPositioning = dynamic(() => import('./components/FirmPositioning'));
const CapabilitiesOverview = dynamic(() => import('./components/CapabilitiesOverview'));
const OurApproach = dynamic(() => import('./components/OurApproach'));

export const metadata = {
  title: 'Keningford Partners | Strategic Capital Advisory & Financial Services',
  description: 'Partnering with institutional investors and leading companies to deliver customized capital solutions.',
};

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        href={DEFAULT_HERO_IMAGE}
        as="image"
        type="image/jpeg"
        fetchPriority="high"
      />
      <Hero
        eyebrow="Independent Capital Advisory"
        title="Counsel for the decisions that define a company's future."
        subtitle="Keningford Partners advises boards, founders and institutional investors on their most consequential transactions, pairing global capital reach with senior, conflict-free judgment on every engagement."
        imageUrl={DEFAULT_HERO_IMAGE}
        imageAlt={DEFAULT_HERO_IMAGE_ALT}
        variant="large"
        layout="editorial"
        primaryCta={{ label: 'Schedule a consultation', href: '/contact' }}
        secondaryCta={{ label: 'Our capabilities', href: '/capabilities' }}
      />

      <FirmPositioning />

      <EditorialImage
        variant="architecture-1"
        priority
        eyebrow="Global Reach, Local Expertise"
        title="Capital is global. Judgment is personal."
        description="Combining deep market knowledge with extensive transaction experience across industries and geographies."
      />

      <CapabilitiesOverview />

      <EditorialImage
        variant="architecture-4"
        eyebrow="Long-term Perspective"
        title="Value is created over years, not quarters."
        description="We focus on strategic outcomes that create sustainable value over time, not short-term transactions."
      />

      <OurApproach />

      <EditorialImage
        variant="architecture-2"
        eyebrow="Institutional Relationships"
        title="The right capital starts with the right relationships."
        description="Access to global capital sources and strategic partners through established institutional networks."
      />

      <SelectedExperience />

      <EditorialImage
        variant="architecture-5"
        eyebrow="Disciplined Execution"
        title="Senior attention on every mandate."
        description="Rigorous analysis, structured processes, and senior-level attention on every engagement."
      />

      <MarketPerspective />

      <NewsSection />

      <EditorialImage
        variant="architecture-3"
        eyebrow="Strategic Partnership"
        title="Begin with a confidential conversation."
        description="To learn more about our capabilities and how we can assist with your strategic objectives, please contact our team."
        ctaText="Contact Our Team"
        ctaHref="/contact"
      />
    </>
  );
}

import dynamic from 'next/dynamic';
import Hero, { defaultHeroVideo } from './components/Hero';
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
        href="/images/hero/poster.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <Hero
        title="Strategic Capital Advisory & Financial Services"
        subtitle="Partnering with institutional investors and leading companies to deliver customized capital solutions and strategic advisory services."
        variant="large"
        videoSrc={defaultHeroVideo}
        primaryCta={{ label: 'Schedule a Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Our Capabilities', href: '/capabilities' }}
      />

      <FirmPositioning />

      <EditorialImage
        variant="architecture-1"
        priority
        title="Global Reach, Local Expertise"
        description="Combining deep market knowledge with extensive transaction experience across industries and geographies."
      />

      <CapabilitiesOverview />

      <EditorialImage
        variant="architecture-4"
        title="Long-term Perspective"
        description="We focus on strategic outcomes that create sustainable value over time, not short-term transactions."
      />

      <OurApproach />

      <EditorialImage
        variant="architecture-2"
        title="Institutional Relationships"
        description="Access to global capital sources and strategic partners through established institutional networks."
      />

      <SelectedExperience />

      <EditorialImage
        variant="architecture-5"
        title="Disciplined Execution"
        description="Rigorous analysis, structured processes, and senior-level attention on every engagement."
      />

      <MarketPerspective />

      <NewsSection />

      <EditorialImage
        variant="architecture-3"
        title="Strategic Partnership"
        description="To learn more about our capabilities and how we can assist with your strategic objectives, please contact our team."
        ctaText="Contact Our Team"
        ctaHref="/contact"
      />
    </>
  );
}

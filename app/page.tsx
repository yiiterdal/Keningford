import Hero from './components/Hero';
import FirmPositioning from './components/FirmPositioning';
import CapabilitiesOverview from './components/CapabilitiesOverview';
import OurApproach from './components/OurApproach';
import SelectedExperience from './components/SelectedExperience';
import MarketPerspective from './components/MarketPerspective';
import EditorialImage from './components/EditorialImage';

export const metadata = {
  title: 'Keningford | Strategic Capital Advisory & Financial Services',
  description: 'Partnering with institutional investors and leading companies to deliver customized capital solutions.',
};

export default function Home() {
  return (
    <>
      <Hero
        title="Strategic Capital Advisory & Financial Services"
        subtitle="Partnering with institutional investors and leading companies to deliver customized capital solutions and strategic advisory services."
        variant="large"
      />

      <FirmPositioning />

      <EditorialImage 
        variant="architecture-1"
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

import dynamic from 'next/dynamic';
import Hero, { DEFAULT_HERO_IMAGE, DEFAULT_HERO_IMAGE_ALT } from './components/Hero';
import JsonLd from './components/JsonLd';
import NewsSection from './components/NewsSection';
import HomeCredentials from './components/HomeCredentials';
import { SCHEDULE_HREF } from './lib/scheduling';
import { financialServiceSchema } from './lib/json-ld';

const FirmPositioning = dynamic(() => import('./components/FirmPositioning'));
const CapabilitiesOverview = dynamic(() => import('./components/CapabilitiesOverview'));
const HomeIndustries = dynamic(() => import('./components/HomeIndustries'));
const HomeStats = dynamic(() => import('./components/HomeStats'));
const HomeAdvisoryTabs = dynamic(() => import('./components/HomeAdvisoryTabs'));
const HomeCaseStudies = dynamic(() => import('./components/HomeCaseStudies'));
const EngagementFramework = dynamic(() => import('./components/EngagementFramework'));
const HomeFaq = dynamic(() => import('./components/HomeFaq'));
const HomeCta = dynamic(() => import('./components/HomeCta'));

export const metadata = {
  title: 'Strategic Capital Advisory & Financial Services',
  description:
    'Partnering with institutional investors and leading companies to deliver customized capital solutions.',
};

export default function Home() {
  return (
    <>
      <JsonLd data={financialServiceSchema} />
      <Hero
        eyebrow="Independent Capital Advisory"
        title="Counsel for the decisions that define a company's future."
        subtitle="Keningford Partners advises boards, founders and institutional investors on their most consequential transactions, pairing global capital reach with senior, conflict-free judgment on every engagement."
        imageUrl={DEFAULT_HERO_IMAGE}
        imageAlt={DEFAULT_HERO_IMAGE_ALT}
        variant="large"
        layout="editorial"
        primaryCta={{ label: 'Schedule a consultation', href: SCHEDULE_HREF }}
        secondaryCta={{ label: 'Our capabilities', href: '/capabilities' }}
      />

      <FirmPositioning />
      <CapabilitiesOverview />
      <HomeIndustries />
      <HomeStats />
      <HomeAdvisoryTabs />
      <HomeCaseStudies />
      <EngagementFramework />
      <HomeFaq />
      <NewsSection />
      <HomeCta />
      <HomeCredentials />
    </>
  );
}

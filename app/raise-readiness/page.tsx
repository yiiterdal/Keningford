import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import Hero from '../components/Hero';
import HomeSectionHeader from '../components/HomeSectionHeader';
import RaiseReadinessAssessment from '../components/RaiseReadinessAssessment';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'Raise Readiness Assessment',
  description:
    'A structured diagnostic to assess whether your company is ready to raise institutional capital.',
};

export default function RaiseReadinessPage() {
  return (
    <>
      <Hero
        eyebrow="Diagnostic"
        title="Institutional raise readiness"
        subtitle="Eight questions across financial profile, capital position, and market credibility, designed to give founders an honest view before going to investors."
        imageUrl={unsplashSrc('photo-1460925895917-afdab827c52f')}
        imageAlt="Financial analysis on a laptop"
      />

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto mb-10 flex max-w-[680px] justify-center">
            <Breadcrumbs
              items={[
                { label: 'Capabilities', href: '/capabilities' },
                { label: 'Capital Raising', href: '/capabilities/capital-raising' },
                { label: 'Raise Readiness' },
              ]}
            />
          </div>
          <HomeSectionHeader
            align="center"
            pill="Raise Readiness"
            title="Are you ready to raise institutional capital?"
            description="This assessment evaluates the dimensions institutional investors typically examine before engaging in a formal process. Responses are confidential and results are indicative, not a valuation, recommendation, or offer of services."
          />

          <RaiseReadinessAssessment />

          <p className="mx-auto mt-10 max-w-[680px] text-center text-sm leading-relaxed text-gray-500">
            For a phase-by-phase view of timing, see{' '}
            <Link
              href="/insights/guides/14-week-growth-round-equity-process-map"
              className="font-medium text-navy underline-offset-2 hover:underline"
            >
              The 14-Week Growth-Round Equity Process Map
            </Link>
            , or{' '}
            <Link
              href="/insights/guides/14-week-growth-round-equity-process-map#booklet"
              className="font-medium text-navy underline-offset-2 hover:underline"
            >
              download the free booklet
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

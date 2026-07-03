import Breadcrumbs from '../components/Breadcrumbs';
import Hero from '../components/Hero';
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
        subtitle="Eight questions across financial profile, capital position, and market credibility — designed to give founders an honest view before going to investors."
        imageUrl={unsplashSrc('photo-1460925895917-afdab827c52f')}
        imageAlt="Financial analysis on a laptop"
      />

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-10 max-w-2xl">
            <Breadcrumbs
              items={[
                { label: 'Capabilities', href: '/capabilities' },
                { label: 'Capital Raising', href: '/capabilities/capital-raising' },
                { label: 'Raise Readiness' },
              ]}
            />
            <p className="text-sm leading-relaxed text-gray-600">
              This assessment evaluates the dimensions institutional investors typically examine
              before engaging in a formal process. Responses are confidential and results are
              indicative — not a valuation, recommendation, or offer of services.
            </p>
          </div>

          <RaiseReadinessAssessment />
        </div>
      </section>
    </>
  );
}

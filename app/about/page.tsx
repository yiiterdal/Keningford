import Image from 'next/image';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import JsonLd from '../components/JsonLd';
import { founderProfile } from '../data/careers';
import { personSchema } from '../lib/json-ld';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'About',
  description:
    'Keningford Partners is a New York-based boutique capital advisory firm founded by Tuna Yilar, advising companies and institutional investors on M&A, capital raising, and debt advisory.',
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <Hero
        eyebrow="About"
        title="A trusted partner to leading institutions."
        subtitle="Strategic capital advisory and financial services for leading companies and institutional investors."
        imageUrl={unsplashSrc('photo-1521737604893-d14cc237f11d')}
        imageAlt="Professional business meeting"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid grid-cols-1 items-start gap-10 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden bg-gray-100">
                <Image
                  src={founderProfile.imageUrl}
                  alt={founderProfile.name}
                  fill
                  className="object-cover"
                  sizes="220px"
                  priority
                />
              </div>
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
                  {founderProfile.title}
                </p>
                <h2 className="mb-6 text-3xl font-semibold text-navy md:text-4xl">
                  {founderProfile.name}
                </h2>
                {founderProfile.bio.map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <Divider />

            <div className="mb-12">
              <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                Keningford Partners is a global investment bank focused on structuring complex capital
                solutions for companies and institutional investors. We specialize in transactions where
                capital is truly strategic, in situations that require precision, creativity, and access
                to the right investors rather than the widest audience.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                Our work spans growth capital, recapitalizations, bespoke credit, and strategic M&amp;A
                across sectors ranging from industrials and business services to technology, healthcare,
                and financial services. In each case, we engineer financing structures that align long-term
                capital with ambitious growth objectives.
              </p>
            </div>

            <Divider />

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-navy md:text-3xl">Our Foundation</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                Keningford Partners was founded by senior investment bankers who have spent their careers
                navigating high-stakes, time-sensitive transactions. Drawing on experience across multiple
                cycles and market regimes, our team brings a rigorous approach to structuring, negotiation,
                and investor alignment.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                We operate as an embedded partner rather than a transactional intermediary, helping clients
                design capital strategies, not just execute single deals. Whether optimizing an existing
                balance sheet, raising capital for transformative growth, or evaluating strategic
                alternatives, we focus on turning each transaction into a durable inflection point for the
                business.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-navy md:text-3xl">Our Differentiators</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">Institutional Relationships</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Deep relationships with pension funds, sovereign wealth funds, family offices, private
                    equity and credit investors across global markets.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">Customized Approach</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    No one-size-fits-all solutions. Every mandate is tailored to the client&apos;s capital
                    structure, ownership dynamics, and strategic priorities.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">Proven Execution</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Track record of closing complex cross-border and multi-stakeholder transactions with
                    disciplined process management and clear communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-navy md:text-3xl">How We Work</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-sm border border-gray-200 p-6 md:p-7">
                  <h3 className="mb-3 text-lg font-semibold text-navy">Senior-Led Execution</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Every mandate is led by senior bankers from start to finish. Clients work directly with
                    decision-makers throughout strategy design, investor positioning, negotiation, and
                    closing.
                  </p>
                </div>
                <div className="rounded-sm border border-gray-200 p-6 md:p-7">
                  <h3 className="mb-3 text-lg font-semibold text-navy">Selective Mandate Model</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We intentionally maintain a focused number of concurrent assignments so each client
                    receives depth, speed, and high-quality execution without dilution of attention.
                  </p>
                </div>
                <div className="rounded-sm border border-gray-200 p-6 md:p-7">
                  <h3 className="mb-3 text-lg font-semibold text-navy">Institutional Process Discipline</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    From data room architecture to buyer and investor communication plans, we run
                    disciplined processes that reduce execution risk and improve negotiating leverage.
                  </p>
                </div>
                <div className="rounded-sm border border-gray-200 p-6 md:p-7">
                  <h3 className="mb-3 text-lg font-semibold text-navy">Long-Term Partnership</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Our advisory model extends beyond transaction close. We continue to support boards and
                    management teams on post-transaction capital strategy and strategic priorities.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold text-navy md:text-3xl">Sectors & Situations</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                We advise across business services, technology, healthcare, industrials, biotech and
                life sciences, real estate, and selected financial services. Our mandates typically
                involve inflection-point decisions: acceleration capital, ownership transitions,
                recapitalizations, complex stakeholder alignment, or strategic alternatives under tight
                timelines.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                Regardless of sector, our role is consistent: define the right capital strategy, structure
                options with institutional rigor, and execute with clear communication and process control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

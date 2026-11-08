import Image from 'next/image';
import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import HomeSectionHeader from '../components/HomeSectionHeader';
import ImageBand from '../components/ImageBand';
import JsonLd from '../components/JsonLd';
import NumberedCard from '../components/NumberedCard';
import ScrollRevealText from '../components/ScrollRevealText';
import TeamGrid from '../components/TeamGrid';
import { careerPartners } from '../data/careers';
import { personSchema } from '../lib/json-ld';
import { IMAGE_QUALITY, unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'About',
  description:
    'Keningford Partners is a New York-based boutique capital advisory firm founded by Tuna Yilar, advising companies and institutional investors on M&A, capital raising, and debt advisory.',
};

const differentiators = [
  {
    title: 'Institutional Relationships',
    body: 'Deep relationships with pension funds, sovereign wealth funds, family offices, private equity and credit investors across global markets.',
  },
  {
    title: 'Customized Approach',
    body: "No one-size-fits-all solutions. Every mandate is tailored to the client's capital structure, ownership dynamics, and strategic priorities.",
  },
  {
    title: 'Proven Execution',
    body: 'Track record of closing complex cross-border and multi-stakeholder transactions with disciplined process management and clear communication.',
  },
];

const workingPrinciples = [
  {
    title: 'Senior-Led Execution',
    body: 'Every mandate is led by senior bankers from start to finish. Clients work directly with decision-makers throughout strategy design, investor positioning, negotiation, and closing.',
  },
  {
    title: 'Selective Mandate Model',
    body: 'We intentionally maintain a focused number of concurrent assignments so each client receives depth, speed, and high-quality execution without dilution of attention.',
  },
  {
    title: 'Institutional Process Discipline',
    body: 'From data room architecture to buyer and investor communication plans, we run disciplined processes that reduce execution risk and improve negotiating leverage.',
  },
  {
    title: 'Long-Term Partnership',
    body: 'Our advisory model extends beyond transaction close. We continue to support boards and management teams on post-transaction capital strategy and strategic priorities.',
  },
];

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

      <section className="bg-white" data-reveal-root>
        <div className="container mx-auto px-6 py-24 md:px-8 md:py-32">
          <ScrollRevealText
            className="max-w-none text-[1.5rem] font-medium leading-[1.3] tracking-[-0.02em] md:text-[1.75rem] lg:text-[2rem]"
            text="Keningford Partners is a global investment bank focused on structuring complex capital solutions for companies and institutional investors. We specialize in transactions where capital is truly strategic, in situations that require precision, creativity, and access to the right investors rather than the widest audience."
          />
          <p className="mt-10 max-w-[640px] text-base leading-[1.5] tracking-[-0.01em] text-gray-500">
            Our work spans growth capital, recapitalizations, bespoke credit, and strategic M&amp;A across sectors
            ranging from industrials and business services to technology, healthcare, and financial services. In each
            case, we engineer financing structures that align long-term capital with ambitious growth objectives.
          </p>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            align="center"
            pill="Our Team"
            title="Senior bankers who lead every mandate."
            description="Senior bankers and advisors who lead every mandate directly, from origination through close."
          />
          <TeamGrid members={careerPartners} />
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
                Our Foundation
              </p>
              <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
                Founded by senior investment bankers.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-[1.6] tracking-[-0.01em] text-gray-600 md:text-lg lg:col-span-6 lg:col-start-7 lg:pt-14">
              <p>
                Keningford Partners was founded by senior investment bankers who have spent their careers navigating
                high-stakes, time-sensitive transactions. Drawing on experience across multiple cycles and market
                regimes, our team brings a rigorous approach to structuring, negotiation, and investor alignment.
              </p>
              <p>
                We operate as an embedded partner rather than a transactional intermediary, helping clients design
                capital strategies, not just execute single deals. Whether optimizing an existing balance sheet, raising
                capital for transformative growth, or evaluating strategic alternatives, we focus on turning each
                transaction into a durable inflection point for the business.
              </p>
            </div>
          </div>
          <div className="relative mt-16 aspect-[16/10] overflow-hidden bg-[#f0f0f0] md:mt-20 md:aspect-[21/9]">
            <Image
              src="/images/editorial/long-term-perspective-hq.jpg"
              alt="Modern office corridor with glass-walled meeting rooms"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              quality={IMAGE_QUALITY}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader align="center" pill="Our Differentiators" title="What sets the firm apart." />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {differentiators.map((item, index) => (
              <NumberedCard key={item.title} index={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="How We Work"
            title="Senior-led, selective, and disciplined."
            description="Our advisory model extends beyond transaction close."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {workingPrinciples.map((item, index) => (
              <NumberedCard key={item.title} index={index} tone="gray" {...item} />
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/bands/nyc-night-v2.jpg"
        imageAlt="Lower Manhattan skyline illuminated at night"
        imagePosition="center 60%"
        pill="Sectors & Situations"
        title="Inflection-point decisions, across sectors."
        description={
          <>
            <p>
              We advise across business services, technology, healthcare, industrials, biotech and life sciences, real
              estate, and selected financial services. Our mandates typically involve inflection-point decisions:
              acceleration capital, ownership transitions, recapitalizations, complex stakeholder alignment, or
              strategic alternatives under tight timelines.
            </p>
            <p>
              Regardless of sector, our role is consistent: define the right capital strategy, structure options with
              institutional rigor, and execute with clear communication and process control.
            </p>
          </>
        }
        primaryCta={{ label: 'Explore industries →', href: '/industries' }}
        secondaryCta={{ label: 'Our capabilities', href: '/capabilities' }}
      />

      <HomeCta />
    </>
  );
}

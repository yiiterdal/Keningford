import Link from 'next/link';
import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import HomeSectionHeader from '../components/HomeSectionHeader';
import ImageBand from '../components/ImageBand';
import NewsCardImage from '../components/NewsCardImage';
import { industries } from '../data/industries';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'Industries | Keningford Partners',
  description:
    'Sector coverage across healthcare, biotech and life sciences, energy, software, industrials, and financial services.',
};

export default function IndustriesPage() {
  return (
    <>
      <Hero
        eyebrow="Industries"
        title="Sector depth across the middle market."
        subtitle="Industry-specific capital advisory across healthcare, biotech and life sciences, energy, software, industrials, and financial services."
        imageUrl={unsplashSrc('photo-1454165804606-c3d57bc86b40')}
        imageAlt="Industry and sector analysis"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            align="center"
            pill="Industries we serve"
            title="Deep expertise across the sectors we advise."
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col border-b border-gray-200 pb-6"
              >
                <NewsCardImage
                  src={industry.imageUrl}
                  alt={industry.imageAlt}
                  aspectClassName="aspect-[16/10]"
                  className="mb-5"
                />
                <h2 className="font-sans text-xl font-medium leading-[1.2] tracking-[-0.01em] text-navy md:text-[22px]">
                  {industry.title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{industry.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-medium text-navy">
                  Explore sector
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/bands/dusk-skyline-v2.jpg"
        imageAlt="Silhouetted skyscrapers against a twilight sky"
        pill="Across Sectors"
        title="Regardless of sector, our role is consistent."
        description="Define the right capital strategy, structure options with institutional rigor, and execute with clear communication and process control."
        primaryCta={{ label: 'Discuss a mandate →', href: '/contact' }}
        secondaryCta={{ label: 'Our capabilities', href: '/capabilities' }}
      />

      <HomeCta tone="white" />
    </>
  );
}

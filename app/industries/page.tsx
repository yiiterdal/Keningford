import Link from 'next/link';
import Hero from '../components/Hero';
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

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group border border-gray-200 transition-colors hover:border-gray-300"
              >
                <NewsCardImage src={industry.imageUrl} alt={industry.imageAlt} aspectClassName="aspect-[16/10]" />
                <div className="p-6">
                  <h2 className="mb-3 text-xl font-semibold text-navy group-hover:underline">{industry.title}</h2>
                  <p className="text-sm leading-relaxed text-gray-600">{industry.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

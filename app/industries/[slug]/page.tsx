import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import NewsCardImage from '../../components/NewsCardImage';
import { getIndustryBySlug, industries } from '../../data/industries';
import type { Metadata } from 'next';

interface IndustryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return { title: 'Industry Not Found' };
  return { title: `${industry.title} | Industries`, description: industry.excerpt };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  return (
    <>
      <section className="bg-white pt-32 pb-8 md:pt-40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Industries', href: '/industries' },
                { label: industry.title },
              ]}
            />
            <h1 className="mb-6 mt-6 text-3xl font-semibold text-navy md:text-4xl">{industry.title}</h1>
            <p className="text-lg leading-relaxed text-gray-600">{industry.excerpt}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto mb-12 px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <NewsCardImage
            src={industry.imageUrl}
            alt={industry.imageAlt}
            aspectClassName="aspect-[21/9]"
          />
        </div>
      </div>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto grid max-w-4xl gap-12">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-navy">Sector overview</h2>
              <p className="leading-relaxed text-gray-700">{industry.overview}</p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-navy">Recent deals</h2>
              <ul className="space-y-2">
                {industry.recentDeals.map((deal) => (
                  <li key={deal} className="flex gap-2 text-gray-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#BF9B5F]" aria-hidden />
                    <span>{deal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-navy">Capital trends</h2>
              <ul className="space-y-2">
                {industry.capitalTrends.map((trend) => (
                  <li key={trend} className="flex gap-2 text-gray-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#BF9B5F]" aria-hidden />
                    <span>{trend}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-navy">How we help</h2>
              <ul className="space-y-2">
                {industry.howWeHelp.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#BF9B5F]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {industry.articles.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-navy">Articles</h2>
                <ul className="space-y-3">
                  {industry.articles.map((article) => (
                    <li key={article.href}>
                      <Link href={article.href} className="text-navy hover:underline">
                        {article.title}
                      </Link>
                      <span className="ml-2 text-xs uppercase tracking-wide text-gray-400">
                        {article.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-gray-200 pt-8">
              <Link href="/contact" className="text-sm font-medium text-navy hover:underline">
                Discuss a mandate in {industry.title} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

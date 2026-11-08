import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import HomeCta from '../../components/HomeCta';
import HomeSectionHeader from '../../components/HomeSectionHeader';
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-[1.5] tracking-[-0.01em] text-gray-600">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0]" aria-hidden>
            <svg className="h-3 w-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const columns = [
    { title: 'Recent deals', items: industry.recentDeals },
    { title: 'Capital trends', items: industry.capitalTrends },
    { title: 'How we help', items: industry.howWeHelp },
  ];

  return (
    <>
      <section className="bg-white pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Industries', href: '/industries' },
                { label: industry.title },
              ]}
            />
            <p className="mb-8 inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
              Industries
            </p>
            <h1 className="font-sans text-[2.25rem] font-medium leading-[1.08] tracking-[-0.03em] text-navy md:text-[3rem] lg:text-[3.5rem]">
              {industry.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.5] tracking-[-0.01em] text-gray-500">{industry.excerpt}</p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl md:mt-16">
            <NewsCardImage
              src={industry.imageUrl}
              alt={industry.imageAlt}
              aspectClassName="aspect-[16/9] md:aspect-[21/9]"
              priority
            />
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:mt-24 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="max-w-[460px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem]">
                Sector overview.
              </h2>
            </div>
            <p className="text-base leading-[1.7] tracking-[-0.01em] text-gray-600 md:text-lg lg:col-span-7">
              {industry.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            align="center"
            pill={industry.title}
            title="Deals, trends, and how we help."
          />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {columns.map((column, index) => (
              <article key={column.title} className="flex h-full flex-col bg-white p-8">
                <span className="flex h-10 w-10 items-center justify-center bg-[#f0f0f0] text-[13px] font-medium text-navy">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-6 mt-10 font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy md:text-[22px]">
                  {column.title}
                </h3>
                <CheckList items={column.items} />
              </article>
            ))}
          </div>

          {industry.articles.length > 0 && (
            <div className="mt-3 bg-white p-8 md:p-10">
              <h3 className="mb-6 font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy md:text-[22px]">
                Related reading
              </h3>
              <ul className="divide-y divide-gray-200">
                {industry.articles.map((article) => (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <span className="text-[15px] font-medium text-navy group-hover:underline md:text-base">
                        {article.title}
                      </span>
                      <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
                        {article.type} →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-[13px] font-medium text-white transition hover:bg-navy-dark"
            >
              Discuss a mandate in {industry.title} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <HomeCta tone="white" />
    </>
  );
}

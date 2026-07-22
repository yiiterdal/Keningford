import Link from 'next/link';
import { getLatestNews } from '../data/news';
import NewsCardImage from './NewsCardImage';
import NewsMeta from './NewsMeta';
import NewsReadMore from './NewsReadMore';
import { IMAGE_SIZES } from '../lib/image-utils';
import { extractArticleHeadings } from '../lib/news-content';

export default function NewsSection() {
  const latestNews = getLatestNews(4);
  const [featured, ...rest] = latestNews;

  if (!featured) return null;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-navy md:text-4xl">News & Insights</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Perspectives on markets, transactions, and developments from Keningford Partners.
            </p>
          </div>
          <Link href="/news" className="shrink-0 text-sm font-medium text-navy hover:underline">
            View all news →
          </Link>
        </div>

        <Link
          href={`/news/${featured.slug}`}
          className="group mb-12 grid grid-cols-1 gap-8 border-b border-gray-200 pb-12 md:mb-14 md:grid-cols-12 md:gap-10 md:pb-14"
        >
          <div className="md:col-span-7">
            <NewsCardImage
              src={featured.imageUrl}
              alt={featured.imageAlt}
              priority
              sizes={IMAGE_SIZES.newsList}
              aspectClassName="aspect-[16/10] md:aspect-[21/12]"
              clientLogo={featured.clientLogo}
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-5">
            {featured.eyebrow && (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#BF9B5F]">
                {featured.eyebrow}
              </p>
            )}
            <NewsMeta category={featured.category} date={featured.date} className="mb-3" />
            <h3 className="font-serif text-2xl leading-snug text-navy group-hover:underline md:text-[1.75rem]">
              {featured.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{featured.excerpt}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {(featured.highlights ?? extractArticleHeadings(featured.content))
                .slice(0, 3)
                .map((topic) => (
                  <li
                    key={topic}
                    className="border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600"
                  >
                    {topic.length > 42 ? `${topic.slice(0, 40)}…` : topic}
                  </li>
                ))}
            </ul>
            <div className="mt-6">
              <NewsReadMore />
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {rest.map((item) => (
            <article key={item.slug} className="h-full">
              <Link
                href={`/news/${item.slug}`}
                className="group flex h-full flex-col border-b border-gray-200 pb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                <NewsCardImage
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  clientLogo={item.clientLogo}
                />
                <div className="flex flex-1 flex-col pt-4">
                  {item.eyebrow && (
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#BF9B5F]">
                      {item.eyebrow}
                    </p>
                  )}
                  <NewsMeta category={item.category} date={item.date} className="mb-3" />
                  <h3 className="mb-3 text-lg font-semibold leading-snug text-navy group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <NewsReadMore />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

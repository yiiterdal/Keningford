import Link from 'next/link';
import { getLatestNews } from '../data/news';
import NewsCardImage from './NewsCardImage';
import NewsMeta from './NewsMeta';
import NewsReadMore from './NewsReadMore';

export default function NewsSection() {
  const latestNews = getLatestNews(3);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
              News & Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Perspectives on markets, transactions, and developments from Keningford Partners.
            </p>
          </div>
          <Link
            href="/news"
            className="text-sm font-medium text-navy hover:underline shrink-0"
          >
            View all news →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {latestNews.map((item, index) => (
            <article key={item.slug} className="h-full">
              <Link
                href={`/news/${item.slug}`}
                className="group flex flex-col h-full border-b border-gray-200 pb-6 hover:border-gray-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                <NewsCardImage src={item.imageUrl} alt={item.imageAlt} priority={index === 0} />
                <div className="flex flex-col flex-1 pt-4">
                  <NewsMeta category={item.category} date={item.date} className="mb-3" />
                  <h3 className="text-lg font-semibold text-navy mb-3 leading-snug decoration-navy/40 group-hover:underline underline-offset-[5px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{item.excerpt}</p>
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

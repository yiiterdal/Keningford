import Link from 'next/link';
import Hero from '../components/Hero';
import NewsCardImage from '../components/NewsCardImage';
import NewsMeta from '../components/NewsMeta';
import NewsReadMore from '../components/NewsReadMore';
import { IMAGE_SIZES } from '../lib/image-utils';
import { newsItems } from '../data/news';

export const metadata = {
  title: 'News & Insights | Keningford Partners',
  description: 'Latest news, market perspectives, and firm updates from Keningford Partners.',
};

export default function NewsPage() {
  return (
    <>
      <Hero
        title="News & Insights"
        subtitle="Perspectives on markets, transactions, and developments from our team."
        imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=3840&q=90&auto=format&fit=crop"
        imageAlt="Business news and market analysis"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-14">
            {newsItems.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="group grid grid-cols-1 md:grid-cols-5 gap-8 pb-14 md:pb-16 border-b border-gray-200 last:border-b-0 pt-2 hover:bg-gray-50/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                <div className="md:col-span-2">
                  <NewsCardImage
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    sizes={IMAGE_SIZES.newsList}
                  />
                </div>
                <div className="md:col-span-3 flex flex-col justify-center">
                  <NewsMeta category={item.category} date={item.date} className="mb-3" />
                  <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4 decoration-navy/40 group-hover:underline underline-offset-[5px]">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{item.excerpt}</p>
                  <NewsReadMore />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

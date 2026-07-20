import Link from 'next/link';
import Hero from '../components/Hero';
import NewsCardImage from '../components/NewsCardImage';
import NewsMeta from '../components/NewsMeta';
import NewsReadMore from '../components/NewsReadMore';
import { IMAGE_SIZES, unsplashSrc } from '../lib/image-utils';
import { newsItems } from '../data/news';

export const metadata = {
  title: 'News & Insights | Keningford Partners',
  description:
    'Latest news, market perspectives, and firm updates from Keningford Partners on capital raising, M&A, and debt advisory.',
};

export default function NewsPage() {
  return (
    <>
      <Hero
        eyebrow="News & Insights"
        title="The latest from Keningford Partners."
        subtitle="Perspectives on capital markets, transactions, and firm developments — drawn from live mandate activity across equity, debt, and M&A."
        imageUrl={unsplashSrc('photo-1504711434969-e33886168f5c')}
        imageAlt="Business news and market analysis"
      />

      <section className="border-b border-gray-100 bg-gray-50 py-10 md:py-12">
        <div className="container mx-auto px-6 md:px-8">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-gray-600 md:text-base">
            Keningford Partners publishes in-depth perspectives on the trends shaping how growth-stage
            companies raise capital and transact. Our coverage draws on activity across the sectors we
            advise — equity, debt, and strategic M&A — so founders, boards, and investors can see where
            capital is moving, not just where headlines point. For institutional and professional use
            only.
          </p>
        </div>
      </section>

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
                    clientLogo={item.clientLogo}
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

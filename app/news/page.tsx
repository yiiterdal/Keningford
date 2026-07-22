import Hero from '../components/Hero';
import NewsListing from '../components/NewsListing';
import { unsplashSrc } from '../lib/image-utils';
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

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-10 md:mb-12">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
              The Latest
            </p>
            <h2 className="font-serif text-2xl text-navy md:text-3xl">News & market notes</h2>
          </div>
          <NewsListing items={newsItems} />
        </div>
      </section>
    </>
  );
}

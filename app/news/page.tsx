import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import HomeSectionHeader from '../components/HomeSectionHeader';
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
        subtitle="Perspectives on capital markets, transactions, and firm developments - drawn from live mandate activity across equity, debt, and M&A."
        imageUrl={unsplashSrc('photo-1504711434969-e33886168f5c')}
        imageAlt="Business news and market analysis"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="The Latest"
            title="News and market notes."
            description="Our coverage draws on activity across the sectors we advise - equity, debt, and strategic M&A - so founders, boards, and investors can see where capital is moving. For institutional and professional use only."
          />
          <NewsListing items={newsItems} />
        </div>
      </section>

      <HomeCta />
    </>
  );
}

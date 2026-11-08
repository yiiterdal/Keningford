import Link from 'next/link';
import CapitalMarketsDashboard from '../components/CapitalMarketsDashboard';
import FeaturedGuideSection from '../components/FeaturedGuideSection';
import FeaturedReportSection from '../components/FeaturedReportSection';
import { GuideIcon } from '../components/GuideIcons';
import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import HomeSectionHeader from '../components/HomeSectionHeader';
import NewsListing from '../components/NewsListing';
import ReportMeta from '../components/ReportMeta';
import { investorGuides } from '../data/investor-guides';
import { newsItems } from '../data/news';
import { featuredReportSlug, reports } from '../data/reports';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'Insights | Keningford Partners',
  description:
    'Capital markets dashboard, investor guides, market perspectives, and downloadable research from Keningford Partners.',
};

const featuredGuideSlug = '14-week-growth-round-equity-process-map';

const outlineButton =
  'inline-flex items-center gap-2 border border-navy/15 bg-white px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/30';

export default function InsightsPage() {
  const featuredGuide = investorGuides.find((guide) => guide.slug === featuredGuideSlug);
  const featuredReport = reports.find((report) => report.slug === featuredReportSlug);
  const otherGuides = investorGuides.filter((guide) => guide.slug !== featuredGuideSlug);
  const marketInsights = newsItems.filter((item) => item.category === 'Market Insights').slice(0, 6);
  const guides = featuredGuide ? [featuredGuide, ...otherGuides] : otherGuides;

  return (
    <>
      <Hero
        eyebrow="Insights"
        title="Capital intelligence for decision-makers."
        subtitle="Market dashboard, investor guides, perspectives, and research - structured for founders, boards, and institutional investors."
        imageUrl={unsplashSrc('photo-1504711434969-e33886168f5c')}
        imageAlt="Market analysis and financial insights"
      />

      <section className="bg-white pt-24 md:pt-32">
        <div className="container mx-auto px-6 md:px-8">
          <p className="max-w-[960px] text-[1.5rem] font-medium leading-[1.3] tracking-[-0.02em] text-navy md:text-[1.75rem] lg:text-[2rem]">
            Market dashboard, investor guides, and research drawn from live mandate activity across equity, debt, and
            M&amp;A. Written for founders, boards, and institutional investors who need usable framing, not headline
            recycling.
          </p>
          <p className="mt-6 text-[13px] font-medium text-gray-500">For institutional and professional use only.</p>
        </div>
      </section>

      {featuredReport && <FeaturedReportSection report={featuredReport} />}

      {featuredGuide && <FeaturedGuideSection guide={featuredGuide} />}

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <CapitalMarketsDashboard />
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            align="center"
            pill="Investor Guides"
            title="How institutional capital works."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {guides.map((guide) => {
              const isFeatured = guide.slug === featuredGuideSlug;
              return (
                <Link
                  key={guide.slug}
                  href={`/insights/guides/${guide.slug}`}
                  className="group flex h-full flex-col bg-white p-8"
                >
                  <div className="mb-10 flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#f0f0f0] text-navy">
                      <GuideIcon id={guide.icon} className="h-5 w-5" />
                    </span>
                    {isFeatured && (
                      <span className="inline-flex items-center gap-2 bg-[#f0f0f0] px-3 py-1 text-[12px] font-medium text-navy">
                        <span className="h-1.5 w-1.5 bg-[#BF9B5F]" aria-hidden />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy group-hover:underline md:text-[22px]">
                    {guide.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{guide.excerpt}</p>
                  <p className="mt-auto pt-8 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
                    {guide.readTime}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Market Insights"
            title="Perspectives from our team."
            description="Perspectives on markets, sectors, and capital formation from our team."
          />
          <NewsListing items={marketInsights} />
          <div className="mt-14 text-center">
            <Link href="/news" className={outlineButton}>
              All news <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Research"
            title="Reports and primers."
            description="Downloadable reports on markets, sectors, and capital formation."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/${report.slug}`}
                className="group flex h-full flex-col bg-white p-8"
              >
                <ReportMeta
                  type={report.type}
                  sector={report.sector}
                  date={report.date}
                  pages={report.pages}
                  className="mb-8"
                />
                <h3 className="font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy group-hover:underline md:text-[22px]">
                  {report.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{report.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/reports" className={outlineButton}>
              All reports <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <HomeCta tone="white" />
    </>
  );
}

import Link from 'next/link';
import CapitalMarketsDashboard from '../components/CapitalMarketsDashboard';
import FeaturedGuideSection from '../components/FeaturedGuideSection';
import { GuideIcon } from '../components/GuideIcons';
import Hero from '../components/Hero';
import NewsCardImage from '../components/NewsCardImage';
import NewsMeta from '../components/NewsMeta';
import ReportMeta from '../components/ReportMeta';
import { investorGuides } from '../data/investor-guides';
import { newsItems } from '../data/news';
import { reports } from '../data/reports';
import { IMAGE_SIZES, unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'Insights | Keningford Partners',
  description:
    'Capital markets dashboard, investor guides, market perspectives, and downloadable research from Keningford Partners.',
};

const featuredGuideSlug = '14-week-growth-round-equity-process-map';

export default function InsightsPage() {
  const featuredGuide = investorGuides.find((guide) => guide.slug === featuredGuideSlug);
  const otherGuides = investorGuides.filter((guide) => guide.slug !== featuredGuideSlug);
  const marketInsights = newsItems.filter((item) => item.category === 'Market Insights').slice(0, 6);

  return (
    <>
      <Hero
        eyebrow="Insights"
        title="Capital intelligence for decision-makers."
        subtitle="Market dashboard, investor guides, perspectives, and research — structured for founders, boards, and institutional investors."
        imageUrl={unsplashSrc('photo-1504711434969-e33886168f5c')}
        imageAlt="Market analysis and financial insights"
      />

      <section className="border-b border-gray-100 bg-white py-10 md:py-12">
        <div className="container mx-auto px-6 md:px-8">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-gray-600 md:text-base">
            Keningford Partners regularly publishes strategic insights on how growth-stage companies
            access institutional capital and execute transactions. Our research is sector-agnostic by
            design: it reflects mandate activity across equity, debt, and M&A rather than a single
            vertical headline cycle. Each report and guide examines a specific corner of the
            growth-stage capital markets and is written to be useful to founders, boards, investors,
            and the advisers who sit alongside them.
          </p>
        </div>
      </section>

      {featuredGuide && <FeaturedGuideSection guide={featuredGuide} />}

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <CapitalMarketsDashboard />
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-8">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
              Investor Guides
            </p>
            <h2 className="text-2xl font-semibold text-navy">How institutional capital works</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featuredGuide && (
              <Link
                href={`/insights/guides/${featuredGuide.slug}`}
                className="group relative border border-[#BF9B5F]/50 bg-white p-6 transition-colors hover:border-[#BF9B5F]"
              >
                <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#BF9B5F]">
                  Featured
                </span>
                <span className="mb-4 flex h-9 w-9 items-center justify-center bg-navy/5 text-navy">
                  <GuideIcon id={featuredGuide.icon} className="h-5 w-5" />
                </span>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
                  {featuredGuide.readTime}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-navy group-hover:underline">
                  {featuredGuide.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{featuredGuide.excerpt}</p>
              </Link>
            )}
            {otherGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/insights/guides/${guide.slug}`}
                className="group border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300"
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center bg-navy/5 text-navy">
                  <GuideIcon id={guide.icon} className="h-5 w-5" />
                </span>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
                  {guide.readTime}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-navy group-hover:underline">
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Market Insights
              </p>
              <h2 className="text-2xl font-semibold text-navy">Perspectives from our team</h2>
            </div>
            <Link href="/news" className="text-sm font-medium text-navy hover:underline">
              All news →
            </Link>
          </div>
          <div className="space-y-10">
            {marketInsights.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="group grid grid-cols-1 gap-6 border-b border-gray-200 pb-10 last:border-b-0 last:pb-0 md:grid-cols-5"
              >
                <div className="md:col-span-2">
                  <NewsCardImage src={item.imageUrl} alt={item.imageAlt} sizes={IMAGE_SIZES.newsList} />
                </div>
                <div className="md:col-span-3">
                  <NewsMeta category={item.category} date={item.date} className="mb-3" />
                  <h3 className="mb-3 text-2xl font-semibold text-navy group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Research
              </p>
              <h2 className="text-2xl font-semibold text-navy">Reports & primers</h2>
            </div>
            <Link href="/reports" className="text-sm font-medium text-navy hover:underline">
              All reports →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/${report.slug}`}
                className="group border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300"
              >
                <ReportMeta
                  type={report.type}
                  sector={report.sector}
                  date={report.date}
                  pages={report.pages}
                  className="mb-3"
                />
                <h3 className="mb-2 text-lg font-semibold text-navy group-hover:underline">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-600">{report.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

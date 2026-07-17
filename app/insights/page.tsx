import Link from 'next/link';
import Hero from '../components/Hero';
import CapitalMarketsDashboard from '../components/CapitalMarketsDashboard';
import { GuideIcon } from '../components/GuideIcons';
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
    'Capital markets dashboard, investor guides, market perspectives, and research from Keningford Partners.',
};

const featuredGuideSlug = '14-week-growth-round-equity-process-map';

export default function InsightsPage() {
  const featuredGuide = investorGuides.find((guide) => guide.slug === featuredGuideSlug);
  const otherGuides = investorGuides.filter((guide) => guide.slug !== featuredGuideSlug);
  const marketInsights = newsItems.filter((item) => item.category === 'Market Insights').slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Insights"
        title="Capital intelligence for decision-makers."
        subtitle="Market dashboard, investor guides, perspectives, and research, structured for founders, boards, and institutional investors."
        imageUrl={unsplashSrc('photo-1504711434969-e33886168f5c')}
        imageAlt="Market analysis and financial insights"
      />

      {featuredGuide && (
        <section className="border-b border-[#BF9B5F]/20 bg-[#f7f2e9] py-14 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8823f]">
                  Featured Booklet · Free Download
                </p>
                <h2 className="font-serif text-2xl leading-snug text-navy md:text-[2rem]">
                  {featuredGuide.title}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  {featuredGuide.excerpt}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {featuredGuide.takeaways.slice(0, 3).map((takeaway) => (
                    <li key={takeaway} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                      <span aria-hidden className="mt-[8px] h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`/insights/guides/${featuredGuide.slug}#booklet`}
                    className="inline-flex items-center justify-center gap-2 bg-navy px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-navy-dark"
                  >
                    Read the booklet →
                  </Link>
                  <Link
                    href={`/insights/guides/${featuredGuide.slug}`}
                    className="inline-flex items-center justify-center border border-navy/30 px-6 py-3 text-[13px] font-medium text-navy transition hover:bg-navy/5"
                  >
                    View the guide
                  </Link>
                </div>
              </div>

              {/* Booklet cover mockup */}
              <div className="relative mx-auto w-full max-w-sm" aria-hidden>
                <div className="absolute -right-3 top-5 bottom-1 w-full border border-navy/10 bg-navy/5" />
                <div className="absolute -right-1.5 top-2.5 bottom-0.5 w-full border border-navy/10 bg-navy/10" />
                <div className="relative border border-[#c4a062]/30 bg-[#0e1c38] px-9 py-11 shadow-2xl shadow-navy/25">
                  <p className="mb-9 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c4a062]">
                    Keningford Partners Research
                  </p>
                  <span className="mb-7 flex h-12 w-12 items-center justify-center border border-[#c4a062]/50 bg-[#c4a062]/10 text-[#c4a062]">
                    <GuideIcon id={featuredGuide.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-xl leading-snug text-white">{featuredGuide.title}</p>
                  <div className="mt-7 h-px w-14 bg-[#c4a062]/50" />
                  <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                    {featuredGuide.readTime} · PDF Booklet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

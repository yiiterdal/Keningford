import Image from 'next/image';
import Link from 'next/link';
import CapitalMarketsDashboard from '../components/CapitalMarketsDashboard';
import FeaturedGuideSection from '../components/FeaturedGuideSection';
import { GuideIcon } from '../components/GuideIcons';
import Hero from '../components/Hero';
import NewsListing from '../components/NewsListing';
import ReportMeta from '../components/ReportMeta';
import { investorGuides } from '../data/investor-guides';
import { newsItems } from '../data/news';
import { reports } from '../data/reports';
import { strategyReports } from '../data/strategy-reports';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'Insights | Keningford Partners',
  description:
    'Capital markets dashboard, investor guides, market perspectives, and downloadable research from Keningford Partners.',
};

const featuredGuideSlug = 'the-confidence-gap-middle-market-ma-q2-2026';

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

      <section id="strategy-reports" className="scroll-mt-28 border-t border-gray-100 bg-[#0b1426] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col lg:col-span-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Strategy Reports
              </p>
              <h2 className="font-serif text-2xl text-white md:text-3xl">
                Deal-origination briefings by vertical
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 md:text-[15px]">
                Interactive coverage notes for sponsors and corporate development — thesis, sub-verticals,
                and process implications in one place.
              </p>

              <div className="mt-8 flex flex-1 flex-col gap-4">
                {strategyReports.map((report) => (
                  <Link
                    key={report.slug}
                    href={`/insights/strategy/${report.slug}`}
                    className="group flex flex-1 flex-col border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#BF9B5F]/50 hover:bg-white/[0.05]"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                      {report.eyebrow}
                    </p>
                    <h3 className="mt-4 font-serif text-xl leading-snug text-white md:text-2xl">
                      {report.titleLead}{' '}
                      <span className="text-[#BF9B5F]">{report.titleAccent}</span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{report.excerpt}</p>
                    <p className="mt-auto pt-6 text-sm font-medium text-white/80 group-hover:text-[#BF9B5F]">
                      Open interactive report →
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={`/insights/strategy/${strategyReports[0].slug}`}
              className="group relative min-h-[280px] overflow-hidden lg:col-span-6 lg:min-h-full"
              aria-label={`Open ${strategyReports[0].titleLead} ${strategyReports[0].titleAccent}`}
            >
              <Image
                src={strategyReports[0].heroImageUrl}
                alt={strategyReports[0].heroImageAlt}
                fill
                unoptimized
                className="object-cover object-[center_40%] transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1426]/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                  Featured vertical
                </p>
                <p className="mt-2 font-serif text-xl text-white md:text-2xl">
                  {strategyReports[0].titleLead}{' '}
                  <span className="text-[#BF9B5F]">{strategyReports[0].titleAccent}</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <CapitalMarketsDashboard />
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Investor Guides
              </p>
              <h2 className="font-serif text-2xl text-navy md:text-3xl">
                How institutional capital works
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 md:text-right">
              Briefings for founders and boards on how capital is raised, evaluated, and closed.
            </p>
          </div>

          {featuredGuide && (
            <Link
              href={`/insights/guides/${featuredGuide.slug}`}
              className="group mb-5 grid grid-cols-1 border border-[#BF9B5F]/50 bg-white transition-colors hover:border-[#BF9B5F] md:grid-cols-12 md:gap-8"
            >
              <div className="flex flex-col justify-center p-6 md:col-span-7 md:p-8 lg:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-navy/5 text-navy">
                    <GuideIcon id={featuredGuide.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#BF9B5F]">
                    Featured
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
                    {featuredGuide.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-xl leading-snug text-navy group-hover:underline md:text-2xl lg:text-[1.75rem]">
                  {featuredGuide.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-[15px]">
                  {featuredGuide.excerpt}
                </p>
              </div>
              <div className="flex items-end border-t border-[#BF9B5F]/20 bg-[#0e1c38]/[0.03] p-6 md:col-span-5 md:border-l md:border-t-0 md:p-8 lg:p-10">
                <p className="text-sm font-medium text-navy">
                  Read the paper
                  <span className="ml-2 inline-block transition group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </p>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {otherGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/insights/guides/${guide.slug}`}
                className="group flex flex-col border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300 md:p-7"
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center bg-navy/5 text-navy">
                  <GuideIcon id={guide.icon} className="h-5 w-5" />
                </span>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
                  {guide.readTime}
                </p>
                <h3 className="mb-2 font-serif text-lg leading-snug text-navy group-hover:underline md:text-xl">
                  {guide.title}
                </h3>
                <p className="mt-auto pt-1 text-sm leading-relaxed text-gray-600">{guide.excerpt}</p>
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
          <NewsListing items={marketInsights} />
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

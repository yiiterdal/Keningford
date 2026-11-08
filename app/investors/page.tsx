import Link from 'next/link';
import Hero from '../components/Hero';
import HomeSectionHeader from '../components/HomeSectionHeader';
import ImageBand from '../components/ImageBand';
import TransactionCard from '../components/TransactionCard';
import NewsMeta from '../components/NewsMeta';
import ReportMeta from '../components/ReportMeta';
import { investorPageSections } from '../data/investors';
import { recentMandates } from '../data/mandates';
import { newsItems } from '../data/news';
import { reports } from '../data/reports';
import { transactions } from '../data/transactions';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'For Investors | Keningford Partners',
  description:
    'Active mandates, featured transactions, market insights, and research for institutional investors.',
};

const textLink =
  'inline-flex items-center gap-2 border border-navy/15 bg-white px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/30';

export default function InvestorsPage() {
  const marketInsights = newsItems.filter((item) => item.category === 'Market Insights').slice(0, 3);
  const featuredTransactions = transactions.slice(0, 6);

  return (
    <>
      <Hero
        eyebrow="For Investors"
        title="Institutional access to our deal flow."
        subtitle="Not a portal, a direct line to senior bankers on active mandates, market perspectives, and research."
        imageUrl={unsplashSrc('photo-1556761175-5973dc0f32e7')}
        imageAlt="Institutional investors in discussion"
      />

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Active Mandates"
            title="Current mandates."
            description={investorPageSections.activeMandatesIntro}
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {recentMandates.map((mandate) => (
              <article key={mandate.client} className="flex h-full flex-col bg-white p-8">
                <span className="inline-flex w-fit items-center gap-2 bg-[#f0f0f0] px-3 py-1 text-[12px] font-medium text-navy">
                  <span className="h-1.5 w-1.5 bg-[#BF9B5F]" aria-hidden />
                  {mandate.status}
                </span>
                <h3 className="mt-10 font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy md:text-[22px]">
                  {mandate.client}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-gray-500">{mandate.type}</p>
                <p className="mt-4 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{mandate.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Featured Transactions"
            title="Representative engagements."
            description={investorPageSections.featuredTransactionsIntro}
          />
          <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTransactions.map((transaction, index) => (
              <TransactionCard key={`${transaction.description}-${index}`} transaction={transaction} compact />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/transactions" className={textLink}>
              View all transactions <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Market Insights"
            title="Perspectives from our team."
            description={investorPageSections.marketInsightsIntro}
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {marketInsights.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="group flex h-full flex-col bg-white p-8"
              >
                <NewsMeta category={item.category} date={item.date} className="mb-6" />
                <h3 className="font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy group-hover:underline md:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">
                  {item.excerpt}
                </p>
                <span className="mt-auto pt-6 text-[13px] font-medium text-navy">Read more →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/insights" className={textLink}>
              View insights hub <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader pill="Research" title="Reports and research." description={investorPageSections.researchIntro} />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/${report.slug}`}
                className="group flex h-full flex-col bg-[#f0f0f0] p-8"
              >
                <ReportMeta
                  type={report.type}
                  sector={report.sector}
                  date={report.date}
                  pages={report.pages}
                  className="mb-6"
                />
                <h3 className="font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy group-hover:underline md:text-[22px]">
                  {report.title}
                </h3>
                <span className="mt-auto pt-6 text-[13px] font-medium text-navy">View report →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/bands/executive-view-v2.jpg"
        imageAlt="Executive looking out over the city from a high-rise window"
        imagePosition="65% center"
        pill="For Investors"
        title="Connect with our team."
        description="Mandate details are shared confidentially with qualified institutional investors."
        primaryCta={{ label: 'Connect with our team →', href: '/contact?tab=investors' }}
        secondaryCta={{ label: 'View transactions', href: '/transactions' }}
      />
    </>
  );
}

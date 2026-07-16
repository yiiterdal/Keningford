import Link from 'next/link';
import Hero from '../components/Hero';
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

export default function InvestorsPage() {
  const marketInsights = newsItems.filter((item) => item.category === 'Market Insights').slice(0, 3);
  const featuredTransactions = transactions.slice(0, 6);

  return (
    <>
      <Hero
        eyebrow="For Investors"
        title="Institutional access to our deal flow."
        subtitle="Not a portal — a direct line to senior bankers on active mandates, market perspectives, and research."
        imageUrl={unsplashSrc('photo-1556761175-5973dc0f32e7')}
        imageAlt="Institutional investors in discussion"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto space-y-16 px-6 md:px-8">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-navy">Active mandates</h2>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-600">
              {investorPageSections.activeMandatesIntro}
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {recentMandates.map((mandate) => (
                <article key={mandate.client} className="border border-gray-200 p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#BF9B5F]">
                    {mandate.status}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{mandate.client}</h3>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-gray-500">
                    {mandate.type}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{mandate.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-navy">Featured transactions</h2>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-600">
              {investorPageSections.featuredTransactionsIntro}
            </p>
            <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTransactions.map((transaction, index) => (
                <TransactionCard key={`${transaction.description}-${index}`} transaction={transaction} compact />
              ))}
            </div>
            <Link href="/transactions" className="mt-6 inline-block text-sm font-medium text-navy hover:underline">
              View all transactions →
            </Link>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-navy">Market insights</h2>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-600">
              {investorPageSections.marketInsightsIntro}
            </p>
            <div className="space-y-6">
              {marketInsights.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="block border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <NewsMeta category={item.category} date={item.date} className="mb-2" />
                  <h3 className="text-lg font-semibold text-navy hover:underline">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.excerpt}</p>
                </Link>
              ))}
            </div>
            <Link href="/insights" className="mt-6 inline-block text-sm font-medium text-navy hover:underline">
              View insights hub →
            </Link>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-navy">Research</h2>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-600">
              {investorPageSections.researchIntro}
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {reports.map((report) => (
                <Link
                  key={report.slug}
                  href={`/reports/${report.slug}`}
                  className="border border-gray-200 p-5 transition-colors hover:border-gray-300"
                >
                  <ReportMeta
                    type={report.type}
                    sector={report.sector}
                    date={report.date}
                    pages={report.pages}
                    className="mb-3"
                  />
                  <h3 className="font-semibold text-navy hover:underline">{report.title}</h3>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <Link
              href="/contact?tab=investors"
              className="inline-flex border border-navy px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
            >
              Connect with our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

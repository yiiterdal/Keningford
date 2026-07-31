import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import StrategyReportView from '../../../components/StrategyReportView';
import {
  getStrategyReportBySlug,
  strategyReports,
} from '../../../data/strategy-reports';

interface StrategyReportPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return strategyReports.map((report) => ({ slug: report.slug }));
}

export function generateMetadata({ params }: StrategyReportPageProps): Metadata {
  const report = getStrategyReportBySlug(params.slug);
  if (!report) return { title: 'Strategy Report Not Found' };
  return {
    title: `${report.titleLead} ${report.titleAccent} | Strategy Report`,
    description: report.excerpt,
  };
}

export default function StrategyReportPage({ params }: StrategyReportPageProps) {
  const report = getStrategyReportBySlug(params.slug);
  if (!report) notFound();

  return (
    <>
      <StrategyReportView report={report} />

      <section className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-4 px-5 sm:px-8 lg:px-10 xl:px-12">
          <Link href="/insights" className="text-sm font-medium text-navy hover:underline">
            ← Back to Insights
          </Link>
          <Link
            href="/industries"
            className="text-sm font-medium text-gray-600 hover:text-navy hover:underline"
          >
            Explore industry coverage →
          </Link>
        </div>
      </section>
    </>
  );
}

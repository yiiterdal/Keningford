import Link from 'next/link';
import ReportDownloadButton from './ReportDownloadButton';
import type { ReportItem } from '../data/reports';

interface FeaturedReportSectionProps {
  report: ReportItem;
}

const keyFigures = [
  { value: '$229.2B', label: 'US PE exit value in Q4 2025' },
  { value: '$1.1T+', label: 'US PE dry powder entering Q4 2026' },
  { value: 'Nov 15', label: 'Last practical date to sign for a 2026 close' },
];

export default function FeaturedReportSection({ report }: FeaturedReportSectionProps) {
  const reportHref = `/reports/${report.slug}`;

  return (
    <section className="border-b border-gray-100 bg-white py-14 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative grid grid-cols-1 gap-10 border border-gray-200 px-6 py-10 md:px-10 lg:grid-cols-12 lg:gap-14">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-[#BF9B5F]" aria-hidden />

          <div className="lg:col-span-7">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
              Featured Research · {report.type}
            </p>
            <h2 className="font-serif text-2xl leading-snug text-navy md:text-[1.9rem]">
              <Link href={reportHref} className="hover:underline">
                {report.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600">{report.excerpt}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
              <Link
                href={report.readerPages ? `${reportHref}#read` : reportHref}
                className="inline-flex items-center justify-center border border-gray-300 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-gray-50"
              >
                {report.readerPages ? 'Read online' : 'Read the summary'}
              </Link>
            </div>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">
              {report.date} · {report.pages}-page PDF
            </p>
          </div>

          <dl className="grid grid-cols-1 content-center gap-6 border-t border-gray-100 pt-8 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {keyFigures.map((figure) => (
              <div key={figure.label}>
                <dt className="font-serif text-3xl text-navy">{figure.value}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.12em] text-gray-500">{figure.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

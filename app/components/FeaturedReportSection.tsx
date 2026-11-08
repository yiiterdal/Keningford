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
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="bg-[#f0f0f0] p-8 md:p-12 lg:col-span-8">
            <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
              Featured Research · {report.type}
            </p>
            <h2 className="max-w-[640px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem]">
              <Link href={reportHref} className="hover:underline">
                {report.title}
              </Link>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-[1.5] tracking-[-0.01em] text-gray-500">{report.excerpt}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
              <Link
                href={report.readerPages ? `${reportHref}#read` : reportHref}
                className="inline-flex items-center justify-center border border-navy/15 bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-navy/30"
              >
                {report.readerPages ? 'Read online' : 'Read the summary'}
              </Link>
            </div>
            <p className="mt-6 text-[13px] font-medium text-gray-500">
              {report.date} · {report.pages}-page PDF
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
            {keyFigures.map((figure) => (
              <div key={figure.label} className="flex flex-col justify-between bg-[#0f141c] p-8">
                <dt className="font-sans text-[2.5rem] font-medium leading-none tracking-[-0.03em] text-white">
                  {figure.value}
                </dt>
                <dd className="mt-4 text-[15px] leading-[1.4] tracking-[-0.01em] text-white/60">{figure.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

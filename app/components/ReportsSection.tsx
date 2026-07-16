import Link from 'next/link';
import { getLatestReports } from '../data/reports';
import NewsCardImage from './NewsCardImage';
import ReportDownloadButton from './ReportDownloadButton';
import ReportMeta from './ReportMeta';

export default function ReportsSection() {
  const latestReports = getLatestReports(3);

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-navy md:text-4xl">Research Reports</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Periodic outlooks and sector primers on capital markets, transactions, and financing
              trends from Keningford Partners.
            </p>
          </div>
          <Link href="/reports" className="shrink-0 text-sm font-medium text-navy hover:underline">
            View all reports →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {latestReports.map((report, index) => (
            <article key={report.slug} className="flex h-full flex-col border border-gray-200 bg-white">
              <Link
                href={`/reports/${report.slug}`}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                <NewsCardImage
                  src={report.imageUrl}
                  alt={report.imageAlt}
                  priority={index === 0}
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <ReportMeta
                  type={report.type}
                  sector={report.sector}
                  date={report.date}
                  pages={report.pages}
                  className="mb-3"
                />
                <Link href={`/reports/${report.slug}`} className="group">
                  <h3 className="mb-3 text-lg font-semibold leading-snug text-navy decoration-navy/40 underline-offset-[5px] group-hover:underline">
                    {report.title}
                  </h3>
                </Link>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">{report.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
                  <Link
                    href={`/reports/${report.slug}`}
                    className="text-sm font-medium text-navy hover:underline"
                  >
                    Read summary
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

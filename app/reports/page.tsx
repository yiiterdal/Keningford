import Link from 'next/link';
import Hero from '../components/Hero';
import NewsCardImage from '../components/NewsCardImage';
import ReportDownloadButton from '../components/ReportDownloadButton';
import ReportMeta from '../components/ReportMeta';
import { IMAGE_SIZES, unsplashSrc } from '../lib/image-utils';
import { reports } from '../data/reports';

export const metadata = {
  title: 'Research Reports | Keningford Partners',
  description:
    'Downloadable market outlooks, sector primers, and capital markets reviews from Keningford Partners.',
};

export default function ReportsPage() {
  return (
    <>
      <Hero
        eyebrow="Research Reports"
        title="Perspectives you can take into the room."
        subtitle="Periodic PDF reports on markets, sectors, and capital formation, structured for boards, sponsors, and institutional investors."
        imageUrl={unsplashSrc('photo-1454165804606-c3d57bc86b40')}
        imageAlt="Business professional reviewing research documents"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-5xl space-y-12 md:space-y-14">
            {reports.map((report) => (
              <article
                key={report.slug}
                className="grid grid-cols-1 gap-8 border-b border-gray-200 pb-14 pt-2 last:border-b-0 md:grid-cols-5 md:pb-16"
              >
                <Link
                  href={`/reports/${report.slug}`}
                  className="group md:col-span-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  <NewsCardImage
                    src={report.imageUrl}
                    alt={report.imageAlt}
                    sizes={IMAGE_SIZES.newsList}
                  />
                </Link>
                <div className="flex flex-col justify-center md:col-span-3">
                  <ReportMeta
                    type={report.type}
                    sector={report.sector}
                    date={report.date}
                    pages={report.pages}
                    className="mb-3"
                  />
                  <Link href={`/reports/${report.slug}`} className="group">
                    <h2 className="mb-4 text-2xl font-semibold text-navy decoration-navy/40 underline-offset-[5px] group-hover:underline md:text-3xl">
                      {report.title}
                    </h2>
                  </Link>
                  <p className="mb-6 leading-relaxed text-gray-600">{report.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
                    <Link
                      href={`/reports/${report.slug}`}
                      className="text-sm font-medium text-navy hover:underline"
                    >
                      Read summary →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-xs leading-relaxed text-gray-500">
            Reports are published for general information only and do not constitute investment,
            legal, or tax advice, or an offer of services. For questions on our capabilities, please{' '}
            <Link href="/contact" className="text-navy hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

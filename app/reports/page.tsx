import Link from 'next/link';
import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import HomeSectionHeader from '../components/HomeSectionHeader';
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
        subtitle="Periodic PDF reports on markets, sectors, and capital formation - structured for boards, sponsors, and institutional investors."
        imageUrl={unsplashSrc('photo-1454165804606-c3d57bc86b40')}
        imageAlt="Business professional reviewing research documents"
      />

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Research"
            title="The latest edition of each report."
            description="Each report examines a specific segment of the growth-stage capital markets. Our team updates facts, data, and transaction observations as conditions move. For institutional and professional use only."
          />

          <div className="space-y-3">
            {reports.map((report) => (
              <article
                key={report.slug}
                className="grid grid-cols-1 gap-8 bg-white p-6 md:grid-cols-12 md:gap-10 md:p-8"
              >
                <Link
                  href={`/reports/${report.slug}`}
                  className="group md:col-span-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  <NewsCardImage src={report.imageUrl} alt={report.imageAlt} sizes={IMAGE_SIZES.newsList} />
                </Link>
                <div className="flex flex-col justify-center md:col-span-7">
                  <ReportMeta
                    type={report.type}
                    sector={report.sector}
                    date={report.date}
                    pages={report.pages}
                    className="mb-5"
                  />
                  <Link href={`/reports/${report.slug}`} className="group">
                    <h2 className="font-sans text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-navy decoration-navy/40 underline-offset-[5px] group-hover:underline md:text-[2.25rem]">
                      {report.title}
                    </h2>
                  </Link>
                  <p className="mt-4 text-base leading-[1.5] tracking-[-0.01em] text-gray-500">{report.excerpt}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
                    <Link
                      href={`/reports/${report.slug}`}
                      className="inline-flex items-center border border-navy/15 bg-white px-6 py-3 text-sm font-medium text-navy transition hover:border-navy/30"
                    >
                      Read summary →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-gray-500">
            Reports are published for general information only and do not constitute investment,
            legal, or tax advice, or an offer of services. For questions on our capabilities, please{' '}
            <Link href="/contact" className="text-navy hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>
      </section>

      <HomeCta tone="white" />
    </>
  );
}

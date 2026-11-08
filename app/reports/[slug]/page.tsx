import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import HomeCta from '../../components/HomeCta';
import NewsCardImage, { ARTICLE_SIZES } from '../../components/NewsCardImage';
import ReportDownloadButton from '../../components/ReportDownloadButton';
import ReportMeta from '../../components/ReportMeta';
import ReportReader from '../../components/ReportReader';
import { getReportBySlug, reports } from '../../data/reports';
import type { Metadata } from 'next';

interface ReportPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return reports.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: ReportPageProps): Metadata {
  const report = getReportBySlug(params.slug);
  if (!report) return { title: 'Report Not Found' };

  return {
    title: report.title,
    description: report.excerpt,
    openGraph: {
      type: 'article',
      title: report.title,
      description: report.excerpt,
      images: [report.imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: report.title,
      description: report.excerpt,
      images: [report.imageUrl],
    },
  };
}

export default function ReportPage({ params }: ReportPageProps) {
  const report = getReportBySlug(params.slug);
  if (!report) notFound();

  const blocks = report.summary.split('\n\n').filter(Boolean);

  return (
    <>
      <section className="bg-white pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Reports', href: '/reports' },
                { label: report.title },
              ]}
            />

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
                Research
              </span>
              <ReportMeta
                type={report.type}
                sector={report.sector}
                date={report.date}
                pages={report.pages}
              />
            </div>

            <h1 className="font-sans text-[2.25rem] font-medium leading-[1.08] tracking-[-0.03em] text-navy md:text-[3rem] lg:text-[3.5rem]">
              {report.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-[1.5] tracking-[-0.01em] text-gray-500">{report.excerpt}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {report.readerPages && (
                <a
                  href="#read"
                  className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
                >
                  Read online
                </a>
              )}
              <ReportDownloadButton
                pdfUrl={report.pdfUrl}
                title={report.title}
                variant={report.readerPages ? 'secondary' : 'primary'}
              />
              <p className="text-[13px] font-medium text-gray-500">
                {report.pages}-page PDF · {report.type}
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-6xl md:mt-16">
            <NewsCardImage
              src={report.imageUrl}
              alt={report.imageAlt}
              priority
              sizes={ARTICLE_SIZES}
              aspectClassName="aspect-[16/9] md:aspect-[21/9]"
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl md:mt-16">
            {blocks.map((block, index) => {
              if (block.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="mb-5 mt-14 font-sans text-[1.625rem] font-medium leading-[1.15] tracking-[-0.02em] text-navy first:mt-0 md:text-[2rem]"
                  >
                    {block.slice(3)}
                  </h2>
                );
              }

              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((line) => line.startsWith('- '));
                return (
                  <ul key={index} className="mb-6 space-y-3">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3 text-lg leading-[1.7] text-gray-700">
                        <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
                        <span>{item.slice(2)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={index} className="mb-6 text-lg leading-[1.85] text-gray-700">
                  {block}
                </p>
              );
            })}

            {report.readerPages && (
              <div id="read" className="mt-14 scroll-mt-28">
                <h2 className="mb-6 font-sans text-[1.625rem] font-medium leading-[1.15] tracking-[-0.02em] text-navy md:text-[2rem]">
                  Read the full paper
                </h2>
                <ReportReader title={report.title} pdfUrl={report.pdfUrl} pageCount={report.readerPages} />
              </div>
            )}

            <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-8">
              <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
              <Link
                href="/reports"
                className="inline-flex items-center border border-navy/15 px-6 py-3 text-sm font-medium text-navy transition hover:border-navy/30"
              >
                ← Back to Reports
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  );
}

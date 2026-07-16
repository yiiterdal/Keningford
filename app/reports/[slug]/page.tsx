import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import NewsCardImage, { ARTICLE_SIZES } from '../../components/NewsCardImage';
import ReportDownloadButton from '../../components/ReportDownloadButton';
import ReportMeta from '../../components/ReportMeta';
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
    <section className="bg-white pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Reports', href: '/reports' },
              { label: report.title },
            ]}
          />

          <ReportMeta
            type={report.type}
            sector={report.sector}
            date={report.date}
            pages={report.pages}
            className="mb-6"
          />

          <h1 className="mb-6 text-3xl font-semibold leading-tight text-navy md:text-4xl">
            {report.title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-gray-600">{report.excerpt}</p>

          <div className="mb-10 flex flex-wrap items-center gap-4 border border-gray-200 bg-gray-50 px-6 py-5">
            <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
            <p className="text-sm text-gray-600">
              {report.pages}-page PDF · {report.type}
            </p>
          </div>

          <NewsCardImage
            src={report.imageUrl}
            alt={report.imageAlt}
            priority
            sizes={ARTICLE_SIZES}
            aspectClassName="aspect-[21/9]"
            className="mb-8"
          />

          <div className="prose max-w-none">
            {blocks.map((block, index) => {
              if (block.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="mb-4 mt-10 text-2xl font-semibold text-navy first:mt-0"
                  >
                    {block.slice(3)}
                  </h2>
                );
              }

              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((line) => line.startsWith('- '));
                return (
                  <ul key={index} className="mb-6 list-disc space-y-2 pl-5 text-lg leading-relaxed text-gray-700">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.slice(2)}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="mt-10 border-t border-gray-200 pt-8">
            <ReportDownloadButton pdfUrl={report.pdfUrl} title={report.title} />
          </div>

          <Link href="/reports" className="mt-8 inline-block text-sm font-medium text-navy hover:underline">
            ← Back to Reports
          </Link>
        </div>
      </div>
    </section>
  );
}

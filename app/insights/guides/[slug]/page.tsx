import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/Breadcrumbs';
import GuideBooklet from '../../../components/GuideBooklet';
import { GuideIcon } from '../../../components/GuideIcons';
import JsonLd from '../../../components/JsonLd';
import { getInvestorGuideBySlug, investorGuides } from '../../../data/investor-guides';
import { getResourceBySlug } from '../../../data/resources';
import { faqPageSchema } from '../../../lib/json-ld';
import type { Metadata } from 'next';

interface GuidePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return investorGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = getInvestorGuideBySlug(params.slug);
  if (!guide) return { title: 'Guide Not Found' };
  return { title: guide.title, description: guide.excerpt };
}

export default function InvestorGuidePage({ params }: GuidePageProps) {
  const guide = getInvestorGuideBySlug(params.slug);
  if (!guide) notFound();

  const blocks = guide.content.split('\n\n').filter(Boolean);
  const downloadResource = guide.downloadResourceSlug
    ? getResourceBySlug(guide.downloadResourceSlug)
    : undefined;

  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      {guide.faq && guide.faq.length > 0 && <JsonLd data={faqPageSchema(guide.faq)} />}
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Insights', href: '/insights' },
              { label: 'Investor Guides', href: '/insights' },
              { label: guide.title },
            ]}
          />

          <div className="mb-6 mt-6 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy/5 text-navy">
              <GuideIcon id={guide.icon} className="h-5 w-5" />
            </span>
            <p className="text-xs uppercase tracking-wide text-gray-500">{guide.readTime}</p>
          </div>
          <h1 className="mb-8 text-3xl font-semibold leading-tight text-navy md:text-4xl">{guide.title}</h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-600">{guide.excerpt}</p>

          <div className="prose max-w-none">
            {blocks.map((block, index) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={index} className="mb-4 mt-10 text-2xl font-semibold text-navy first:mt-0">
                    {block.slice(3)}
                  </h2>
                );
              }
              return (
                <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
                  {block}
                </p>
              );
            })}
          </div>

          {downloadResource && (
            <div id="booklet" className="mt-14 scroll-mt-28">
              <div className="mb-6 text-center">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                  Read It As a Booklet
                </p>
                <h2 className="text-2xl font-semibold text-navy">Flip through the full guide</h2>
              </div>
              <GuideBooklet
                title={guide.title}
                readTime={guide.readTime}
                excerpt={guide.excerpt}
                content={guide.content}
                icon={guide.icon}
                resource={downloadResource}
              />
            </div>
          )}

          {guide.faq && guide.faq.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-10">
              <h2 className="mb-6 text-2xl font-semibold text-navy">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {guide.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="mb-2 text-lg font-semibold text-navy">{item.question}</h3>
                    <p className="text-base leading-relaxed text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link href="/insights" className="mt-10 inline-block text-sm font-medium text-navy hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </div>
    </section>
  );
}

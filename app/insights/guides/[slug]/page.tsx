import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/Breadcrumbs';
import GuideBooklet from '../../../components/GuideBooklet';
import GuideFaq from '../../../components/GuideFaq';
import JsonLd from '../../../components/JsonLd';
import { contactEmail } from '../../../data/contact';
import { getInvestorGuideBySlug, investorGuidePdfUrl, investorGuides } from '../../../data/investor-guides';
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
  const introBlocks: string[] = [];
  for (const block of blocks) {
    if (block.startsWith('## ')) break;
    introBlocks.push(block);
  }
  const keyFindings = guide.stats ?? guide.takeaways;
  const showRaiseReadiness = guide.slug === '14-week-growth-round-equity-process-map';
  const pdfUrl = investorGuidePdfUrl(guide.slug);
  const shell = 'mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10';

  return (
    <>
      {guide.faq && guide.faq.length > 0 && <JsonLd data={faqPageSchema(guide.faq)} />}

      {/* Article header — Yanne-style title band */}
      <section className="bg-white pt-32 md:pt-40">
        <div className={shell}>
          <Breadcrumbs
            items={[
              { label: 'Insights', href: '/insights' },
              { label: 'Investor Guides', href: '/insights' },
              { label: guide.title },
            ]}
          />
          <h1 className="mt-6 max-w-4xl font-serif text-3xl leading-tight text-navy md:text-[2.85rem] md:leading-[1.15]">
            {guide.title}
          </h1>
          <p className="mt-6 text-sm text-gray-500">
            <time>{guide.date}</time>
            <span aria-hidden className="mx-3 text-gray-300">
              |
            </span>
            <span className="font-medium text-gray-600">Keningford Partners Research</span>
          </p>
          <div aria-hidden className="mt-8 h-px w-full bg-gray-200" />
        </div>
      </section>

      {/* Intro + key findings */}
      <section className="bg-white pb-10 pt-8 md:pb-12">
        <div className={shell}>
          <div className="space-y-5">
            {introBlocks.map((block, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'max-w-4xl text-lg leading-[1.8] text-gray-800 md:text-xl md:leading-[1.75]'
                    : 'max-w-4xl text-base leading-[1.9] text-gray-700 md:text-[17px]'
                }
              >
                {block}
              </p>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 border-t border-gray-200 pt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
            {keyFindings.map((finding) => (
              <li key={finding} className="flex gap-3 text-[15px] leading-[1.8] text-gray-700 md:text-base">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden />
                <span>{finding}</span>
              </li>
            ))}
          </ul>

          {showRaiseReadiness && (
            <div className="mt-8">
              <Link
                href="/raise-readiness"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy underline-offset-2 hover:underline"
              >
                Take the raise readiness diagnostic →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Booklet / PDF stage — full-bleed for custom PDF (Yanne layout) */}
      <section id="booklet" className="scroll-mt-28 bg-white">
        {guide.customPdf ? (
          <GuideBooklet
            title={guide.title}
            readTime={guide.readTime}
            date={guide.date}
            excerpt={guide.excerpt}
            subtitle={guide.subtitle}
            docCode={guide.docCode}
            coverDate={guide.coverDate}
            content={guide.content}
            pdfUrl={pdfUrl}
            embedPdf
            pdfPageCount={guide.pdfPageCount}
            hasChartPdf
          />
        ) : (
          <div className={`${shell} pb-14 md:pb-16`}>
            <GuideBooklet
              title={guide.title}
              readTime={guide.readTime}
              date={guide.date}
              excerpt={guide.excerpt}
              subtitle={guide.subtitle}
              docCode={guide.docCode}
              coverDate={guide.coverDate}
              content={guide.content}
              pdfUrl={pdfUrl}
            />
          </div>
        )}
      </section>

      {guide.faq && guide.faq.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-14 md:py-16">
          <div className={shell}>
            <GuideFaq items={guide.faq} />
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="bg-[#0e1c38] py-16 md:py-20">
        <div className={shell}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl text-white md:text-3xl">Discuss this with our team</h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.85] text-white/65">
              {guide.slug === 'the-confidence-gap-middle-market-ma-q2-2026'
                ? 'If you are evaluating a raise, a sale, or an acquisition and want to stress-test a valuation narrative, financing structure, or AI-disruption risk position against what buyers and lenders are underwriting in H2 2026, reach out to our team.'
                : 'If you are a growth-stage CEO six to twelve months from launching a process, Keningford Partners will run a no-cost readiness review against the framework in this paper, and tell you which workstreams are ready, which need attention, and what your operational runway needs to be at launch.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {showRaiseReadiness ? (
                <>
                  <Link
                    href="/raise-readiness"
                    className="inline-flex items-center bg-white px-7 py-3.5 text-sm font-medium text-navy transition hover:bg-gray-100"
                  >
                    Take the diagnostic
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
                  >
                    Contact Us
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white px-7 py-3.5 text-sm font-medium text-navy transition hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
                  >
                    {contactEmail}
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

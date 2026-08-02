import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/Breadcrumbs';
import GuideBooklet from '../../../components/GuideBooklet';
import GuideFaq from '../../../components/GuideFaq';
import Hero from '../../../components/Hero';
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

  return (
    <>
      {guide.faq && guide.faq.length > 0 && <JsonLd data={faqPageSchema(guide.faq)} />}

      <Hero
        eyebrow={`Investor Guide · ${guide.readTime}`}
        title={guide.title}
        subtitle={guide.excerpt}
        imageUrl={guide.heroImage}
        imageAlt={guide.heroImageAlt}
        variant="large"
        layout="editorial"
        primaryCta={{ label: 'Read the booklet', href: '#booklet' }}
        secondaryCta={{ label: 'All insights', href: '/insights' }}
      />

      {/* Article chrome */}
      <section className="bg-white pt-10 md:pt-14">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: 'Insights', href: '/insights' },
                { label: 'Investor Guides', href: '/insights' },
                { label: guide.title },
              ]}
            />
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
              <time>{guide.date}</time>
              <span aria-hidden className="hidden text-gray-300 sm:inline">
                |
              </span>
              <span className="font-medium text-gray-600">Keningford Partners Research</span>
              <span aria-hidden className="hidden text-gray-300 sm:inline">
                |
              </span>
              <span>{guide.readTime}</span>
            </div>
            <div aria-hidden className="mt-8 h-px w-full bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Lead + key findings — wide layout */}
      <section className="bg-white pb-12 pt-8 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-5 lg:col-span-7">
              {introBlocks.map((block, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'text-lg leading-[1.8] text-gray-800 md:text-xl md:leading-[1.75]'
                      : 'text-base leading-[1.9] text-gray-700 md:text-[17px]'
                  }
                >
                  {block}
                </p>
              ))}
            </div>

            <aside className="lg:col-span-5">
              <div className="h-full border border-gray-200 border-t-2 border-t-[#BF9B5F] bg-gray-50 p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                  Key Findings
                </p>
                <ul className="mt-5 space-y-4">
                  {keyFindings.map((finding, index) => (
                    <li key={finding} className="flex gap-3">
                      <span className="shrink-0 font-serif text-sm leading-[1.7] text-[#BF9B5F]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm leading-[1.7] text-gray-700 md:text-[15px]">{finding}</span>
                    </li>
                  ))}
                </ul>
                {showRaiseReadiness && (
                  <div className="mt-7 border-t border-gray-200 pt-5">
                    <Link
                      href="/raise-readiness"
                      className="inline-flex items-center gap-2 text-sm font-medium text-navy underline-offset-2 hover:underline"
                    >
                      Take the raise readiness diagnostic →
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {guide.faq && guide.faq.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-14 md:py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mx-auto max-w-6xl">
              <GuideFaq items={guide.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Embedded booklet */}
      <section id="booklet" className="scroll-mt-28 border-t border-gray-100 bg-white py-14 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-9 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                The Paper
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy md:text-3xl">Read the full paper</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                Page through the document below, or download the PDF to keep and share.
              </p>
            </div>
            <GuideBooklet
              title={guide.title}
              readTime={guide.readTime}
              date={guide.date}
              excerpt={guide.excerpt}
              content={guide.content}
              pdfUrl={investorGuidePdfUrl(guide.slug)}
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#0e1c38] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a062]">
              Next Step
            </p>
            <h2 className="mt-4 font-serif text-2xl text-white md:text-3xl">
              Discuss this with our team
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.85] text-white/65">
              If you are a growth-stage CEO six to twelve months from launching a process, Keningford
              Partners will run a no-cost readiness review against the framework in this paper, and
              tell you which workstreams are ready, which need attention, and what your operational
              runway needs to be at launch.
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

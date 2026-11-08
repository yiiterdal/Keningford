import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/Breadcrumbs';
import GuideBooklet from '../../../components/GuideBooklet';
import GuideFaq from '../../../components/GuideFaq';
import Hero from '../../../components/Hero';
import HomeSectionHeader from '../../../components/HomeSectionHeader';
import ImageBand from '../../../components/ImageBand';
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
      <section className="bg-white pb-24 pt-8 md:pb-32">
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
              <div className="h-full bg-[#f0f0f0] p-8 md:p-10">
                <p className="inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
                  <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
                  Key Findings
                </p>
                <ul className="mt-6 space-y-4">
                  {keyFindings.map((finding, index) => (
                    <li key={finding} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-white text-[12px] font-medium text-navy">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="pt-0.5 text-[15px] leading-[1.6] tracking-[-0.01em] text-gray-700">{finding}</span>
                    </li>
                  ))}
                </ul>
                {showRaiseReadiness && (
                  <div className="mt-8 border-t border-navy/[0.08] pt-6">
                    <Link
                      href="/raise-readiness"
                      className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-[13px] font-medium text-white transition hover:bg-navy-dark"
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
        <section className="bg-[#f0f0f0] py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mx-auto max-w-6xl">
              <GuideFaq items={guide.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Embedded booklet */}
      <section id="booklet" className="scroll-mt-28 bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-4xl">
            <HomeSectionHeader
              align="center"
              pill="The Paper"
              title="Read the full paper."
              description="Page through the document below, or download the PDF to keep and share."
            />
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

      <ImageBand
        align="center"
        image="/images/bands/city-above-v2.jpg"
        imageAlt="City skyline with illuminated towers at night"
        pill="Next Step"
        title="Discuss this with our team."
        description="If you are a growth-stage CEO six to twelve months from launching a process, Keningford Partners will run a no-cost readiness review against the framework in this paper, and tell you which workstreams are ready, which need attention, and what your operational runway needs to be at launch."
        primaryCta={
          showRaiseReadiness
            ? { label: 'Take the diagnostic', href: '/raise-readiness' }
            : { label: 'Contact Us', href: '/contact' }
        }
        secondaryCta={
          showRaiseReadiness
            ? { label: 'Contact Us', href: '/contact' }
            : { label: contactEmail, href: `mailto:${contactEmail}`, external: true }
        }
      />
    </>
  );
}

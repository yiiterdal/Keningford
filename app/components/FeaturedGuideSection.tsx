import Image from 'next/image';
import Link from 'next/link';
import GuideFaq from './GuideFaq';
import { GuideIcon } from './GuideIcons';
import type { InvestorGuide } from '../data/investor-guides';
import {
  GUIDE_HERO_IMAGE,
  GUIDE_HERO_IMAGE_ALT,
  IMAGE_BLUR_DATA_URL,
  IMAGE_SIZES,
} from '../lib/image-utils';

interface FeaturedGuideSectionProps {
  guide: InvestorGuide;
}

export default function FeaturedGuideSection({ guide }: FeaturedGuideSectionProps) {
  const guideHref = `/insights/guides/${guide.slug}`;

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden border-b border-black md:min-h-[78vh]">
        <div className="absolute inset-0 bg-[#000a16]">
          <Image
            src={GUIDE_HERO_IMAGE}
            alt={GUIDE_HERO_IMAGE_ALT}
            fill
            quality={95}
            sizes={IMAGE_SIZES.fullBleed}
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#000a16]/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000a16]/95 via-[#000a16]/80 to-[#000a16]/55" />
        </div>

        <div className="container relative z-10 mx-auto flex min-h-[70vh] items-center px-6 py-20 md:min-h-[78vh] md:px-8 md:py-24">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Featured Booklet · Free Download
              </p>

              <h2 className="font-serif text-2xl leading-snug text-white md:text-[2rem] lg:text-[2.35rem]">
                {guide.title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-base">
                {guide.excerpt}
              </p>

              <ul className="mt-7 space-y-3">
                {guide.takeaways.slice(0, 3).map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-sm leading-relaxed text-white/75 md:text-[15px]">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BF9B5F]" />
                    {takeaway}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`${guideHref}#booklet`}
                  className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-[13px] font-semibold text-navy transition hover:bg-gray-100"
                >
                  Read the booklet →
                </Link>
                <Link
                  href={guideHref}
                  className="inline-flex items-center justify-center border border-white/35 px-6 py-3 text-[13px] font-medium text-white transition hover:border-white hover:bg-white/5"
                >
                  View the guide
                </Link>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/55">
                Six to twelve months from a growth process?{' '}
                <Link href="/raise-readiness" className="font-medium text-white underline-offset-2 hover:underline">
                  Take the raise readiness diagnostic
                </Link>{' '}
                before you read the full phase map.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
                <div
                  className="absolute -right-3 top-4 bottom-1 w-full border border-white/10 bg-black/40"
                  aria-hidden
                />
                <div className="relative border border-white/15 bg-[#000812]/90 px-8 py-10 shadow-lg shadow-black/40 backdrop-blur-sm md:px-9 md:py-11">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-[#BF9B5F]" aria-hidden />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                    Keningford Partners Research
                  </p>
                  <span className="mt-8 mb-7 inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white/80">
                    <GuideIcon id={guide.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-xl leading-snug text-white md:text-[1.3rem]">{guide.title}</p>
                  <div className="mt-7 h-px w-12 bg-white/20" aria-hidden />
                  <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                    {guide.readTime} · PDF Booklet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {guide.faq && guide.faq.length > 0 && (
        <section className="border-b border-gray-100 bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <GuideFaq items={guide.faq} limit={4} viewAllHref={`${guideHref}#faq`} />
          </div>
        </section>
      )}
    </>
  );
}

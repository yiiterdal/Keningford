import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { IMAGE_BLUR_DATA_URL, IMAGE_SIZES } from '../lib/image-utils';

interface ImageBandCta {
  label: string;
  href: string;
  external?: boolean;
}

interface ImageBandProps {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  pill?: string;
  title: ReactNode;
  description?: ReactNode;
  primaryCta?: ImageBandCta;
  secondaryCta?: ImageBandCta;
  align?: 'left' | 'center';
  /** Right-hand column on large screens (left alignment only). */
  aside?: ReactNode;
  children?: ReactNode;
  id?: string;
}

function CtaLink({ cta, primary }: { cta: ImageBandCta; primary: boolean }) {
  const className = primary
    ? 'inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-[13px] font-medium text-navy transition hover:bg-white/90'
    : 'inline-flex items-center justify-center border border-white/40 bg-white/10 px-6 py-3 text-[13px] font-medium text-white backdrop-blur-sm transition hover:bg-white/15';
  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export default function ImageBand({
  image,
  imageAlt,
  imagePosition = 'center',
  pill,
  title,
  description,
  primaryCta,
  secondaryCta,
  align = 'left',
  aside,
  children,
  id,
}: ImageBandProps) {
  const centered = align === 'center';

  const copy = (
    <>
      {pill && (
        <p className="mb-6 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white md:text-[11px]">
          <span className="h-1.5 w-1.5 shrink-0 bg-[#e8d5a8]" aria-hidden />
          {pill}
        </p>
      )}
      <h2
        className={`max-w-[680px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-white md:text-[2.5rem] lg:text-[3rem] ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <div
          className={`mt-5 max-w-[560px] space-y-4 text-base leading-[1.55] tracking-[-0.01em] text-white/70 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </div>
      )}
      {children}
      {(primaryCta || secondaryCta) && (
        <div className={`mt-10 flex flex-col gap-3 sm:flex-row ${centered ? 'justify-center' : ''}`}>
          {primaryCta && <CtaLink cta={primaryCta} primary />}
          {secondaryCta && <CtaLink cta={secondaryCta} primary={false} />}
        </div>
      )}
    </>
  );

  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#000a16]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          quality={100}
          sizes={IMAGE_SIZES.fullBleed}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        {centered ? (
          <div className="absolute inset-0 bg-[#000a16]/60" />
        ) : (
          <>
            <div className="absolute inset-0 bg-[#000a16]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000a16]/90 via-[#000a16]/60 to-[#000a16]/10" />
          </>
        )}
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[560px] items-center px-6 py-24 md:min-h-[640px] md:px-8 md:py-32">
        {centered ? (
          <div className="w-full text-center">{copy}</div>
        ) : (
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className={aside ? 'lg:col-span-7' : 'lg:col-span-8'}>{copy}</div>
            {aside && <div className="lg:col-span-5">{aside}</div>}
          </div>
        )}
      </div>
    </section>
  );
}

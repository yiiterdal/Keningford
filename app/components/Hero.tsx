'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode } from 'react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import {
  DEFAULT_HERO_IMAGE,
  DEFAULT_HERO_IMAGE_ALT,
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY,
  IMAGE_SIZES,
  isFullBleedImage,
  unsplashSrc,
} from '../lib/image-utils';

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  title: ReactNode;
  subtitle?: string;
  eyebrow?: string;
  imageUrl?: string;
  imageAlt?: string;
  variant?: 'default' | 'large';
  layout?: 'centered' | 'editorial';
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

const defaultImageUrl = unsplashSrc('photo-1449824913935-59a10b8d2000');
const defaultImageAlt = 'Modern city skyline with office buildings';

export default function Hero({
  title,
  subtitle,
  eyebrow,
  imageUrl = defaultImageUrl,
  imageAlt = defaultImageAlt,
  variant = 'default',
  layout = 'editorial',
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const isLarge = variant === 'large';
  const isEditorial = layout === 'editorial';
  const isCompactEditorial = isEditorial && !isLarge;
  const eyebrowAnimation = useFadeInAnimation({ delay: 0, duration: 700 });
  const titleAnimation = useFadeInAnimation({ delay: 150, duration: 700 });
  const subtitleAnimation = useFadeInAnimation({ delay: 400, duration: 700 });
  const ctaAnimation = useFadeInAnimation({ delay: 600, duration: 700 });

  const sectionClasses = isLarge
    ? 'relative min-h-screen overflow-hidden'
    : isCompactEditorial
      ? 'relative h-[55vh] min-h-[420px] overflow-hidden md:h-[65vh]'
      : `relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 min-h-[60vh] md:min-h-[65vh]`;

  const overlayClasses = isEditorial
    ? 'absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25'
    : 'absolute inset-0 bg-black/35';

  const imagePositionClasses = 'object-cover object-center';
  const serveUnoptimized = isFullBleedImage(imageUrl);

  const editorialContent = (
    <div
      className={
        isLarge
          ? 'container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28'
          : 'container relative z-10 mx-auto flex h-full items-center px-6 py-24 md:px-8 md:py-28'
      }
    >
      <div className="w-full max-w-xl lg:max-w-2xl">
        {eyebrow && (
          <div
            ref={eyebrowAnimation.ref}
            style={eyebrowAnimation.style}
            className="mb-6 flex items-center gap-4 md:mb-8"
          >
            <span className="h-px w-10 shrink-0 bg-[#e8d5a8] md:w-12" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8d5a8] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] md:text-xs">
              {eyebrow}
            </p>
          </div>
        )}
        <h1
          ref={titleAnimation.ref}
          style={titleAnimation.style}
          className={`font-serif font-normal leading-[1.12] tracking-[-0.01em] text-white ${
            isLarge
              ? 'text-[2.125rem] md:text-[2.75rem] lg:text-[3.375rem] lg:leading-[1.08]'
              : 'text-3xl md:text-4xl lg:text-[2.75rem]'
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subtitleAnimation.ref}
            style={subtitleAnimation.style}
            className="mt-6 max-w-lg text-[0.9375rem] leading-[1.8] text-white/85 md:mt-7 md:text-base"
          >
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div
            ref={ctaAnimation.ref}
            style={ctaAnimation.style}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 border border-white/10 bg-[#1a1a1a]/75 px-6 py-3 text-[13px] font-medium text-white transition hover:bg-[#1a1a1a]/90"
              >
                {primaryCta.label}
                <span aria-hidden className="text-sm leading-none">
                  →
                </span>
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center border border-white/55 bg-transparent px-6 py-3 text-[13px] font-medium text-white transition hover:bg-white/5"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={sectionClasses}>
      <div className="absolute inset-0 bg-[#111820]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority={isLarge}
          fetchPriority={isLarge ? 'high' : undefined}
          quality={IMAGE_QUALITY}
          sizes={IMAGE_SIZES.fullBleed}
          unoptimized={serveUnoptimized}
          placeholder={serveUnoptimized ? 'empty' : 'blur'}
          blurDataURL={serveUnoptimized ? undefined : IMAGE_BLUR_DATA_URL}
          className={imagePositionClasses}
        />
        <div className={overlayClasses} />
      </div>

      {isEditorial ? (
        editorialContent
      ) : (
        <div className="container relative z-10 mx-auto w-full px-6 py-28 md:px-8 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1
              ref={titleAnimation.ref}
              style={titleAnimation.style}
              className="mb-8 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {title}
            </h1>
            {subtitle && (
              <p
                ref={subtitleAnimation.ref}
                style={subtitleAnimation.style}
                className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/95 md:mt-8 md:text-xl lg:text-2xl"
              >
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div
                ref={ctaAnimation.ref}
                style={ctaAnimation.style}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12"
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex min-w-[200px] items-center justify-center rounded-sm bg-white px-8 py-3.5 text-sm font-semibold text-navy transition hover:bg-gray-100"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex min-w-[200px] items-center justify-center rounded-sm border border-white/80 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export { DEFAULT_HERO_IMAGE, DEFAULT_HERO_IMAGE_ALT };

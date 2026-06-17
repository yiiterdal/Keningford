'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY,
  IMAGE_SIZES,
  isFullBleedImage,
  REMOTE_EDITORIAL_WIDTH,
  unsplashSrc,
} from '../lib/image-utils';

interface EditorialImageProps {
  variant: 'architecture-1' | 'architecture-2' | 'architecture-3' | 'architecture-4' | 'architecture-5';
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Load immediately — use for the first visible editorial band on a page */
  priority?: boolean;
}

const imageMap: Record<string, { url: string; alt: string }> = {
  'architecture-1': {
    url: '/images/hero/hero.jpg',
    alt: 'Modern glass skyscrapers rising toward a cloudy sky',
  },
  'architecture-2': {
    url: unsplashSrc('photo-1497366216548-37526070297c', REMOTE_EDITORIAL_WIDTH),
    alt: 'Contemporary glass office tower architecture',
  },
  'architecture-3': {
    url: unsplashSrc('photo-1487958449943-2429e8be8625', REMOTE_EDITORIAL_WIDTH),
    alt: 'Modern corporate building with glass facade',
  },
  'architecture-4': {
    url: '/images/editorial/long-term-perspective.jpg',
    alt: 'Modern conference room with natural light and contemporary furnishings',
  },
  'architecture-5': {
    url: unsplashSrc('photo-1503387762-592deb58ef4e', REMOTE_EDITORIAL_WIDTH),
    alt: 'Contemporary corporate architecture with clean lines and glass panels',
  },
};

export default function EditorialImage({
  variant,
  title,
  eyebrow,
  description,
  className = '',
  ctaText,
  ctaHref,
  priority = false,
}: EditorialImageProps) {
  const image = imageMap[variant];
  const serveUnoptimized = isFullBleedImage(image.url);
  const eyebrowAnimation = useFadeInAnimation({ delay: 0, duration: 1000 });
  const titleAnimation = useFadeInAnimation({ delay: 200, duration: 1000 });
  const descriptionAnimation = useFadeInAnimation({ delay: 500, duration: 1000 });
  const ctaAnimation = useFadeInAnimation({ delay: 800, duration: 1000 });

  const hasContent = Boolean(title || description || eyebrow);

  return (
    <section
      className={`relative h-[65vh] w-full overflow-hidden bg-gray-200 md:h-[75vh] ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          quality={IMAGE_QUALITY}
          sizes={IMAGE_SIZES.fullBleed}
          unoptimized={serveUnoptimized}
          placeholder={serveUnoptimized ? 'empty' : 'blur'}
          blurDataURL={serveUnoptimized ? undefined : IMAGE_BLUR_DATA_URL}
          className="object-cover object-center"
        />
        {hasContent && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25" />
        )}
      </div>

      {hasContent && (
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-xl lg:max-w-2xl">
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
              {title && (
                <h2
                  ref={titleAnimation.ref}
                  style={titleAnimation.style}
                  className="font-serif text-3xl font-normal leading-[1.12] tracking-[-0.01em] text-white md:text-4xl lg:text-[2.75rem]"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  ref={descriptionAnimation.ref}
                  style={descriptionAnimation.style}
                  className="mt-6 max-w-lg text-[0.9375rem] leading-[1.8] text-white/85 md:mt-7 md:text-base"
                >
                  {description}
                </p>
              )}
              {ctaText && ctaHref && (
                <div ref={ctaAnimation.ref} style={ctaAnimation.style}>
                  <Link
                    href={ctaHref}
                    className="mt-8 inline-block border border-white/15 bg-black/45 px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-black/60"
                  >
                    {ctaText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

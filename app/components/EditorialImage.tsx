'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY,
  IMAGE_SIZES,
  REMOTE_EDITORIAL_WIDTH,
  unsplashSrc,
} from '../lib/image-utils';

interface EditorialImageProps {
  variant: 'architecture-1' | 'architecture-2' | 'architecture-3' | 'architecture-4' | 'architecture-5';
  title?: string;
  description?: string;
  className?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Load immediately — use for the first visible editorial band on a page */
  priority?: boolean;
}

// High-quality photographic images from Unsplash
const imageMap: Record<string, { url: string; alt: string }> = {
  'architecture-1': {
    url: unsplashSrc('photo-1486406146926-c627a92ad1ab', REMOTE_EDITORIAL_WIDTH),
    alt: 'Modern corporate office buildings in business district',
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
    url: unsplashSrc('photo-1497366811353-6870744d04b2', REMOTE_EDITORIAL_WIDTH),
    alt: 'Modern corporate building with architectural details',
  },
  'architecture-5': {
    url: unsplashSrc('photo-1503387762-592deb58ef4e', REMOTE_EDITORIAL_WIDTH),
    alt: 'Contemporary corporate architecture with clean lines and glass panels',
  },
};

export default function EditorialImage({
  variant,
  title,
  description,
  className = '',
  ctaText,
  ctaHref,
  priority = false,
}: EditorialImageProps) {
  const image = imageMap[variant];
  const titleAnimation = useFadeInAnimation({ delay: 200, duration: 1000 });
  const descriptionAnimation = useFadeInAnimation({ delay: 500, duration: 1000 });
  const ctaAnimation = useFadeInAnimation({ delay: 800, duration: 1000 });
  
  return (
    <section
      className={`relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gray-200 ${className}`}
    >
      {/* Real photographic image */}
      <div className="absolute inset-0">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          quality={IMAGE_QUALITY}
          sizes={IMAGE_SIZES.fullBleed}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          className="object-cover"
        />
        {/* Very subtle darkening overlay for text readability - only if text is present */}
        {(title || description) && (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </div>

      {/* Text overlay */}
      {(title || description) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {title && (
                <h2 
                  ref={titleAnimation.ref}
                  style={titleAnimation.style}
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6 leading-tight"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p 
                  ref={descriptionAnimation.ref}
                  style={descriptionAnimation.style}
                  className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8"
                >
                  {description}
                </p>
              )}
              {ctaText && ctaHref && (
                <div
                  ref={ctaAnimation.ref}
                  style={ctaAnimation.style}
                >
                  <Link
                    href={ctaHref}
                    className="inline-block px-8 py-3 bg-white text-navy text-sm font-medium hover:bg-gray-100 transition-colors mt-4"
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

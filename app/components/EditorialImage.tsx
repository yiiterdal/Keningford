'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

interface EditorialImageProps {
  variant: 'architecture-1' | 'architecture-2' | 'architecture-3' | 'architecture-4' | 'architecture-5';
  title?: string;
  description?: string;
  className?: string;
  ctaText?: string;
  ctaHref?: string;
}

// High-quality photographic images from Unsplash
const imageMap: Record<string, { url: string; alt: string }> = {
  'architecture-1': {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop',
    alt: 'Modern corporate office buildings in business district'
  },
  'architecture-2': {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop',
    alt: 'Contemporary glass office tower architecture'
  },
  'architecture-3': {
    url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&auto=format&fit=crop',
    alt: 'Modern corporate building with glass facade'
  },
  'architecture-4': {
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80&auto=format&fit=crop',
    alt: 'Modern corporate building with architectural details'
  },
  'architecture-5': {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&auto=format&fit=crop',
    alt: 'Contemporary corporate architecture with clean lines and glass panels'
  },
};

export default function EditorialImage({ 
  variant, 
  title, 
  description, 
  className = '',
  ctaText,
  ctaHref
}: EditorialImageProps) {
  const image = imageMap[variant];
  const titleAnimation = useFadeInAnimation({ delay: 200, duration: 1000 });
  const descriptionAnimation = useFadeInAnimation({ delay: 500, duration: 1000 });
  const ctaAnimation = useFadeInAnimation({ delay: 800, duration: 1000 });
  
  return (
    <section 
      className={`relative w-full h-[60vh] md:h-[70vh] overflow-hidden ${className}`}
    >
      {/* Real photographic image */}
      <div className="absolute inset-0">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          loading="lazy"
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
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6 leading-tight"
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY,
  IMAGE_SIZES,
  unsplashSrc,
} from '../lib/image-utils';
import { shouldLoadHeavyMedia, shouldUseReducedMotion } from '../lib/scroll-config';

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  title: ReactNode;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  videoSrc?: string;
  /** Local poster while video loads; avoids a second large remote fetch */
  posterSrc?: string;
  variant?: 'default' | 'large';
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

const defaultImageUrl = unsplashSrc('photo-1449824913935-59a10b8d2000');
const defaultImageAlt = 'Modern city skyline with office buildings';
const defaultHeroVideo = '/videos/hero-web.mp4';
const defaultHeroPoster = '/images/hero/poster.webp';

export default function Hero({
  title,
  subtitle,
  imageUrl = defaultImageUrl,
  imageAlt = defaultImageAlt,
  videoSrc,
  posterSrc = defaultHeroPoster,
  variant = 'default',
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const isLarge = variant === 'large';
  const titleAnimation = useFadeInAnimation({ delay: 150, duration: 700 });
  const subtitleAnimation = useFadeInAnimation({ delay: 400, duration: 700 });
  const ctaAnimation = useFadeInAnimation({ delay: 600, duration: 700 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [preferStaticImage, setPreferStaticImage] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  const useVideoBackground = Boolean(videoSrc) && loadVideo && !preferStaticImage;

  useEffect(() => {
    if (!videoSrc) return;

    if (shouldUseReducedMotion() || !shouldLoadHeavyMedia()) {
      setPreferStaticImage(true);
      return;
    }

    const startLoading = () => setLoadVideo(true);

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(startLoading, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timerId = setTimeout(startLoading, 300);
    return () => clearTimeout(timerId);
  }, [videoSrc]);

  useEffect(() => {
    if (!loadVideo || !videoSrc) return;

    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 3) {
      setVideoReady(true);
    }

    video.play().catch(() => {
      setPreferStaticImage(true);
      setVideoReady(false);
    });
  }, [loadVideo, videoSrc]);

  const handleVideoReady = () => {
    setVideoReady(true);
    videoRef.current?.play().catch(() => {
      setPreferStaticImage(true);
    });
  };

  const handleVideoError = () => {
    setPreferStaticImage(true);
    setVideoReady(false);
  };

  const showPosterImage =
    Boolean(videoSrc) && (!useVideoBackground || !videoReady || preferStaticImage);
  const posterImageSrc = videoSrc && posterSrc ? posterSrc : imageUrl;

  return (
    <section
      className={`relative overflow-hidden ${
        isLarge
          ? 'pt-32 pb-32 md:pt-40 md:pb-48 lg:pt-48 lg:pb-56 xl:pt-56 xl:pb-64 min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh]'
          : 'pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 min-h-[60vh] md:min-h-[65vh]'
      }`}
    >
      <div className="absolute inset-0 bg-[#0c1628]">
        {showPosterImage && (
          <Image
            src={posterImageSrc}
            alt={imageAlt}
            fill
            priority
            fetchPriority="high"
            quality={IMAGE_QUALITY}
            sizes={IMAGE_SIZES.fullBleed}
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
            className="object-cover"
          />
        )}

        {useVideoBackground && (
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={posterSrc}
            onLoadedData={handleVideoReady}
            onCanPlay={handleVideoReady}
            onError={handleVideoError}
            aria-hidden
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {!videoSrc && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
            quality={IMAGE_QUALITY}
            sizes={IMAGE_SIZES.fullBleed}
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 bg-gradient-to-b from-transparent via-gray-100/50 to-white pointer-events-none z-20" />
      </div>

      <div className="container mx-auto relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-8 tracking-tight text-white"
          >
            {title}
          </h1>
          {subtitle && (
            <p
              ref={subtitleAnimation.ref}
              style={subtitleAnimation.style}
              className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto font-light mt-6 md:mt-8"
            >
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              ref={ctaAnimation.ref}
              style={ctaAnimation.style}
              className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
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
    </section>
  );
}

export { defaultHeroVideo };

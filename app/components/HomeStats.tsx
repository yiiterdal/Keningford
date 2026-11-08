'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { IMAGE_QUALITY, IMAGE_SIZES, isFullBleedImage } from '../lib/image-utils';

const STATS_IMAGE = '/images/hero/hero-hq.jpg';

interface StatConfig {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

function CountUpStat({ value, prefix = '', suffix = '' }: Omit<StatConfig, 'label'>) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1800;
    const start = performance.now();
    setDisplayValue(0);

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="flex items-baseline">
      <span className="font-sans text-[2.75rem] font-medium leading-none tracking-[-0.03em] text-white md:text-5xl lg:text-[3.5rem]">
        {prefix}
        {displayValue.toLocaleString('en-US')}
        {suffix}
      </span>
    </div>
  );
}

export default function HomeStats() {
  const stats: StatConfig[] = [
    { value: 30, suffix: '+', label: 'Years of combined principal experience' },
    { value: 1000, suffix: '+', label: 'Institutional capital relationships' },
    { value: 120, suffix: '+', label: 'Transactions advised by our principals' },
    { value: 14, label: 'Cross-border markets served' },
  ];

  const statAnimations = stats.map((_, index) => useFadeInAnimation({ delay: 200 + index * 150, duration: 800 }));
  const bandTitleAnimation = useFadeInAnimation({ delay: 0, duration: 900 });

  return (
    <section className="relative overflow-hidden bg-[#0f141c]">
      <div className="absolute inset-x-0 top-0 h-[85%]">
        <Image
          src={STATS_IMAGE}
          alt="Modern glass skyscrapers rising toward a cloudy sky"
          fill
          loading="lazy"
          quality={IMAGE_QUALITY}
          sizes={IMAGE_SIZES.fullBleed}
          unoptimized={isFullBleedImage(STATS_IMAGE)}
          className="object-cover object-center saturate-[0.5]"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,20,28,0.55)_0%,rgba(15,20,28,0.35)_30%,rgba(15,20,28,0.75)_60%,#0f141c_85%)]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col justify-between px-6 pb-12 pt-16 md:px-8 md:pb-16 md:pt-20">
        <div ref={bandTitleAnimation.ref} style={bandTitleAnimation.style} className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2.5 border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#e8d5a8]" aria-hidden />
            Global Reach, Local Expertise
          </p>
          <h2 className="font-sans text-2xl font-medium leading-[1.3] tracking-[-0.01em] text-white md:text-3xl lg:text-[2.125rem]">
            Capital is global. Judgment is personal. We combine deep market knowledge with extensive transaction
            experience across industries and geographies.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 lg:grid-cols-4 lg:gap-x-10">
          {stats.map((stat, index) => {
            const anim = statAnimations[index];
            return (
              <div key={stat.label} ref={anim.ref} style={anim.style}>
                <CountUpStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="mt-3 max-w-[14rem] text-[13px] leading-snug text-white/80 md:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

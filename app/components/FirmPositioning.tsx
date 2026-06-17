'use client';

import { useEffect, useRef, useState } from 'react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

interface StatConfig {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

function CountUpStat({ value, prefix = '', suffix = '' }: Omit<StatConfig, 'label'>) {
  const [displayValue, setDisplayValue] = useState(0);
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

    const duration = 1800;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="mt-3 flex items-baseline">
      <span className="font-serif text-4xl font-normal leading-none text-white md:text-5xl lg:text-[3.25rem]">
        {prefix}
        {displayValue.toLocaleString()}
      </span>
      {suffix === '+' && (
        <span className="ml-0.5 font-serif text-2xl leading-none text-[#c4a062] md:text-3xl">+</span>
      )}
      {suffix && suffix !== '+' && (
        <span className="ml-0.5 font-serif text-2xl leading-none text-white md:text-3xl">{suffix}</span>
      )}
    </div>
  );
}

export default function FirmPositioning() {
  const pillars = [
    'Independent strategic advice aligned with long-term value creation',
    'Senior-level attention on every engagement',
    "Customized approach tailored to each client's unique circumstances",
    'Disciplined execution with institutional-grade process management',
  ];

  const stats: StatConfig[] = [
    { value: 30, suffix: '+', label: 'Years of combined principal experience' },
    { value: 45, suffix: '+', label: 'Institutional capital relationships' },
    { value: 120, suffix: '+', label: 'Transactions advised by our principals' },
    { value: 14, label: 'Cross-border markets served' },
  ];

  const headingAnimation = useFadeInAnimation({ delay: 0, duration: 800 });
  const introAnimation = useFadeInAnimation({ delay: 150, duration: 800 });
  const statAnimations = stats.map((_, index) => useFadeInAnimation({ delay: 200 + index * 150, duration: 800 }));
  const pillarsHeadingAnimation = useFadeInAnimation({ delay: 0, duration: 800 });
  const pillarAnimations = pillars.map((_, index) => useFadeInAnimation({ delay: 150 + index * 100, duration: 800 }));

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2
            ref={headingAnimation.ref}
            style={headingAnimation.style}
            className="mb-6 text-3xl font-semibold text-navy md:mb-8 md:text-4xl"
          >
            Who We Are
          </h2>
          <p
            ref={introAnimation.ref}
            style={introAnimation.style}
            className="mb-0 max-w-4xl text-lg font-light leading-relaxed text-gray-700 md:text-xl"
          >
            Keningford Partners provides strategic capital advisory and financial services to leading companies and
            institutional investors. We combine deep market knowledge, extensive transaction experience, and disciplined
            execution to deliver customized solutions that support our clients&apos; strategic objectives.
          </p>
        </div>
      </div>

      <div className="bg-[#0b1426]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {stats.map((stat, index) => {
              const anim = statAnimations[index];
              return (
                <div
                  key={stat.label}
                  ref={anim.ref}
                  style={anim.style}
                  className="flex flex-col px-0 py-10 md:px-8 md:py-12 lg:px-10 lg:first:pl-0 lg:last:pr-0"
                >
                  <p className="mb-0 min-h-12 max-w-[14rem] text-sm leading-relaxed text-white/50">
                    {stat.label}
                  </p>
                  <CountUpStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2
            ref={pillarsHeadingAnimation.ref}
            style={pillarsHeadingAnimation.style}
            className="mb-6 text-3xl font-semibold text-navy md:mb-10 md:text-4xl"
          >
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {pillars.map((pillar, index) => {
              const anim = pillarAnimations[index];
              return (
                <div key={pillar} ref={anim.ref} style={anim.style} className="flex gap-4">
                  <span className="mt-2.5 block h-px w-5 shrink-0 bg-navy" aria-hidden />
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">{pillar}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

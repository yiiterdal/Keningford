'use client';

import { useEffect, useRef, useState } from 'react';

interface StatConfig {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

function CountUpStat({ value, prefix = '', suffix = '' }: StatConfig) {
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
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2600; // ms - slower, more noticeable animation
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-semibold text-navy mb-2">
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function FirmPositioning() {
  const pillars = [
    'Independent strategic advice aligned with long-term value creation',
    'Senior-level attention on every engagement',
    'Customized approach tailored to each client\'s unique circumstances',
    'Disciplined execution with institutional-grade process management'
  ];

  const stats: StatConfig[] = [
    { value: 15, suffix: '+', label: 'Years of Experience' },
    { value: 5, prefix: '$', suffix: 'B+', label: 'Transaction Value' },
    { value: 100, suffix: '+', label: 'Completed Transactions' },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 font-light max-w-4xl">
            Keningford provides strategic capital advisory and financial services to leading companies and institutional investors. We combine deep market knowledge, extensive transaction experience, and disciplined execution to deliver customized solutions that support our clients' strategic objectives.
          </p>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 pb-20 border-b border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <CountUpStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-navy mt-1 flex-shrink-0 text-xl">—</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


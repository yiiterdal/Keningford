'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { transactions } from '../data/transactions';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { IMAGE_QUALITY } from '../lib/image-utils';
import HomeSectionHeader from './HomeSectionHeader';

const SLIDE_MS = 7000;

const CASES = [
  {
    description: 'Technology Platform',
    tag: 'M&A Advisory',
    title: 'Sell-side advisory for a mission-critical technology platform',
    image: '/images/home/case-towers-hq.jpg',
    imageAlt: 'Glass office towers rising into fog',
    position: '65% center',
  },
  {
    description: 'Healthcare Services Platform',
    tag: 'M&A Advisory',
    title: 'Sell-side M&A for a multi-site healthcare services platform',
    image: '/images/home/case-lab-hq.jpg',
    imageAlt: 'Clinical team in discussion around a laboratory workbench',
    position: '70% center',
  },
  {
    description: 'Real Estate Portfolio',
    tag: 'Debt Advisory',
    title: 'Debt refinancing for a diversified real estate portfolio',
    image: '/images/home/case-construction-hq.jpg',
    imageAlt: 'Project lead in a hard hat reviewing plans at a construction site',
    position: '60% center',
  },
].flatMap((item) => {
  const transaction = transactions.find((t) => t.description === item.description);
  return transaction ? [{ ...item, transaction }] : [];
});

export default function HomeCaseStudies() {
  const headerAnimation = useFadeInAnimation();
  const bodyAnimation = useFadeInAnimation({ delay: 120 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const autoplay = !paused && !reducedMotion && CASES.length > 1;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % CASES.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, autoplay]);

  return (
    <section className="bg-white py-24 md:py-32" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style}>
          <HomeSectionHeader align="center" pill="Case Studies" title="Real problems. Real clients. Real results." />
        </div>

        <div ref={bodyAnimation.ref} style={bodyAnimation.style}>
          <div
            className="relative grid grid-cols-1 overflow-hidden bg-[#0f141c]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Representative transactions"
          >
            {CASES.map((item, index) => {
              const isActive = index === active;
              const { transaction } = item;
              return (
                <article
                  key={item.description}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${CASES.length}`}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 grid min-w-0 grid-cols-1 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                    isActive ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="relative col-start-1 row-start-1 aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[2/1]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1344px) 1280px, 100vw"
                      quality={IMAGE_QUALITY}
                      style={{ objectPosition: item.position }}
                      className={`object-cover transition-transform duration-[7000ms] ease-linear motion-reduce:transition-none ${
                        isActive ? 'scale-[1.04]' : 'scale-100'
                      }`}
                    />
                    <div
                      className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(15,20,28,0.45)_0%,transparent_55%)] lg:block"
                      aria-hidden
                    />
                  </div>

                  <div className="relative col-start-1 row-start-2 flex min-w-0 lg:row-start-1 lg:p-2">
                    <div className="flex w-full flex-col p-6 text-white md:p-8 lg:w-[440px] lg:bg-[#0f141c]/55 lg:backdrop-blur-md">
                      <span className="w-fit border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 md:text-[11px]">
                        {item.tag}
                      </span>
                      <h3 className="mt-5 font-sans text-[1.5rem] font-medium leading-[1.15] tracking-[-0.01em] text-white md:text-[1.75rem]">
                        {item.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 text-[15px] leading-[1.45] tracking-[-0.01em] text-white/70">
                        {transaction.details?.highlights[0] ?? transaction.details?.overview}
                      </p>

                      <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5 lg:mt-auto">
                        <div>
                          <dt className="text-[11px] uppercase tracking-[0.14em] text-white/50">{transaction.valueLabel}</dt>
                          <dd className="mt-1.5 font-sans text-xl font-medium tracking-[-0.01em]">{transaction.value}</dd>
                        </div>
                        {transaction.details?.role && (
                          <div>
                            <dt className="text-[11px] uppercase tracking-[0.14em] text-white/50">Role</dt>
                            <dd className="mt-1.5 text-[15px] leading-snug text-white/85">{transaction.details.role}</dd>
                          </div>
                        )}
                      </dl>

                      <Link
                        href="/transactions"
                        tabIndex={isActive ? 0 : -1}
                        className="mt-6 inline-flex w-fit items-center gap-2 text-[15px] font-medium text-white transition-colors hover:text-[#e8d5a8]"
                      >
                        View transaction
                        <span aria-hidden>›</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="absolute right-5 top-5 z-10 flex gap-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] lg:bottom-6 lg:right-6 lg:top-auto">
              {CASES.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.description}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show case ${index + 1}: ${item.title}`}
                    aria-current={isActive}
                    className="group relative h-6 w-8 md:w-10"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden bg-white/30">
                      <span
                        key={isActive ? `${active}-${autoplay}` : 'idle'}
                        className={`block h-full bg-white ${
                          isActive ? (autoplay ? 'animate-case-progress' : 'w-full') : 'w-0'
                        }`}
                        style={isActive && autoplay ? { animationDuration: `${SLIDE_MS}ms` } : undefined}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-5 bg-[#f0f0f0] px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="font-sans text-xl font-medium tracking-[-0.03em] text-navy">
                Representative mandates across sectors
              </p>
              <p className="mt-1 text-[15px] tracking-[-0.02em] text-gray-500">
                Sell-side, capital raising, strategic, and restructuring mandates.
              </p>
            </div>
            <Link
              href="/transactions"
              className="inline-flex w-fit shrink-0 items-center gap-2 bg-navy px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-navy-dark"
            >
              View all transactions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

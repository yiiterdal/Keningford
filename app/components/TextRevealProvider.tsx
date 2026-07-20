'use client';

import { usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { shouldUseReducedMotion } from '../lib/scroll-config';

const TEXT_SELECTOR = 'main h1, main h2, main h3, main h4, main p';
const SKIP_SELECTOR = '[data-reveal-root], [data-hero]';

/**
 * Applies the homepage text fade-in to headings and paragraphs site-wide.
 * Skips hero blocks and sections that already define their own reveal animations.
 */
export default function TextRevealProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (shouldUseReducedMotion()) return;

    let cancelled = false;
    const observers: IntersectionObserver[] = [];
    let elements: HTMLElement[] = [];

    const timer = window.setTimeout(() => {
      if (cancelled) return;

      elements = Array.from(document.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(
        (el) => !el.closest(SKIP_SELECTOR),
      );

      elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        const stagger = (index % 4) * 75;
        el.style.transition = `opacity 700ms ease-out ${stagger}ms, transform 700ms ease-out ${stagger}ms`;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.disconnect();
          },
          { threshold: 0.08 },
        );

        observer.observe(el);
        observers.push(observer);
      });
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      observers.forEach((observer) => observer.disconnect());
      elements.forEach((el) => {
        el.style.opacity = '';
        el.style.transform = '';
        el.style.transition = '';
      });
    };
  }, [pathname]);

  return <>{children}</>;
}

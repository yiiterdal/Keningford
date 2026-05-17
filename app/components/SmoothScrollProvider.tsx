'use client';

import { useEffect, type ReactNode } from 'react';
import {
  premiumScrollEasing,
  SCROLL_CONFIG,
  shouldUseReducedMotion,
} from '../lib/scroll-config';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (shouldUseReducedMotion()) return;

    let lenis: import('lenis').default | null = null;
    let rafId = 0;
    let cancelled = false;

    const handleAnchorClick = (e: MouseEvent) => {
      if (!lenis) return;
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;

      const targetElement = document.querySelector(href) as HTMLElement | null;
      if (!targetElement) return;

      e.preventDefault();
      lenis.scrollTo(targetElement, {
        offset: -80,
        duration: SCROLL_CONFIG.anchorDuration,
        easing: premiumScrollEasing,
      });
    };

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        lerp: SCROLL_CONFIG.lerp,
        wheelMultiplier: SCROLL_CONFIG.wheelMultiplier,
        touchMultiplier: SCROLL_CONFIG.touchMultiplier,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        syncTouch: true,
        infinite: false,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      document.addEventListener('click', handleAnchorClick, { passive: false });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}

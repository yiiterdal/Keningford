'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';
import {
  premiumScrollEasing,
  SCROLL_CONFIG,
  shouldUseReducedMotion,
} from '../lib/scroll-config';

function scrollWindowToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function scrollToTop(lenis: import('lenis').default | null) {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true });
  } else {
    scrollWindowToTop();
  }
}

function scrollToHash(lenis: import('lenis').default | null, hash: string) {
  const id = hash.replace(/^#/, '');
  if (!id) {
    scrollToTop(lenis);
    return;
  }

  const target = document.getElementById(id);
  if (!target) {
    scrollToTop(lenis);
    return;
  }

  if (lenis) {
    lenis.scrollTo(target, { offset: -80, immediate: true });
  } else {
    target.scrollIntoView();
  }
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<import('lenis').default | null>(null);

  useEffect(() => {
    const hash = window.location.hash;

    const run = () => {
      if (hash) {
        scrollToHash(lenisRef.current, hash);
      } else {
        scrollToTop(lenisRef.current);
      }
    };

    // Run after the new page paints
    requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });
  }, [pathname]);

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

      lenisRef.current = lenis;

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
      lenisRef.current = null;
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}

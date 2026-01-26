// app/components/SmoothScrollProvider.tsx
'use client';
import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;
    
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with subtle, institutional feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    // Animation frame loop - Lenis uses requestAnimationFrame internally
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links (works with both regular anchors and Next.js Links)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#' && href.startsWith('#')) {
          const targetElement = document.querySelector(href) as HTMLElement;
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement, {
              offset: -80, // Account for fixed navbar
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}


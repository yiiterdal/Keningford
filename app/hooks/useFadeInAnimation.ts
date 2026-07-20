'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseFadeInAnimationOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  /** Play immediately on mount (for above-the-fold hero text) */
  animateOnMount?: boolean;
}

export function useFadeInAnimation<T extends HTMLElement = HTMLDivElement>({
  delay = 0,
  duration = 600,
  threshold = 0.08,
  triggerOnce = true,
  animateOnMount = false,
}: UseFadeInAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!animateOnMount) return;

    setIsVisible(false);

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const timer = window.setTimeout(() => setIsVisible(true), delay);
    return () => window.clearTimeout(timer);
  }, [animateOnMount, delay]);

  useEffect(() => {
    if (animateOnMount) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!triggerOnce || !hasAnimated) {
              window.setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) {
                  setHasAnimated(true);
                }
              }, delay);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animateOnMount, delay, threshold, triggerOnce, hasAnimated]);

  return {
    ref: ref as RefObject<T>,
    isVisible,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    },
  };
};

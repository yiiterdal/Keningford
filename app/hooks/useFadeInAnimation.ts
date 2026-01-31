'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseFadeInAnimationOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useFadeInAnimation<T extends HTMLElement = HTMLDivElement>({
  delay = 0,
  duration = 800,
  threshold = 0.1,
  triggerOnce = true,
}: UseFadeInAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!triggerOnce || !hasAnimated) {
              setTimeout(() => {
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
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold, triggerOnce, hasAnimated]);

  return {
    ref: ref as RefObject<T>,
    isVisible,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    },
  };
}

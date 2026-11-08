'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  /** Resting (not yet revealed) word colour */
  dimClass?: string;
  /** Revealed word colour */
  activeClass?: string;
}

/**
 * Reveals a paragraph word by word as it scrolls through the viewport.
 * Reveal starts when the block enters the lower part of the screen and
 * completes once it reaches the upper third, so the whole sentence is
 * readable before it leaves view.
 */
export default function ScrollRevealText({
  text,
  className = '',
  dimClass = 'text-navy/20',
  activeClass = 'text-navy',
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = useState(0);
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.85;
      const end = viewport * 0.3;
      const travel = start - end + rect.height;
      const next = Math.min(1, Math.max(0, (start - rect.top) / travel));
      setProgress((prev) => (Math.abs(prev - next) > 0.004 ? next : prev));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const revealed = Math.floor(progress * words.length);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden
          className={`transition-colors duration-300 ease-out ${index < revealed ? activeClass : dimClass}`}
        >
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  );
}

'use client';

import { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  url: string;
  minHeight?: number;
  className?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function CalendlyEmbed({
  url,
  minHeight = 700,
  className = '',
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentElement = containerRef.current;
    if (!parentElement) return;

    const initWidget = () => {
      parentElement.innerHTML = '';
      window.Calendly?.initInlineWidget({ url, parentElement });
    };

    const existingScript = document.querySelector('script[data-calendly-widget]');

    if (window.Calendly) {
      initWidget();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener('load', initWidget);
      return () => existingScript.removeEventListener('load', initWidget);
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.dataset.calendlyWidget = 'true';
    script.onload = initWidget;
    document.head.appendChild(script);
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`w-full ${className}`}
      style={{ minHeight: `${minHeight}px` }}
    />
  );
}

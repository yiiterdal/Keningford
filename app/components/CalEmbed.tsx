'use client';

import { useEffect, useRef } from 'react';

interface CalEmbedProps {
  calLink: string;
  minHeight?: number;
  className?: string;
}

type CalNamespace = (...args: unknown[]) => void;
type CalApi = ((...args: unknown[]) => void) & { ns: Record<string, CalNamespace> };

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

const NAMESPACE = 'discovery-call';
const EMBED_SCRIPT = 'https://app.cal.com/embed/embed.js';

/** Port of the official Cal.com loader snippet: queues calls until embed.js has loaded. */
function installCalLoader() {
  const C = window as any;
  if (C.Cal) return;
  const push = (api: any, args: unknown) => {
    api.q.push(args);
  };
  C.Cal = function (...args: unknown[]) {
    const cal = C.Cal;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      document.head.appendChild(document.createElement('script')).src = EMBED_SCRIPT;
      cal.loaded = true;
    }
    if (args[0] === 'init') {
      const api: any = (...apiArgs: unknown[]) => push(api, apiArgs);
      api.q = [];
      const namespace = args[1];
      if (typeof namespace === 'string') {
        cal.ns[namespace] = cal.ns[namespace] || api;
        push(cal.ns[namespace], args);
        push(cal, ['initNamespace', namespace]);
      } else {
        push(cal, args);
      }
      return;
    }
    push(cal, args);
  };
}
export default function CalEmbed({ calLink, minHeight = 640, className = '' }: CalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    installCalLoader();
    const Cal = window.Cal!;
    if (!Cal.ns?.[NAMESPACE]) {
      Cal('init', NAMESPACE, { origin: 'https://app.cal.com' });
    }
    const api = Cal.ns[NAMESPACE];
    api('inline', {
      elementOrSelector: element,
      calLink,
      config: { layout: 'month_view', theme: 'light' },
    });
    api('ui', {
      theme: 'light',
      layout: 'month_view',
      hideEventTypeDetails: false,
      cssVarsPerTheme: { light: { 'cal-brand': '#001f4d' } },
    });

    return () => {
      element.innerHTML = '';
    };
  }, [calLink]);

  return <div ref={containerRef} className={`w-full ${className}`} style={{ minHeight }} />;
}

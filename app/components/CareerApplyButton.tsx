'use client';

import { useEffect, useRef, useState } from 'react';
import {
  gmailApplicationUrl,
  mailtoApplicationUrl,
  outlookApplicationUrl,
} from '../lib/mail-compose';

interface CareerApplyButtonProps {
  jobTitle: string;
  className?: string;
}

export default function CareerApplyButton({ jobTitle, className = '' }: CareerApplyButtonProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const linkClass =
    'block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors';

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#1E293B] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Apply
        <svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-20 mt-2 min-w-[220px] overflow-hidden rounded-sm border border-gray-200 bg-white py-1 shadow-lg"
        >
          <a
            role="menuitem"
            href={gmailApplicationUrl(jobTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Gmail (web)
          </a>
          <a
            role="menuitem"
            href={outlookApplicationUrl(jobTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Outlook (web)
          </a>
          <a
            role="menuitem"
            href={mailtoApplicationUrl(jobTitle)}
            className={`${linkClass} border-t border-gray-100`}
            onClick={() => setOpen(false)}
          >
            Default email app
          </a>
        </div>
      )}
    </div>
  );
}

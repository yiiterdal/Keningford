import Link from 'next/link';
import type { ReactNode } from 'react';
import type { FaqItem } from '../data/credentials';
import ImageBand from './ImageBand';

export const PAGE_BG = 'bg-[#f0f0f0]';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
      <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
      {children}
    </p>
  );
}

export function Breadcrumb({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
      <Link href="/" className="hover:text-navy">
        Home
      </Link>
      <span className="mx-1.5">/</span>
      <span>{label}</span>
    </nav>
  );
}

export function FaqList({ items, icon = 'chevron' }: { items: FaqItem[]; icon?: 'chevron' | 'plus' }) {
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item, index) => (
        <details key={item.question} className="group py-6" open={index === 0 && icon === 'chevron'}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium tracking-[-0.01em] text-navy md:text-lg [&::-webkit-details-marker]:hidden">
            {item.question}
            {icon === 'chevron' ? (
              <svg
                className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <span
                aria-hidden
                className="shrink-0 text-xl leading-none text-gray-400 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            )}
          </summary>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function TalkToPersonBand() {
  return (
    <ImageBand
      align="center"
      image="/images/bands/office-windows-v2.jpg"
      imageAlt="Office building at night with illuminated floors"
      pill="Contact"
      title="Talk to a real person."
      description="Email or call the team directly, and a real person replies, usually the same day."
      primaryCta={{ label: 'Speak with the team →', href: '/contact' }}
    />
  );
}

export function ConfirmApproachBox() {
  return (
    <div className="bg-[#0f141c] px-6 py-14 text-center md:px-10">
      <h2 className="mx-auto max-w-[560px] font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-white md:text-[2.25rem]">
        Want to confirm an approach is genuine?
      </h2>
      <p className="mt-4 text-[15px] text-white/65">We are happy to be checked. Reach the team directly through our website.</p>
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 text-[13px] font-medium text-navy transition-colors hover:bg-white/90"
      >
        Contact the team <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

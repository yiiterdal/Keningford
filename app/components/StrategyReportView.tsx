'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { StrategyReport, StrategyReportCard } from '../data/strategy-reports';
import { contactEmail } from '../data/contact';
import Breadcrumbs from './Breadcrumbs';
import { IMAGE_BLUR_DATA_URL, IMAGE_QUALITY } from '../lib/image-utils';

function CardIcon({ id }: { id: StrategyReportCard['icon'] }) {
  const common = 'h-5 w-5';
  switch (id) {
    case 'aviation':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12.5 21 4l-5.5 16-3.5-5.5L3.5 12.5z" />
        </svg>
      );
    case 'policy':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V5a1 1 0 0 1 1-1h9l6 6v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4v5h5M8 13h8M8 17h5" />
        </svg>
      );
    case 'supply':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7M9 11h6M9 15h4" />
        </svg>
      );
    case 'capital':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M7 8c0-1.7 2.2-3 5-3s5 1.3 5 3-2.2 3-5 3-5 1.3-5 3 2.2 3 5 3 5-1.3 5-3" />
        </svg>
      );
    case 'margin':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16M7 15l4-5 3 3 5-7" />
        </svg>
      );
    case 'capacity':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
        </svg>
      );
    case 'defense':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
        </svg>
      );
    case 'process':
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
  }
}

/** Wider than site `.container` (1200px) - report layout needs more horizontal room. */
const shell = 'mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12';

interface StrategyReportViewProps {
  report: StrategyReport;
}

export default function StrategyReportView({ report }: StrategyReportViewProps) {
  const [activeId, setActiveId] = useState(report.sections[0]?.id ?? '');
  const activeSection = useMemo(
    () => report.sections.find((section) => section.id === activeId) ?? report.sections[0],
    [activeId, report.sections],
  );

  if (!activeSection) return null;

  return (
    <div className="bg-[#f4f5f7]">
      {/* Homepage-style full-bleed hero: image behind copy */}
      <header>
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden md:h-[78vh] md:min-h-[600px]" data-hero>
          <div className="absolute inset-0 bg-[#111820]">
            <Image
              src={report.heroImageUrl}
              alt={report.heroImageAlt}
              fill
              priority
              unoptimized
              className="object-cover object-[center_40%]"
              sizes="100vw"
            />
            {/* Light left wash only - keep skyline color/detail visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1426]/80 to-transparent" />
          </div>

          <div className={`${shell} relative z-10 flex h-full flex-col pb-10 pt-28 md:pb-12 md:pt-32`}>
            <div className="[&_nav]:mb-6">
              <Breadcrumbs
                variant="dark"
                items={[
                  { label: 'Insights', href: '/insights' },
                  { label: 'Strategy Reports', href: '/insights#strategy-reports' },
                  { label: `${report.titleLead} ${report.titleAccent}` },
                ]}
              />
            </div>

            <div className="mt-auto grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 shrink-0 bg-[#e8d5a8] md:w-12" aria-hidden />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8d5a8] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] md:text-xs">
                    {report.eyebrow}
                  </p>
                </div>
                <h1 className="max-w-4xl font-serif text-[2.125rem] font-normal leading-[1.12] tracking-[-0.01em] text-white md:text-[2.75rem] lg:text-[3.5rem] lg:leading-[1.08] xl:text-[3.75rem]">
                  {report.titleLead}{' '}
                  <span className="text-[#BF9B5F]">{report.titleAccent}</span>
                </h1>
                <p className="mt-6 max-w-2xl text-[0.9375rem] leading-[1.8] text-white/85 md:mt-7 md:text-base">
                  {report.excerpt}
                </p>
              </div>
              <div className="lg:col-span-4 lg:pb-1 lg:text-right xl:col-span-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
                  {report.coverageNote}
                </p>
                <p className="mt-2 text-sm text-white/70">{report.date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section nav - single equal-width row on desktop; scroll on small screens */}
        <div className="border-b border-white/10 bg-[#0b1426]">
          <div className={shell}>
            <div className="relative -mx-5 sm:-mx-8 lg:mx-0">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#0b1426] to-transparent lg:hidden"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#0b1426] to-transparent lg:hidden"
                aria-hidden
              />
              <div
                className="flex overflow-x-auto overscroll-x-contain px-5 sm:px-8 lg:grid lg:grid-cols-7 lg:gap-px lg:overflow-visible lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Strategy report sections"
              >
                {report.sections.map((section) => {
                  const isActive = section.id === activeSection.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveId(section.id)}
                      className={`group flex min-w-[9.75rem] shrink-0 flex-col items-center justify-center gap-2 px-3 py-3.5 text-center transition lg:min-w-0 lg:px-2 xl:px-3 ${
                        isActive
                          ? 'bg-white text-navy'
                          : 'bg-transparent text-white/65 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      <span
                        className={`flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full text-[10px] font-bold tabular-nums ${
                          isActive
                            ? 'bg-navy text-white'
                            : 'bg-white/12 text-white/90 group-hover:bg-white/20'
                        }`}
                      >
                        {section.number.replace(/^0/, '')}
                      </span>
                      <span className="text-[10px] font-semibold uppercase leading-[1.25] tracking-[0.08em] xl:text-[11px] xl:tracking-[0.1em]">
                        {section.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Active section body */}
      <div className={`${shell} py-10 md:py-14`} role="tabpanel">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-sm bg-[#0e1c38] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d4b57a]">
              Ecosystem {activeSection.number.replace(/^0/, '')}
            </span>
            <h2 className="font-serif text-2xl leading-snug text-navy md:text-[2rem]">
              {activeSection.label}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-gray-500 md:text-right">
            {activeSection.heading}
          </p>
        </div>

        {/* Reference-style strategic callout + metrics */}
        <div className="relative overflow-hidden bg-[#0e1c38] px-6 py-8 md:px-10 md:py-10 xl:px-12">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#1a2d52]"
            aria-hidden
          />
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="flex gap-5 lg:col-span-8 xl:col-span-9">
              <span className="mt-1 hidden h-12 w-12 shrink-0 items-center justify-center border border-[#BF9B5F]/35 bg-white/5 text-[#d4b57a] sm:inline-flex">
                <CardIcon id={activeSection.cards[0]?.icon ?? 'process'} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl leading-snug text-[#d4b57a] md:text-[1.55rem]">
                  {activeSection.callout.title}
                </h3>
                <p className="mt-3 max-w-4xl text-[15px] leading-[1.8] text-white/85 md:text-base">
                  {activeSection.callout.body}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 border-t border-white/10 pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:col-span-3 xl:pl-10">
              {activeSection.callout.metrics.map((metric) => (
                <div key={metric.label} className="text-center lg:text-left">
                  <p className="font-serif text-xl leading-none text-[#d4b57a] md:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why critical + image */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="border border-gray-200 bg-white p-6 md:p-8 xl:p-10 lg:col-span-7 xl:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a6d3a]">
              {activeSection.whyCritical.heading}
            </p>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
              {activeSection.whyCritical.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-gray-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BF9B5F]" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 border border-[#BF9B5F]/35 bg-[#BF9B5F]/10 px-5 py-4 md:px-6">
              <p className="text-[13px] leading-relaxed text-navy/90 md:text-sm">
                {activeSection.whyCritical.alert}
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden bg-gray-200 lg:col-span-5 lg:min-h-full xl:col-span-4">
            <Image
              key={activeSection.id}
              src={activeSection.imageUrl}
              alt={activeSection.imageAlt}
              fill
              quality={IMAGE_QUALITY}
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                {activeSection.label}
              </p>
              <p className="mt-1 font-serif text-lg text-white">{activeSection.heading}</p>
            </div>
          </div>
        </div>

        {/* Driver cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-5">
          {activeSection.cards.map((card) => (
            <article
              key={card.title}
              className="border border-gray-200/80 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition hover:border-gray-300 xl:p-7"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-[#0e1c38]/[0.06] text-navy">
                <CardIcon id={card.icon} />
              </span>
              <h3 className="text-base font-semibold text-navy">{card.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-600">{card.body}</p>
            </article>
          ))}
        </div>

        {/* Market intel - 3-up on wide screens */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="overflow-hidden border border-gray-200 bg-white lg:col-span-5 xl:col-span-5">
            <div className="border-b border-gray-200 bg-[#0e1c38] px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d4b57a]">
                {activeSection.marketIntel.certificationsTitle}
              </p>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-[10px] uppercase tracking-[0.12em] text-gray-500">
                  <th className="px-5 py-3 font-semibold">Certification</th>
                  <th className="px-5 py-3 font-semibold">What it means</th>
                </tr>
              </thead>
              <tbody>
                {activeSection.marketIntel.certifications.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0">
                    <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-navy">
                      {row.label}
                    </td>
                    <td className="px-5 py-3.5 text-gray-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-hidden border border-gray-200 bg-white lg:col-span-4 xl:col-span-4">
            <div className="border-b border-gray-200 bg-[#0e1c38] px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d4b57a]">
                {activeSection.marketIntel.censusTitle}
              </p>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-[10px] uppercase tracking-[0.12em] text-gray-500">
                  <th className="px-5 py-3 font-semibold">Company type</th>
                  <th className="px-5 py-3 font-semibold">Approx. (NA)</th>
                </tr>
              </thead>
              <tbody>
                {activeSection.marketIntel.census.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3.5 text-gray-700">{row.label}</td>
                    <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-navy">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-emerald-200/80 bg-emerald-50/70 px-5 py-5 lg:col-span-3 xl:col-span-3 xl:px-6 xl:py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800/80">
              {activeSection.marketIntel.geoTitle}
            </p>
            <ul className="mt-3 space-y-3">
              {activeSection.marketIntel.geo.map((cluster) => (
                <li key={cluster.region} className="text-sm leading-relaxed text-gray-700">
                  <span className="block font-semibold text-navy">{cluster.region}</span>
                  <span className="mt-0.5 block">{cluster.hubs}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buyer landscape + origination signals */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="overflow-hidden border border-gray-200 bg-white lg:col-span-7">
            <div className="border-b border-gray-200 bg-[#0e1c38] px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d4b57a]">
                Buyer &amp; capital landscape
              </p>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-[10px] uppercase tracking-[0.12em] text-gray-500">
                  <th className="w-[34%] px-5 py-3 font-semibold">Participant</th>
                  <th className="px-5 py-3 font-semibold">What they underwrite</th>
                </tr>
              </thead>
              <tbody>
                {activeSection.buyerLandscape.map((row) => (
                  <tr key={row.buyer} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3.5 font-semibold text-navy">{row.buyer}</td>
                    <td className="px-5 py-3.5 text-gray-600">{row.motive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-gray-200 bg-white px-5 py-5 md:px-6 md:py-6 lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a6d3a]">
              Origination watchlist
            </p>
            <ul className="mt-4 space-y-3">
              {activeSection.originationSignals.map((signal) => (
                <li key={signal} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BF9B5F]"
                    aria-hidden
                  />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Financing needs + sales pitch cards */}
        <div className="mt-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a6d3a]">
            Financing needs &amp; sales pitch
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {activeSection.financingNeeds.map((need) => (
              <article
                key={need.title}
                className="flex flex-col overflow-hidden border border-gray-200 bg-gray-50"
              >
                <div className="flex items-start justify-between gap-3 bg-[#BF9B5F] px-5 py-3.5">
                  <h3 className="text-sm font-semibold leading-snug text-navy">{need.title}</h3>
                  <span className="shrink-0 bg-white/90 px-2 py-1 text-[10px] font-bold tracking-wide text-navy">
                    {need.ticket}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-5 py-5 xl:px-6 xl:py-6">
                  <p className="text-sm leading-relaxed text-gray-600">{need.body}</p>
                  <div className="mt-4 border border-[#0e1c38]/10 bg-[#0e1c38]/[0.04] px-4 py-3.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a6d3a]">
                      Sales pitch
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy/90">{need.pitch}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-gray-200 pt-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
              Origination Dialogue
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-[15px]">
              Evaluating a sell-side, buy-side, or growth financing mandate in advanced manufacturing
              or specialty materials? Our team can map buyer and lender appetite against your facts.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-dark"
            >
              Start a conversation
            </Link>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex border border-navy/30 px-6 py-3 text-sm font-medium text-navy transition hover:border-navy hover:bg-white"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

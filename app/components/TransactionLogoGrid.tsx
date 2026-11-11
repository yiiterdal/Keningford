'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import type { TransactionPortfolioCompany } from '../data/transaction-portfolio';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface TransactionLogoGridProps {
  companies: TransactionPortfolioCompany[];
}

function LogoPlate({ company }: { company: TransactionPortfolioCompany }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(company.logoUrl) && !failed;

  const plateClass = showImage
    ? company.logoPlateBg
      ? ''
      : company.logoOnDark
        ? 'bg-[#2d2d2d]'
        : 'bg-white'
    : 'bg-[#0b1426]';

  return (
    <div
      className={`relative flex h-28 w-full items-center justify-center overflow-hidden ${plateClass} ${
        showImage && !company.logoPlateBg ? 'px-3' : ''
      }`}
      style={showImage && company.logoPlateBg ? { backgroundColor: company.logoPlateBg } : undefined}
    >
      {showImage ? (
        <div className={`relative ${company.logoPlateBg ? 'h-full w-full' : 'h-[5.75rem] w-[92%]'}`}>
          <Image
            src={company.logoUrl!}
            alt={`${company.name} logo`}
            fill
            sizes="300px"
            quality={IMAGE_QUALITY}
            className="object-contain object-center"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        <p className="line-clamp-2 px-4 text-center font-sans text-[1.15rem] font-medium leading-snug tracking-[-0.02em] text-white">
          {company.wordmark}
        </p>
      )}
    </div>
  );
}

function LogoCard({ company }: { company: TransactionPortfolioCompany }) {
  return (
    <article className="flex h-[16.5rem] w-[16.5rem] shrink-0 flex-col overflow-hidden border border-navy/[0.08] bg-white md:w-[17.5rem]">
      <LogoPlate company={company} />

      <div className="flex flex-1 flex-col border-t border-gray-100 px-5 py-5 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#BF9B5F]">
          {company.industry}
        </p>
        <h3 className="mt-2 line-clamp-2 text-[15px] font-medium leading-snug text-navy">
          {company.name}
        </h3>
        {(company.detail || company.hq) && (
          <p className="mt-auto pt-3 text-[11px] uppercase tracking-[0.12em] text-gray-400">
            {company.detail ?? company.hq}
          </p>
        )}
      </div>
    </article>
  );
}

export default function TransactionLogoGrid({ companies }: TransactionLogoGridProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.max(node.clientWidth * 0.85, 560);
    node.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  const arrowClassName =
    'absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-navy/10 bg-white text-navy shadow-sm transition-colors hover:border-navy/25 hover:bg-gray-50';

  return (
    <section>
      <div className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
            Closed Transactions
          </p>
          <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
            Companies we have worked with.
          </h2>
        </div>
        <p className="max-w-[350px] text-base leading-[1.4] tracking-[-0.01em] text-gray-500 lg:col-span-5 lg:justify-self-end">
          A selection of companies across technology, healthcare, industrials, energy, and private
          markets where our team has advised on capital, strategic, or transaction matters.
        </p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className={`${arrowClassName} left-0 md:-left-2`}
          aria-label="Scroll companies left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className={`${arrowClassName} right-0 md:-right-2`}
          aria-label="Scroll companies right"
        >
          →
        </button>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent md:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent md:w-16" />

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto px-12 py-1 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 md:px-14 [&::-webkit-scrollbar]:hidden"
        >
          {companies.map((company) => (
            <LogoCard key={company.name} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}

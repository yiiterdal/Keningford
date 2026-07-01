'use client';

import { useState } from 'react';
import type { Transaction } from '../data/transactions';

interface TransactionCardProps {
  transaction: Transaction;
  compact?: boolean;
}

export default function TransactionCard({ transaction, compact = false }: TransactionCardProps) {
  const [expanded, setExpanded] = useState(false);
  const details = transaction.details;

  return (
    <article
      className={`self-start border border-gray-200 bg-white transition-colors hover:border-gray-300 ${
        compact ? 'px-4 py-4' : 'px-5 py-5'
      }`}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#BF9B5F]">
          {transaction.clientType}
        </span>
        <span className="text-[10px] uppercase tracking-[0.12em] text-gray-400">
          {transaction.sector}
        </span>
      </div>

      <h3
        className={`font-medium text-navy ${compact ? 'mb-2 text-sm leading-snug' : 'mb-3 text-[15px] leading-snug'}`}
      >
        {transaction.description}
      </h3>

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className={`font-serif text-navy ${compact ? 'text-2xl' : 'text-[1.75rem] leading-none'}`}>
            {transaction.value}
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-500">
            {transaction.valueLabel}
          </p>
        </div>
        <p className="text-right text-[11px] font-medium uppercase tracking-[0.1em] text-gray-500">
          {transaction.type}
        </p>
      </div>

      {details && (
        <div className="mt-4 border-t border-gray-100 pt-3">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="flex w-full items-center justify-between text-left text-[11px] font-medium uppercase tracking-[0.12em] text-navy/70 transition-colors hover:text-navy"
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Hide details' : 'View details'}</span>
            <span aria-hidden className="text-sm leading-none">
              {expanded ? '▲' : '▼'}
            </span>
          </button>

          {expanded && (
            <div className="mt-3 space-y-3">
              {details.role && (
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#BF9B5F]">
                  {details.role}
                </p>
              )}
              <p className="text-sm leading-relaxed text-gray-600">{details.overview}</p>
              <ul className="space-y-1.5 border-t border-gray-100 pt-3">
                {details.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-gray-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#BF9B5F]" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

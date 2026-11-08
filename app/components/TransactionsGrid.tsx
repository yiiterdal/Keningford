'use client';

import { useState } from 'react';
import type { Transaction } from '../data/transactions';
import { transactionDealTypes, transactionSectors } from '../data/transactions';
import TransactionCard from './TransactionCard';

interface TransactionsGridProps {
  transactions: Transaction[];
}

export default function TransactionsGrid({ transactions }: TransactionsGridProps) {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedDealType, setSelectedDealType] = useState('All');

  const filteredTransactions = transactions.filter((transaction) => {
    const sectorMatch = selectedSector === 'All' || transaction.sector === selectedSector;
    const typeMatch = selectedDealType === 'All' || transaction.type === selectedDealType;
    return sectorMatch && typeMatch;
  });

  const filterButtonClass = (active: boolean) =>
    `cursor-pointer px-3.5 py-1.5 text-[12px] font-medium transition-colors ${
      active ? 'bg-navy text-white' : 'bg-white text-gray-600 hover:text-navy'
    }`;

  return (
    <>
      <div className="mb-12 flex flex-col gap-8 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
            Select Transactions
          </p>
          <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
            Representative deal experience.
          </h2>
        </div>

        <div className="flex flex-col gap-2 lg:items-end">
          <div className="flex flex-wrap gap-1.5">
            {transactionSectors.map((sector) => (
              <button
                key={sector}
                type="button"
                onClick={() => setSelectedSector(sector)}
                className={filterButtonClass(selectedSector === sector)}
              >
                {sector}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {transactionDealTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedDealType(type)}
                className={filterButtonClass(selectedDealType === type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction, index) => (
            <TransactionCard key={`${transaction.description}-${index}`} transaction={transaction} />
          ))
        ) : (
          <div className="col-span-full border border-dashed border-gray-300 px-6 py-10 text-center">
            <p className="text-sm text-gray-600">No transactions match the selected filters.</p>
          </div>
        )}
      </div>
    </>
  );
}

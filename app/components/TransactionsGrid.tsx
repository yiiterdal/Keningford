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
    `cursor-pointer px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
      active
        ? 'bg-navy text-white'
        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-navy'
    }`;

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
            Select Transactions
          </p>
          <h2 className="text-xl font-semibold text-navy md:text-2xl">Representative deal experience</h2>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
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
          <div className="col-span-full border border-dashed border-gray-200 px-6 py-10 text-center">
            <p className="text-sm text-gray-600">No transactions match the selected filters.</p>
          </div>
        )}
      </div>
    </>
  );
}

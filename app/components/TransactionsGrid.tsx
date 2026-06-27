'use client';

import { useState } from 'react';
import type { Transaction } from '../data/transactions';
import { transactionDealTypes, transactionSectors } from '../data/transactions';

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

  return (
    <>
      <div className="mb-12">
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">Sector</h3>
          <div className="flex flex-wrap gap-2">
            {transactionSectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                type="button"
                className={`cursor-pointer border px-4 py-2 text-sm transition-colors ${
                  selectedSector === sector
                    ? 'border-navy bg-navy text-white'
                    : 'border-gray-300 text-gray-700 hover:border-navy hover:bg-gray-50 hover:text-navy'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
            Transaction Type
          </h3>
          <div className="flex flex-wrap gap-2">
            {transactionDealTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedDealType(type)}
                type="button"
                className={`cursor-pointer border px-4 py-2 text-sm transition-colors ${
                  selectedDealType === type
                    ? 'border-navy bg-navy text-white'
                    : 'border-gray-300 text-gray-700 hover:border-navy hover:bg-gray-50 hover:text-navy'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="mb-2">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {transaction.type} · {transaction.sector}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-navy">{transaction.description}</h3>
              <p className="text-sm text-gray-600">{transaction.value}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-gray-600">No transactions found matching the selected filters.</p>
          </div>
        )}
      </div>
    </>
  );
}

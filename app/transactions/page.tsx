'use client';

import { useState } from 'react';
import Hero from '../components/Hero';

const transactions = [
  {
    type: 'M&A',
    sector: 'Technology',
    description: 'Strategic sale of technology platform',
    value: '$800M',
  },
  {
    type: 'Capital Raising',
    sector: 'Technology',
    description: 'Series C growth equity financing',
    value: '$150M',
  },
  {
    type: 'Capital Raising',
    sector: 'Real Estate',
    description: 'Debt refinancing for real estate portfolio',
    value: '$500M',
  },
  {
    type: 'M&A',
    sector: 'Healthcare',
    description: 'Acquisition of healthcare services platform',
    value: '$800M',
  },
  {
    type: 'Strategic Advisory',
    sector: 'Consumer',
    description: 'Strategic alternatives assessment',
    value: 'Confidential',
  },
  {
    type: 'Restructuring',
    sector: 'Industrial',
    description: 'Debt restructuring and recapitalization',
    value: 'Confidential',
  },
];

const sectors = ['All', 'Technology', 'Healthcare', 'Real Estate', 'Consumer', 'Industrial'];
const dealTypes = ['All', 'M&A', 'Capital Raising', 'Strategic Advisory', 'Restructuring'];

export default function TransactionsPage() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedDealType, setSelectedDealType] = useState('All');

  const filteredTransactions = transactions.filter((transaction) => {
    const sectorMatch = selectedSector === 'All' || transaction.sector === selectedSector;
    const typeMatch = selectedDealType === 'All' || transaction.type === selectedDealType;
    return sectorMatch && typeMatch;
  });

  return (
    <>
      <Hero
        title="Transactions"
        subtitle="Representative engagements demonstrating our experience across industries and transaction types."
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Financial district with modern skyscrapers"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-12">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Sector</h3>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    type="button"
                    className={`px-4 py-2 text-sm border transition-colors cursor-pointer ${
                      selectedSector === sector
                        ? 'border-navy bg-navy text-white'
                        : 'border-gray-300 text-gray-700 hover:border-navy hover:text-navy hover:bg-gray-50'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Transaction Type</h3>
              <div className="flex flex-wrap gap-2">
                {dealTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedDealType(type)}
                    type="button"
                    className={`px-4 py-2 text-sm border transition-colors cursor-pointer ${
                      selectedDealType === type
                        ? 'border-navy bg-navy text-white'
                        : 'border-gray-300 text-gray-700 hover:border-navy hover:text-navy hover:bg-gray-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {transaction.type} · {transaction.sector}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {transaction.description}
                  </h3>
                  <p className="text-sm text-gray-600">{transaction.value}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600">No transactions found matching the selected filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

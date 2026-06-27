export interface Transaction {
  type: 'M&A' | 'Capital Raising' | 'Strategic Advisory' | 'Restructuring';
  sector: string;
  description: string;
  value: string;
}

export const transactions: Transaction[] = [
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

export const transactionSectors = [
  'All',
  ...Array.from(new Set(transactions.map((transaction) => transaction.sector))),
];

export const transactionDealTypes = [
  'All',
  ...Array.from(new Set(transactions.map((transaction) => transaction.type))),
];

export type TransactionType = 'M&A' | 'Capital Raising' | 'Strategic Advisory' | 'Restructuring';

export interface TransactionDetails {
  overview: string;
  highlights: string[];
  role?: string;
}

export interface Transaction {
  clientType: string;
  type: TransactionType;
  sector: string;
  description: string;
  value: string;
  valueLabel: string;
  details?: TransactionDetails;
}

export const transactions: Transaction[] = [
  {
    clientType: 'Operating Business',
    type: 'M&A',
    sector: 'Technology',
    description: 'Technology Platform',
    value: '$800M',
    valueLabel: 'Enterprise Value',
    details: {
      overview:
        'Sell-side advisory for a mission-critical technology platform serving mid-market enterprises in regulated industries.',
      highlights: [
        'Competitive process with strategic and financial buyer outreach across North America and Europe',
        'Management presentations, data room preparation, and negotiation of economic terms',
        'Closed at a premium valuation relative to sector comparables',
      ],
      role: 'Exclusive financial advisor',
    },
  },
  {
    clientType: 'Growth Company',
    type: 'Capital Raising',
    sector: 'Technology',
    description: 'Vertical Software Platform',
    value: '$150M',
    valueLabel: 'Growth Equity',
    details: {
      overview:
        'Growth equity financing for a vertical software platform with strong recurring revenue and net retention above 115%.',
      highlights: [
        'Targeted six-month process engaging a select group of institutional growth equity investors',
        'Positioning of equity story, investor materials, and management presentations',
        'Competitive tension among three finalist investors; founder alignment preserved through rolled equity',
      ],
      role: 'Exclusive financial advisor',
    },
  },
  {
    clientType: 'Operating Business',
    type: 'Capital Raising',
    sector: 'Real Estate',
    description: 'Real Estate Portfolio',
    value: '$500M',
    valueLabel: 'Total Financing',
    details: {
      overview:
        'Debt refinancing for a diversified real estate portfolio seeking improved liquidity and covenant headroom.',
      highlights: [
        'Extended weighted average maturity and reduced near-term amortization burden',
        'Improved covenant flexibility to support ongoing acquisitions and capex',
        'Syndication across relationship and institutional lenders',
      ],
      role: 'Debt advisory',
    },
  },
  {
    clientType: 'Operating Business',
    type: 'M&A',
    sector: 'Healthcare',
    description: 'Healthcare Services Platform',
    value: '$800M',
    valueLabel: 'Purchase Price',
    details: {
      overview:
        'Sell-side M&A for a multi-site healthcare services platform with outpatient and physician services exposure.',
      highlights: [
        'Identification and outreach to strategic acquirers and financial sponsors',
        'Quality-of-earnings coordination and payer mix analysis ahead of launch',
        'Premium outcome through disciplined timing and buyer tension',
      ],
      role: 'Exclusive financial advisor',
    },
  },
  {
    clientType: 'Growth Company',
    type: 'Capital Raising',
    sector: 'Biotech',
    description: 'EcoPha Biotech',
    value: 'Active',
    valueLabel: 'Capital Raise',
    details: {
      overview:
        'Current mandate advising EcoPha Biotech on its capital raise for sustainable bioplastics and aviation fuel from a single non-edible feedstock.',
      highlights: [
        'Flagship Queensland project supported by government co-funding',
        'Cross-border SPV structuring across multiple geographies',
        'Investor positioning for growth-stage biotech and deep-tech institutional capital',
      ],
      role: 'Capital raise advisor',
    },
  },
  {
    clientType: 'Operating Business',
    type: 'Strategic Advisory',
    sector: 'Consumer',
    description: 'Consumer Platform',
    value: 'Confidential',
    valueLabel: 'Strategic Review',
    details: {
      overview:
        'Strategic alternatives assessment for a consumer platform evaluating growth capital, M&A, and partial liquidity options.',
      highlights: [
        'Valuation benchmarking and scenario analysis across strategic and financial buyer universes',
        'Board materials on capital structure trade-offs and timing considerations',
        'Confidential outreach to a targeted set of counterparties',
      ],
      role: 'Strategic advisory',
    },
  },
  {
    clientType: 'Operating Business',
    type: 'Restructuring',
    sector: 'Industrial',
    description: 'Industrial Manufacturer',
    value: 'Confidential',
    valueLabel: 'Recapitalization',
    details: {
      overview:
        'Liability management and recapitalization advisory for an industrial manufacturer facing cyclical demand and covenant pressure.',
      highlights: [
        'Assessment of in-court and out-of-court restructuring alternatives',
        'Negotiation with lenders on amended terms and liquidity facilities',
        'Stakeholder alignment across sponsors, management, and creditor groups',
      ],
      role: 'Restructuring advisory',
    },
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

export const transactionStats = {
  headline: '$2.5B+',
  label: 'in representative transaction value',
};

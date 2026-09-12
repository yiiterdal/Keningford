export interface TransactionPortfolioCompany {
  name: string;
  website: string;
  industry: string;
  hq?: string;
  founded?: string;
  /** Deal / mandate line when HQ/founded is not the primary detail */
  detail?: string;
  wordmark: string;
  /** Real brand logo when available; otherwise the wordmark plate is used */
  logoUrl?: string;
  /** Use a dark plate behind logos designed for dark backgrounds */
  logoOnDark?: boolean;
  /** Exact plate background so letterboxing matches the logo */
  logoPlateBg?: string;
}

/**
 * Closed-transaction carousel companies.
 * Ordered to match the Companies & Mandates one-pager grid (left-to-right, top-to-bottom).
 */
export const transactionPortfolio: TransactionPortfolioCompany[] = [
  {
    name: 'Argoid',
    website: 'https://www.argoid.ai',
    industry: 'Artificial Intelligence',
    hq: 'San Francisco, CA',
    founded: '2018',
    wordmark: 'Argoid',
    logoUrl: '/images/transactions/argoid-v3.png',
    logoOnDark: false,
  },
  {
    name: 'Premier Medical Distribution',
    website: 'https://www.pmdistribution.com',
    industry: 'Healthcare Distribution',
    hq: 'Riverton, UT',
    founded: '2010',
    wordmark: 'Premier Medical',
    logoUrl: '/images/transactions/premier-medical-distribution.png',
  },
  {
    name: 'C21',
    website: '',
    industry: 'Diversified',
    detail: '$30M · Growth equity',
    wordmark: 'C21',
    logoUrl: '/images/transactions/c21.png',
  },
  {
    name: '3DEO',
    website: 'https://www.3deo.co',
    industry: 'Advanced Manufacturing',
    hq: 'Torrance, CA',
    founded: '2016',
    wordmark: '3DEO',
    logoUrl: '/images/transactions/3deo.png',
  },
  {
    name: 'Sfax',
    website: 'https://www.scryptinc.com',
    industry: 'Healthcare Technology',
    hq: 'Austin, TX',
    wordmark: 'Sfax',
    logoUrl: '/images/transactions/sfax.png',
  },
  {
    name: '3CLogic',
    website: 'https://www.3clogic.com',
    industry: 'Enterprise Software',
    hq: 'Rockville, MD',
    founded: '2005',
    wordmark: '3CLogic',
    logoUrl: '/images/transactions/3clogic.png',
  },
  {
    name: 'Gresham',
    website: '',
    industry: 'Private Equity',
    detail: '€575M · Fund III & IV financing',
    wordmark: 'Gresham',
    logoUrl: '/images/transactions/gresham.png',
  },
  {
    name: 'Dealer Trade Network',
    website: 'https://www.dealertradenetwork.com',
    industry: 'B2B Marketplace Software',
    hq: 'Louisville, KY',
    founded: '2004',
    wordmark: 'Dealer Trade',
    logoUrl: '/images/transactions/dealer-trade-network.png',
  },
  {
    name: 'Digital IDView',
    website: 'https://www.idview.com',
    industry: 'Security Software',
    hq: 'Dallas, TX',
    wordmark: 'Digital IDView',
    logoUrl: '/images/transactions/digital-idview.png',
  },
  {
    name: 'AlphaSem INC',
    website: '',
    industry: 'Semiconductors',
    detail: '$12M · Equity',
    wordmark: 'AlphaSem',
    logoUrl: '/images/transactions/alphasem.png',
  },
  {
    name: 'Lovo',
    website: 'https://www.lovo.ai',
    industry: 'AI Voice Technology',
    hq: 'Berkeley, CA',
    founded: '2016',
    wordmark: 'Lovo',
    logoUrl: '/images/transactions/lovo.png',
  },
  {
    name: 'Volt Lithium',
    website: 'https://www.voltlithium.com',
    industry: 'Materials - Public',
    detail: '$10M · Equity raise',
    wordmark: 'Volt Lithium',
    logoUrl: '/images/transactions/volt-lithium.png',
  },
  {
    name: 'WeldBot',
    website: 'https://www.weldbot.com',
    industry: 'Industrial Robotics',
    hq: 'Akron, OH',
    founded: '2017',
    wordmark: 'WeldBot',
    logoUrl: '/images/transactions/weldbot.png',
  },
  {
    name: 'Renegade Petroleum',
    website: '',
    industry: 'Energy',
    detail: '$50M · Early-stage capital',
    wordmark: 'Renegade Petroleum',
    logoUrl: '/images/transactions/renegade-petroleum.png',
  },
  {
    name: 'Touch America',
    website: 'https://www.tamerica.com',
    industry: 'Telecommunications',
    hq: 'Butte, MT',
    wordmark: 'Touch America',
    logoUrl: '/images/transactions/touch-america-v2.png',
    logoOnDark: true,
    logoPlateBg: '#1e4c66',
  },
];

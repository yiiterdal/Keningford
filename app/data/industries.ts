import { pexelsSrc } from '../lib/image-utils';

export interface IndustryArticle {
  title: string;
  href: string;
  type: 'News' | 'Report';
}

export interface Industry {
  slug: string;
  title: string;
  excerpt: string;
  overview: string;
  recentDeals: string[];
  capitalTrends: string[];
  howWeHelp: string[];
  articles: IndustryArticle[];
  imageUrl: string;
  imageAlt: string;
}

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    excerpt:
      'Physician services, outpatient platforms, and healthcare technology — where scale, payer mix, and regulatory quality drive outcomes.',
    overview:
      'Healthcare services remains among the most active sectors in private capital. Sponsors and strategics compete for platforms with recurring revenue, clinical quality, and density advantages. Valuation dispersion between market leaders and the broader field has rarely been wider.',
    recentDeals: [
      'Multi-site healthcare services platform — $800M sell-side process',
      'Outpatient facilities roll-up — growth equity and add-on financing',
      'Behavioral health platform — strategic buyer competition',
    ],
    capitalTrends: [
      'Financial sponsors prioritizing platforms with payer diversity and same-store growth',
      'Debt markets open for quality credits with lender-ready reporting',
      'Strategic acquirers seeking technology-enabled care management capabilities',
    ],
    howWeHelp: [
      'Sell-side and buy-side M&A for healthcare services platforms',
      'Growth equity and minority recapitalizations for scaled providers',
      'Debt advisory and liability management for leveraged platforms',
    ],
    articles: [
      { title: 'Strategic M&A Activity Accelerates in Healthcare Services', href: '/news/strategic-ma-activity-healthcare', type: 'News' },
    ],
    imageUrl: pexelsSrc('https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'),
    imageAlt: 'Modern healthcare facility',
  },
  {
    slug: 'defense',
    title: 'Defense',
    excerpt:
      'Dual-use technology, defense services, and fund placement for investors focused on national security adjacencies.',
    overview:
      'Defense and dual-use technology financing has accelerated as sovereign capital, family offices, and specialist funds increase allocation to national security themes. Processes require sector fluency, regulatory awareness, and credible investor positioning.',
    recentDeals: [
      'Defense-focused fund — anchor investor strategy and placement',
      'Dual-use technology platform — growth capital process',
      'Government services contractor — strategic alternatives review',
    ],
    capitalTrends: [
      'Rising sovereign and specialist fund interest in defense adjacencies',
      'Growth equity for technology platforms with government end markets',
      'Increased scrutiny on compliance, security clearances, and contract concentration',
    ],
    howWeHelp: [
      'Fund placement and LP strategy for defense-focused vehicles',
      'Capital raising for dual-use technology companies',
      'Strategic advisory on partnerships and minority investments',
    ],
    articles: [],
    imageUrl: pexelsSrc('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'),
    imageAlt: 'Defense and aerospace technology',
  },
  {
    slug: 'energy',
    title: 'Energy',
    excerpt:
      'Energy transition, infrastructure, and renewable platforms — where capital intensity meets policy tailwinds.',
    overview:
      'Energy and infrastructure mandates blend project finance, growth equity, and strategic M&A. Investors evaluate asset quality, offtake visibility, and execution risk across conventional and transition assets.',
    recentDeals: [
      'Renewable energy platform — senior debt and project financing',
      'Energy infrastructure carve-out — sell-side advisory',
      'Transition technology company — Series B growth equity',
    ],
    capitalTrends: [
      'Infrastructure funds active in mid-market renewable platforms',
      'Credit funds evaluating contracted cash flow assets',
      'Strategic buyers seeking technology access and geographic fill-in',
    ],
    howWeHelp: [
      'Debt and equity advisory for energy platforms',
      'Sell-side M&A for infrastructure and services businesses',
      'Investor mapping for transition technology companies',
    ],
    articles: [
      { title: 'Q2 2026 Energy & Infrastructure M&A Outlook', href: '/reports/q2-2026-energy-infrastructure-ma-outlook', type: 'Report' },
    ],
    imageUrl: pexelsSrc('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'),
    imageAlt: 'Energy infrastructure',
  },
  {
    slug: 'software',
    title: 'Software',
    excerpt:
      'Vertical software, technology-enabled services, and growth equity — where retention and unit economics drive valuation.',
    overview:
      'Software and technology-enabled services attract both financial and strategic capital, but investors are selective. Businesses with durable retention, expanding ARPU, and credible paths to profitable growth command premium multiples.',
    recentDeals: [
      'Vertical software platform — $150M growth equity financing',
      'Technology platform — $800M strategic sale process',
      'Workflow software company — minority recapitalization',
    ],
    capitalTrends: [
      'Growth equity investors demanding margin discipline alongside growth',
      'Strategic buyers paying for data, compliance, and workflow depth',
      'Debt available for recurring-revenue credits with strong retention',
    ],
    howWeHelp: [
      'Growth equity and private capital raises for software platforms',
      'Sell-side M&A for strategic and financial buyers',
      'Capital structure advisory for founder-led businesses',
    ],
    articles: [
      { title: 'Keningford Advises on $150M Growth Equity Financing', href: '/news/keningford-advises-growth-equity-financing', type: 'News' },
    ],
    imageUrl: pexelsSrc('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'),
    imageAlt: 'Technology and software business',
  },
  {
    slug: 'industrials',
    title: 'Industrials',
    excerpt:
      'Manufacturing, business services, and industrial platforms — cyclicality, consolidation, and operational improvement.',
    overview:
      'Industrials and business services remain core middle-market territory. Sponsors seek platforms with operational improvement potential, fragmented markets, and defensible customer relationships.',
    recentDeals: [
      'Industrial manufacturer — liability management and recapitalization',
      'Business services platform — add-on acquisition financing',
      'Specialty manufacturing — sell-side process',
    ],
    capitalTrends: [
      'Sponsors favoring tuck-in strategies over new platform bets',
      'Credit markets selective on cyclical exposure and leverage',
      'Strategic buyers seeking density and supply chain advantages',
    ],
    howWeHelp: [
      'Sell-side M&A and strategic alternatives for industrial businesses',
      'Debt advisory and restructuring for cyclical companies',
      'Growth capital for technology-enabled services platforms',
    ],
    articles: [],
    imageUrl: pexelsSrc('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'),
    imageAlt: 'Industrial manufacturing facility',
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    excerpt:
      'Specialty finance, asset management, and fintech — where regulation, capital efficiency, and distribution matter.',
    overview:
      'Financial services mandates require nuance on regulatory structure, capital requirements, and investor suitability. We advise on raises, M&A, and strategic partnerships where capital is core to the business model.',
    recentDeals: [
      'Specialty finance platform — growth equity round',
      'Asset manager — fund placement and anchor strategy',
      'Fintech infrastructure — strategic partnership process',
    ],
    capitalTrends: [
      'Institutional interest in niche lending and specialty finance platforms',
      'Fund placement competitive for differentiated strategies',
      'Strategic partnerships replacing full acquisitions in some subsectors',
    ],
    howWeHelp: [
      'Capital raising for specialty finance and fintech platforms',
      'Fund placement and GP advisory',
      'M&A and strategic partnership advisory',
    ],
    articles: [
      { title: 'H1 2026 Middle Market Capital Markets Review', href: '/reports/h1-2026-middle-market-capital-markets-review', type: 'Report' },
    ],
    imageUrl: pexelsSrc('https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'),
    imageAlt: 'Financial services and capital markets',
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

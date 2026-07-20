import { pexelsSrc, unsplashSrc } from '../lib/image-utils';

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
      'Physician services, outpatient platforms, and healthcare technology, where scale, payer mix, and regulatory quality drive outcomes.',
    overview:
      'Healthcare services remains among the most active sectors in private capital. Sponsors and strategics compete for platforms with recurring revenue, clinical quality, and density advantages. Valuation dispersion between market leaders and the broader field has rarely been wider.',
    recentDeals: [
      'Multi-site healthcare services platform, $800M sell-side process',
      'Outpatient facilities roll-up, growth equity and add-on financing',
      'Behavioral health platform, strategic buyer competition',
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
    slug: 'biotech-life-sciences',
    title: 'Biotech & Life Sciences',
    excerpt:
      'Growth-stage biotech, sustainable materials, and life sciences platforms, where scientific validation meets institutional capital.',
    overview:
      'Biotech and life sciences financing rewards preparation. Investors underwrite scientific validation, regulatory pathways, and commercialization milestones alongside team quality. Cross-border capital, government co-funding, and strategic partnerships increasingly shape growth-stage rounds.',
    recentDeals: [
      'Sustainable bioplastics platform, cross-border capital raise with government co-funding',
      'Growth-stage therapeutics company, Series B institutional round',
      'Life sciences tools business, strategic partnership and minority investment',
    ],
    capitalTrends: [
      'Strategic partnerships and licensing complementing equity in growth rounds',
      'Government co-funding and grant validation strengthening institutional processes',
      'Investor focus on regulatory milestones and capital-efficient development plans',
    ],
    howWeHelp: [
      'Capital raising for growth-stage biotech and sustainable materials companies',
      'Strategic partnership and licensing advisory',
      'Investor mapping across specialist funds, strategics, and sovereign capital',
    ],
    articles: [
      { title: 'Keningford Advises EcoPha Biotech on Capital Raise', href: '/news/keningford-advises-ecopha-biotech-capital-raise', type: 'News' },
      { title: '2026 Biotech & Life Sciences Financing Landscape', href: '/reports/2026-biotech-life-sciences-financing-landscape', type: 'Report' },
    ],
    imageUrl: pexelsSrc('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'),
    imageAlt: 'Life sciences laboratory research',
  },
  {
    slug: 'energy',
    title: 'Energy',
    excerpt:
      'Energy transition, infrastructure, and renewable platforms, where capital intensity meets policy tailwinds.',
    overview:
      'Energy and infrastructure mandates blend project finance, growth equity, and strategic M&A. Investors evaluate asset quality, offtake visibility, and execution risk across conventional and transition assets.',
    recentDeals: [
      'Renewable energy platform, senior debt and project financing',
      'Energy infrastructure carve-out, sell-side advisory',
      'Transition technology company, Series B growth equity',
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
      { title: 'Keningford Advises EnergyCite on Capital Raise', href: '/news/keningford-advises-energycite-capital-raise', type: 'News' },
      { title: 'Q2 2026 Energy & Infrastructure M&A Outlook', href: '/reports/q2-2026-energy-infrastructure-ma-outlook', type: 'Report' },
    ],
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Electric power transmission lines and energy infrastructure',
  },
  {
    slug: 'software',
    title: 'Software',
    excerpt:
      'Vertical software, technology-enabled services, and growth equity, where retention and unit economics drive valuation.',
    overview:
      'Software and technology-enabled services attract both financial and strategic capital, but investors are selective. Businesses with durable retention, expanding ARPU, and credible paths to profitable growth command premium multiples.',
    recentDeals: [
      'Vertical software platform, $150M growth equity financing',
      'Technology platform, $800M strategic sale process',
      'Workflow software company, minority recapitalization',
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
    imageUrl: unsplashSrc('photo-1451187580459-43490279c0fa'),
    imageAlt: 'Digital technology network and enterprise software infrastructure',
  },
  {
    slug: 'industrials',
    title: 'Industrials',
    excerpt:
      'Manufacturing, business services, and industrial platforms, cyclicality, consolidation, and operational improvement.',
    overview:
      'Industrials and business services remain core middle-market territory. Sponsors seek platforms with operational improvement potential, fragmented markets, and defensible customer relationships.',
    recentDeals: [
      'Industrial manufacturer, liability management and recapitalization',
      'Business services platform, add-on acquisition financing',
      'Specialty manufacturing, sell-side process',
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
      'Specialty finance, asset management, and fintech, where regulation, capital efficiency, and distribution matter.',
    overview:
      'Financial services mandates require nuance on regulatory structure, capital requirements, and investor suitability. We advise on raises, M&A, and strategic partnerships where capital is core to the business model.',
    recentDeals: [
      'Specialty finance platform, growth equity round',
      'Asset manager, fund placement and anchor strategy',
      'Fintech infrastructure, strategic partnership process',
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

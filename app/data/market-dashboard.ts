export type DashboardCategoryId =
  | 'new-funds'
  | 'major-acquisitions'
  | 'debt-financings'
  | 'vc-rounds'
  | 'ipo-news';

export interface DashboardItem {
  headline: string;
  summary: string;
  sector?: string;
  date: string;
}

export interface DashboardCategory {
  id: DashboardCategoryId;
  label: string;
  items: DashboardItem[];
}

/** Representative weekly snapshot — illustrative, not live market data */
export const marketDashboardWeek = 'Week of July 7, 2026';

export const marketDashboard: DashboardCategory[] = [
  {
    id: 'new-funds',
    label: 'New Funds',
    items: [
      {
        headline: 'Growth equity fund closes $1.2B Fund IV',
        summary: 'Upper-middle-market software and healthcare services focus; first close oversubscribed.',
        sector: 'Multi-sector',
        date: 'Jul 10, 2026',
      },
      {
        headline: 'Defense-focused venture fund launches $350M vehicle',
        summary: 'Dual-use technology mandate with sovereign and family office anchor commitments.',
        sector: 'Defense',
        date: 'Jul 8, 2026',
      },
    ],
  },
  {
    id: 'major-acquisitions',
    label: 'Major Acquisitions',
    items: [
      {
        headline: 'Strategic acquirer pursues healthcare services platform',
        summary: 'Competitive process for multi-site outpatient platform; valuation gap narrowing on quality assets.',
        sector: 'Healthcare',
        date: 'Jul 11, 2026',
      },
      {
        headline: 'Industrial consolidator acquires regional manufacturer',
        summary: 'Add-on acquisition to build density in specialty components; seller retained minority stake.',
        sector: 'Industrials',
        date: 'Jul 9, 2026',
      },
    ],
  },
  {
    id: 'debt-financings',
    label: 'Large Debt Financings',
    items: [
      {
        headline: 'Unitranche facility for business services platform',
        summary: '$280M senior secured package supporting acquisition financing and working capital.',
        sector: 'Business Services',
        date: 'Jul 10, 2026',
      },
      {
        headline: 'Real estate portfolio refinancing extends maturities',
        summary: 'Syndicated term loan with improved covenant package across diversified assets.',
        sector: 'Real Estate',
        date: 'Jul 7, 2026',
      },
    ],
  },
  {
    id: 'vc-rounds',
    label: 'Large VC Rounds',
    items: [
      {
        headline: 'Vertical software company raises $85M Series C',
        summary: 'Institutional growth round led by crossover investor; strong NRR cited in thesis.',
        sector: 'Software',
        date: 'Jul 11, 2026',
      },
      {
        headline: 'Biotech platform secures $60M growth financing',
        summary: 'Capital earmarked for clinical milestones and manufacturing scale-up.',
        sector: 'Biotech',
        date: 'Jul 8, 2026',
      },
    ],
  },
  {
    id: 'ipo-news',
    label: 'IPO News',
    items: [
      {
        headline: 'Technology issuer files confidential S-1',
        summary: 'Vertical SaaS business with 90%+ recurring revenue exploring public market window.',
        sector: 'Software',
        date: 'Jul 9, 2026',
      },
      {
        headline: 'Healthcare services company evaluates dual-track process',
        summary: 'Board assessing strategic sale alongside IPO readiness workstreams.',
        sector: 'Healthcare',
        date: 'Jul 6, 2026',
      },
    ],
  },
];

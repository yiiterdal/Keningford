import { pexelsSrc } from '../lib/image-utils';

export type NewsCategory = 'Firm News' | 'Market Insights' | 'Transactions';

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: NewsCategory;
  imageUrl: string;
  imageAlt: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: 'capital-markets-outlook-2026',
    title: 'Capital Markets Outlook for 2026',
    excerpt:
      'Our perspective on liquidity conditions, valuation dynamics, and strategic opportunities across sectors in the year ahead.',
    content: `As capital markets continue to normalize following a period of elevated volatility, we see selective opportunity for well-positioned issuers and sponsors. Credit markets remain constructive for quality credits, while equity issuance activity is increasingly driven by strategic rather than opportunistic motivations.

For corporate clients, the emphasis is shifting from access to capital alone toward structuring solutions that preserve flexibility and align with long-term strategic objectives. We expect continued strength in bespoke financing, growth equity, and strategic M&A advisory mandates through 2026.`,
    date: 'March 12, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Stock market trading screens and financial data',
  },
  {
    slug: 'keningford-advises-growth-equity-financing',
    title: 'Keningford Partners Advises on Growth Equity Financing',
    excerpt:
      'Firm serves as exclusive financial advisor on a $150 million growth equity round for a leading technology platform.',
    content: `Keningford Partners served as exclusive financial advisor to a leading technology platform in connection with its $150 million growth equity financing. The transaction attracted interest from a select group of institutional growth equity investors.

The financing supports the company's continued expansion across North America and reinforces its position as a category leader. Our team led investor outreach, process management, and negotiation of terms on behalf of the client.`,
    date: 'February 28, 2026',
    category: 'Transactions',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Corporate executives reviewing transaction documents',
  },
  {
    slug: 'strategic-ma-activity-healthcare',
    title: 'Strategic M&A Activity Accelerates in Healthcare Services',
    excerpt:
      'Consolidation trends and sponsor interest continue to drive transaction volume across healthcare services platforms.',
    content: `Healthcare services remains one of the most active sectors for strategic M&A, supported by demographic tailwinds, operational scale benefits, and sustained sponsor interest. Valuations continue to reflect quality differentiation, with market leaders commanding premium multiples.

We are advising clients on both sell-side and buy-side mandates, with particular focus on platforms that combine clinical excellence with scalable operating infrastructure.`,
    date: 'January 15, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Modern hospital corridor and healthcare facility',
  },
  {
    slug: 'keningford-expands-senior-team',
    title: 'Keningford Partners Expands Senior Advisory Team',
    excerpt:
      'Firm strengthens coverage across M&A, capital raising, and restructuring with new senior hires.',
    content: `Keningford Partners is pleased to announce the expansion of its senior advisory team, adding experienced professionals with backgrounds in investment banking, private equity, and corporate development.

The new appointments reflect our commitment to providing clients with senior-level attention and sector expertise on every engagement. The expanded team will support continued growth across our core advisory practices.`,
    date: 'December 3, 2025',
    category: 'Firm News',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/3137058/pexels-photo-3137058.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Manhattan financial district skyline at dusk',
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getLatestNews(limit = 3): NewsItem[] {
  return newsItems.slice(0, limit);
}

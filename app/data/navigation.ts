export const primaryNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/industries', label: 'Industries' },
  { href: '/transactions', label: 'Transactions' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
] as const;

export interface NavDropdownLink {
  label: string;
  href: string;
}

/** Sub-links shown in the "Insights" navbar dropdown. */
export const insightsDropdownLinks: NavDropdownLink[] = [
  { label: 'Overview', href: '/insights' },
  { label: 'News', href: '/news' },
  { label: 'Reports & Primers', href: '/reports' },
  { label: 'Resources', href: '/resources' },
];

/**
 * Pages whose top band is a dark hero, where the navbar can start transparent.
 * Exact matches only: detail pages (news/[slug], reports/[slug], insights/guides/[slug],
 * industries/[slug]) open with a white article header and need the solid navbar.
 */
export const heroOverlayPaths = [
  '/',
  '/capabilities',
  '/industries',
  '/transactions',
  '/insights',
  '/reports',
  '/news',
  '/about',
  '/careers',
  '/contact',
  '/investors',
  '/resources',
  '/raise-readiness',
] as const;

/** Sections whose child pages also use a dark hero. */
export const heroOverlayPrefixes = ['/capabilities'] as const;

export function hasHeroOverlay(pathname: string | null): boolean {
  if (!pathname) return false;
  if (heroOverlayPaths.some((path) => pathname === path)) return true;
  return heroOverlayPrefixes.some((prefix) => pathname.startsWith(`${prefix}/`));
}

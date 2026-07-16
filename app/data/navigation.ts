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

export function hasHeroOverlay(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === '/') return true;
  return heroOverlayPaths.some(
    (path) => path !== '/' && (pathname === path || pathname.startsWith(`${path}/`)),
  );
}

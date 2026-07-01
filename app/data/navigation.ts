export const primaryNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/transactions', label: 'Transactions' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
] as const;

export const heroOverlayPaths = [
  '/',
  '/capabilities',
  '/transactions',
  '/news',
  '/about',
  '/careers',
  '/contact',
] as const;

export function hasHeroOverlay(pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === '/') return true;
  return heroOverlayPaths.some(
    (path) => path !== '/' && (pathname === path || pathname.startsWith(`${path}/`)),
  );
}

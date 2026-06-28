/** Tiny neutral blur used while remote images load */
export const IMAGE_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A0AAA//Z';

/** Next/Image encoder quality (1–100) */
export const IMAGE_QUALITY = 80;

/** Remote source widths — balance quality and payload */
export const REMOTE_HERO_WIDTH = 1920;
export const REMOTE_EDITORIAL_WIDTH = 1920;
export const REMOTE_FULL_WIDTH = REMOTE_HERO_WIDTH;
export const REMOTE_CARD_WIDTH = 1280;
export const REMOTE_NEWS_WIDTH = 1280;

/** Unsplash CDN quality (1–100) */
const UNSPLASH_QUALITY = 80;

export const IMAGE_SIZES = {
  /** Full-viewport bands — cap at 1920px for retina desktop */
  fullBleed: '(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px',
  /** News/home cards: half width on tablet+, full width on mobile; 2× for retina */
  newsCard: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1200px',
  newsArticle: '(max-width: 768px) 100vw, 1200px',
  newsList: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1200px',
} as const;

/** Build a maximum-quality Unsplash URL (JPEG source, no CDN recompression) */
export function unsplashSrc(photoPath: string, width = REMOTE_FULL_WIDTH): string {
  return `https://images.unsplash.com/${photoPath}?w=${width}&q=${UNSPLASH_QUALITY}&fm=jpg&fit=crop`;
}

/** Upgrade a Pexels URL to a higher width without lossy auto-compress */
export function pexelsSrc(url: string, width = REMOTE_NEWS_WIDTH): string {
  const parsed = new URL(url);
  parsed.searchParams.set('w', String(width));
  parsed.searchParams.delete('h');
  parsed.searchParams.set('fit', 'crop');
  parsed.searchParams.delete('auto');
  parsed.searchParams.delete('cs');
  return parsed.toString();
}

export function isLocalImage(src: string): boolean {
  return src.startsWith('/') && !src.startsWith('//');
}

/** Let Next.js optimize all images — source files are pre-compressed locally. */
export function isFullBleedImage(_src: string): boolean {
  return false;
}

/** Default home hero — aerial city skyline photograph */
export const DEFAULT_HERO_IMAGE = '/images/editorial/global-reach.jpg';
export const DEFAULT_HERO_IMAGE_ALT =
  'Aerial view of a major city skyline at golden hour';

/** Capabilities page hero — Manhattan skyline at golden hour */
export const CAPABILITIES_HERO_IMAGE = '/images/editorial/capabilities-hero.jpg';
export const CAPABILITIES_HERO_IMAGE_ALT =
  'Manhattan skyline with the Empire State Building at golden hour';

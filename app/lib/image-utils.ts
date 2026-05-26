/** Tiny neutral blur used while remote images load */
export const IMAGE_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A0AAA//Z';

/** Next/Image encoder quality (1–100) */
export const IMAGE_QUALITY = 85;

/** Remote source widths — match typical viewport; Next/Image serves AVIF/WebP */
export const REMOTE_HERO_WIDTH = 1920;
export const REMOTE_EDITORIAL_WIDTH = 1920;
export const REMOTE_FULL_WIDTH = REMOTE_HERO_WIDTH;
export const REMOTE_CARD_WIDTH = 1280;

export const IMAGE_SIZES = {
  fullBleed: '100vw',
  newsCard: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px',
  newsArticle: '(max-width: 768px) 100vw, 1200px',
  newsList: '(max-width: 768px) 100vw, 50vw',
} as const;

const UNSPLASH_PARAMS = 'auto=format&fit=crop';

/** Build a high-resolution Unsplash URL (path after images.unsplash.com/) */
export function unsplashSrc(photoPath: string, width = REMOTE_FULL_WIDTH): string {
  return `https://images.unsplash.com/${photoPath}?w=${width}&q=80&${UNSPLASH_PARAMS}`;
}

/** Upgrade a Pexels URL to a higher width */
export function pexelsSrc(url: string, width = REMOTE_CARD_WIDTH): string {
  const parsed = new URL(url);
  parsed.searchParams.set('w', String(width));
  parsed.searchParams.delete('h');
  parsed.searchParams.set('fit', 'crop');
  return parsed.toString();
}

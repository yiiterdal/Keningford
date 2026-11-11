import localFont from 'next/font/local';

/** Self-hosted (latin, variable weight) so builds never depend on fetching Google Fonts. */
export const inter = localFont({
  src: './_fonts/inter-latin-variable.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: 'Arial',
});

export const playfair = localFont({
  src: './_fonts/playfair-display-latin-variable.woff2',
  weight: '400 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  adjustFontFallback: 'Times New Roman',
});

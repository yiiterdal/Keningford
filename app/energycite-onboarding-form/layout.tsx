import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import { inter } from '../fonts';

const spaceGrotesk = localFont({
  src: '../_fonts/space-grotesk-latin-variable.woff2',
  weight: '300 700',
  style: 'normal',
  display: 'swap',
  variable: '--font-space-grotesk',
  adjustFontFallback: 'Arial',
});

export default function EnergyCiteOnboardingLayout({ children }: { children: ReactNode }) {
  return <div className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</div>;
}

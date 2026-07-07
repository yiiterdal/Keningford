import { Inter, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function EnergyCiteOnboardingLayout({ children }: { children: ReactNode }) {
  return <div className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</div>;
}

'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const CHROMELESS_PREFIXES = ['/energycite-onboarding-form'];

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideChrome = CHROMELESS_PREFIXES.some(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </>
  );
}


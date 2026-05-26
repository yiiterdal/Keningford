'use client';



import type { ReactNode } from 'react';

import Navbar from './Navbar';

import Footer from './Footer';



export default function SiteChrome({ children }: { children: ReactNode }) {

  return (

    <>

      <Navbar />

      <main className="flex-1 w-full">{children}</main>

      <Footer />

    </>

  );

}


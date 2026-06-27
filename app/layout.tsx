// app/layout.tsx
import './globals.css';
import SiteChrome from './components/SiteChrome';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import JsonLd from './components/JsonLd';
import { inter, playfair } from './fonts';
import { organizationSchema } from './lib/json-ld';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.keningfordpartners.com'),
  title: {
    default: 'Keningford Partners | Strategic Capital Advisory & Financial Services',
    template: '%s | Keningford Partners',
  },
  description:
    'Partnering with institutional investors and leading companies to deliver customized capital solutions. Expert M&A advisory, capital raising, strategic financing, and investor relations services.',
  openGraph: {
    type: 'website',
    siteName: 'Keningford Partners',
    images: ['/images/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-white font-sans antialiased">
        <JsonLd data={organizationSchema} />
        <SmoothScrollProvider>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Keningford | Strategic Capital Advisory & Financial Services',
  description: 'Partnering with institutional investors and leading companies to deliver customized capital solutions. Expert M&A advisory, capital raising, strategic financing, and investor relations services.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

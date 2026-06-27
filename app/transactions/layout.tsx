import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transactions',
  description:
    'Representative M&A, capital raising, strategic advisory, and restructuring engagements across technology, healthcare, real estate, consumer, and industrial sectors.',
};

export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




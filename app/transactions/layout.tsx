import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transactions | Keningford',
  description: 'Representative transactions demonstrating our experience across industries and transaction types.',
};

export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




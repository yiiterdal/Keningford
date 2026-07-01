import Link from 'next/link';
import { transactions } from '../data/transactions';
import TransactionCard from './TransactionCard';

export default function SelectedExperience() {
  const featured = transactions.slice(0, 6);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
              Select Transactions
            </p>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">Representative deal experience</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              A selection of mandates across M&A, capital raising, and strategic advisory.
            </p>
          </div>
          <Link
            href="/transactions"
            className="hidden shrink-0 text-sm font-medium text-navy hover:underline md:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((transaction, index) => (
            <TransactionCard key={`${transaction.description}-${index}`} transaction={transaction} compact />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/transactions" className="text-sm font-medium text-navy hover:underline">
            View all transactions →
          </Link>
        </div>
      </div>
    </section>
  );
}

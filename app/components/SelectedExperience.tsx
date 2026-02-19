import Link from 'next/link';

const transactions = [
  {
    type: 'M&A',
    sector: 'Technology',
    description: 'Strategic sale of technology platform',
    value: '$800M',
  },
  {
    type: 'Capital Raising',
    sector: 'Technology',
    description: 'Series C growth equity financing',
    value: '$150M',
  },
  {
    type: 'Capital Raising',
    sector: 'Real Estate',
    description: 'Debt refinancing for real estate portfolio',
    value: '$500M',
  },
  {
    type: 'M&A',
    sector: 'Healthcare',
    description: 'Acquisition of healthcare services platform',
    value: '$800M',
  },
  {
    type: 'Strategic Advisory',
    sector: 'Consumer',
    description: 'Strategic alternatives assessment',
    value: 'Confidential',
  },
];

export default function SelectedExperience() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-6">Selected Experience</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Representative transactions across industries and transaction types.
            </p>
          </div>
          <Link
            href="/transactions"
            className="hidden md:block text-sm text-navy font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {transactions.map((transaction, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {transaction.type} · {transaction.sector}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {transaction.description}
              </h3>
              <p className="text-sm text-gray-600">{transaction.value}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden text-center">
          <Link
            href="/transactions"
            className="inline-block text-sm text-navy font-medium hover:underline"
          >
            View All Transactions →
          </Link>
        </div>
      </div>
    </section>
  );
}











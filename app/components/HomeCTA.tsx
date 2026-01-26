import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Discuss a Transaction
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            To learn more about our capabilities and how we can assist with your strategic objectives, please contact our team.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-navy text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}













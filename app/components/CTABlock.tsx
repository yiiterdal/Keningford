import Link from 'next/link';

export default function CTABlock() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy mb-4">
            Discuss a Mandate
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            To learn more about our capabilities and how we can assist with your strategic objectives, please contact us.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-navy text-white text-sm font-medium hover:bg-navy-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}













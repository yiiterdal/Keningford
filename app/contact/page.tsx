import Hero from '../components/Hero';

export const metadata = {
  title: 'Contact | Keningford',
  description: 'Request a confidential consultation or meeting with our team.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact"
        subtitle="Request a confidential consultation or meeting with our senior team."
        imageUrl="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Modern office meeting room"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">Schedule a Meeting</h2>
              <p className="text-gray-600 text-sm mb-4">
                Choose a time that works for you to schedule a confidential consultation with our team.
              </p>
              <div className="w-full border border-gray-200 rounded-sm overflow-hidden">
                <iframe
                  src="https://calendly.com/keningford/30min"
                  className="w-full"
                  style={{ minHeight: '700px' }}
                  title="Schedule a meeting with Keningford"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Email</div>
                    <a href="mailto:info@keningfordpartners.com" className="text-navy hover:underline">
                      info@keningfordpartners.com
                    </a>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Phone</div>
                    <div className="text-navy">
                      <a href="tel:+12125551234" className="hover:underline">+1 212 555 12 34</a>
                      <span className="text-gray-600"> (New York)</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Office</div>
                    <div className="text-navy">
                      New York, USA
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are committed to maintaining the highest level of confidentiality and professionalism. 
                  All inquiries are handled with discretion and responded to promptly by our senior team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

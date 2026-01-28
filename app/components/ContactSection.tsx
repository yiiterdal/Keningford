// app/components/ContactSection.tsx
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">Contact</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Please complete the form to request a confidential consultation or meeting with our senior team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
          <div>
            <ContactForm />
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
  );
}

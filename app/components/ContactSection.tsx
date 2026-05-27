// app/components/ContactSection.tsx
import ContactForm from './ContactForm';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';

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
                  <a href={`mailto:${contactEmail}`} className="text-navy hover:underline">
                    {contactEmail}
                  </a>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Phone</div>
                  <a href={contactPhoneHref} className="text-navy hover:underline">
                    {contactPhone}
                  </a>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Office</div>
                  <address className="text-navy not-italic leading-relaxed">
                    {contactAddressLine1}
                    <br />
                    {contactAddressLine2}
                  </address>
                </div>
              </div>
            </div>

            <div className="pt-8">
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

import Hero from '../components/Hero';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { getCalendlyUrl, isCalendlyConfigured } from '../lib/calendly';
import { unsplashSrc } from '../lib/image-utils';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';

export const metadata = {
  title: 'Contact | Keningford Partners',
  description: 'Request a confidential consultation or meeting with our team.',
};

export default function ContactPage() {
  const showCalendly = isCalendlyConfigured();

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Request a confidential consultation."
        subtitle="Request a confidential consultation or meeting with our senior team."
        imageUrl={unsplashSrc('photo-1497366754035-f200968a6e72')}
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
              {showCalendly ? (
                <div className="w-full border border-gray-200 rounded-sm overflow-hidden bg-white">
                  <CalendlyEmbed url={getCalendlyUrl()} />
                </div>
              ) : (
                <div className="w-full border border-gray-200 rounded-sm bg-gray-50 px-6 py-10 text-center">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Online scheduling is being updated. Please reach out by email or phone and we will
                    arrange a time promptly.
                  </p>
                  <a href={`mailto:${contactEmail}`} className="text-navy font-medium hover:underline">
                    {contactEmail}
                  </a>
                </div>
              )}
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
    </>
  );
}

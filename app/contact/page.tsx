import { Suspense } from 'react';
import Hero from '../components/Hero';
import ContactAudienceTabs from '../components/ContactAudienceTabs';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'Contact | Keningford Partners',
  description: 'Request a confidential consultation, refer a client, or connect as an institutional investor.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Request a confidential consultation."
        subtitle="Schedule a meeting, refer a client, or connect with our team as an institutional investor."
        imageUrl={unsplashSrc('photo-1497366754035-f200968a6e72')}
        imageAlt="Modern office meeting room"
      />

      <Suspense fallback={<div className="bg-white py-16" />}>
        <ContactAudienceTabs />
      </Suspense>
    </>
  );
}

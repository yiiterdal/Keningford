// app/privacy/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold text-navy mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-12">Last Updated: January 2024</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as when you fill out our contact form, request information, or communicate with us. This may include your name, email address, company name, phone number, and any other information you choose to provide.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, provide our services, send you relevant information about our services, and improve our website and services.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at info@keningfordpartners.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

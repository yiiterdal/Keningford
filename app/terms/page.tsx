// app/terms/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold text-navy mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Last Updated: January 2024</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Agreement to Terms</h2>
              <p>By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on Keningford's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Disclaimer</h2>
              <p>The materials on Keningford's website are provided on an "as is" basis. Keningford makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Limitations</h2>
              <p>In no event shall Keningford or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Keningford's website.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at info@rockford.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

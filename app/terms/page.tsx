export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the Keningford Partners website.',
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-sans text-[2.25rem] font-medium leading-[1.06] tracking-[-0.03em] text-navy md:text-[3rem]">
            Terms of Service
          </h1>
          <p className="mb-12 text-gray-600">Last Updated: January 2024</p>

          <div className="space-y-8 leading-relaxed text-gray-700">
            <div>
              <h2 className="mb-3 font-sans text-[1.5rem] font-medium tracking-[-0.02em] text-navy md:text-[1.75rem]">Agreement to Terms</h2>
              <p>
                By accessing and using this website, you agree to be bound by these Terms of Service and
                all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using or accessing this site.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-[1.5rem] font-medium tracking-[-0.02em] text-navy md:text-[1.75rem]">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Keningford
                Partners&apos; website for personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-[1.5rem] font-medium tracking-[-0.02em] text-navy md:text-[1.75rem]">Disclaimer</h2>
              <p>
                The materials on Keningford Partners&apos; website are provided on an &quot;as is&quot;
                basis. Keningford Partners makes no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including without limitation, implied warranties
                or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-[1.5rem] font-medium tracking-[-0.02em] text-navy md:text-[1.75rem]">Limitations</h2>
              <p>
                In no event shall Keningford Partners or its suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the materials on Keningford
                Partners&apos; website.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-[1.5rem] font-medium tracking-[-0.02em] text-navy md:text-[1.75rem]">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at
                info@keningfordpartners.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

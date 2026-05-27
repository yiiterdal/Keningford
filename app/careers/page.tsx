import Link from 'next/link';
import Image from 'next/image';
import CareerApplyButton from '../components/CareerApplyButton';
import Hero from '../components/Hero';
import { careerOpenings, careerPartners, careerValues, careersContactEmail, gmailApplicationUrl } from '../data/careers';

export const metadata = {
  title: 'Careers | Keningford Partners',
  description:
    'Join Keningford Partners and build your career in strategic capital advisory, M&A, and institutional finance.',
};

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Careers"
        subtitle="Build your career at the intersection of strategic advisory, capital markets, and complex transactions."
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=3840&q=90&auto=format&fit=crop"
        imageAlt="Professional team collaborating in a modern office"
        primaryCta={{ label: 'View Open Roles', href: '#open-roles' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Keningford Partners is a lean, senior-led investment bank where exceptional people do meaningful work on
              behalf of leading companies and institutional investors. We hire individuals who combine analytical rigor
              with sound judgment, discretion, and a genuine interest in long-term client outcomes.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our culture rewards ownership, intellectual curiosity, and teamwork. If you thrive in fast-paced
              environments and want direct exposure to live transactions, not back-office support. We encourage you to
              explore our current openings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4 text-center">Why Keningford</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              A boutique platform with institutional reach, where your contribution is visible from the first mandate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careerValues.map((value) => (
                <div key={value.title} className="bg-white border border-gray-200 rounded-sm p-8">
                  <h3 className="text-lg font-semibold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-16 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4 text-center">Our Partners</h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                Work directly with senior bankers who lead mandates, not layers of management between you and the
                client.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
                {careerPartners.map((partner) => (
                  <article
                    key={partner.name}
                    className="flex h-full w-full flex-col items-center bg-white border border-gray-200 rounded-sm px-6 py-8"
                  >
                    {partner.imageUrl ? (
                      <div className="relative mx-auto mb-5 h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-200">
                        <Image
                          src={partner.imageUrl}
                          alt={partner.name}
                          fill
                          sizes="80px"
                          className="object-cover object-center grayscale"
                        />
                      </div>
                    ) : (
                      <div
                        className="mx-auto mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1E293B] text-xl font-semibold text-white"
                        aria-hidden
                      >
                        {partner.name.charAt(0)}
                      </div>
                    )}
                    <h3 className="w-full text-center text-base font-semibold text-navy leading-snug">
                      {partner.name}
                    </h3>
                    <p className="mt-1.5 mb-5 min-h-[2.5rem] w-full text-center text-xs font-medium uppercase tracking-wide text-gray-500 leading-snug">
                      {partner.title}
                    </p>
                    <p className="mt-auto w-full text-center text-sm text-gray-600 leading-relaxed text-pretty">
                      {partner.bio}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-roles" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4">Open Positions</h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              We hire selectively for each mandate cycle. Roles listed below reflect our current needs; if timing does
              not align, we still welcome strong intern and experienced-hire inquiries. Include your resume, relevant
              experience, and earliest start date in your application.
            </p>

            <div className="space-y-8">
              {careerOpenings.map((role) => (
                <article
                  key={role.id}
                  className="border border-gray-200 rounded-sm p-8 md:p-10 hover:border-gray-300 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-navy mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                        <span>{role.department}</span>
                        <span aria-hidden>·</span>
                        <span>{role.location}</span>
                        <span aria-hidden>·</span>
                        <span>{role.type}</span>
                        <span aria-hidden>·</span>
                        <span>{role.experience}</span>
                      </div>
                    </div>
                    <CareerApplyButton jobTitle={role.title} />
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{role.summary}</p>

                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5 mb-8">
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5">
                    {role.requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#1E293B] text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-white/10">
              <Image
                src="/images/careers/general-inquiries.jpg"
                alt="Professional team in a meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-[#1E293B]/20" aria-hidden />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">General Inquiries</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Don&apos;t see a role that fits your background? We welcome inquiries from experienced professionals and
                motivated candidates who believe they can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                <a
                  href={gmailApplicationUrl('General Application')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-sm bg-white px-8 py-3.5 text-sm font-semibold text-[#1E293B] transition hover:bg-gray-100"
                >
                  Send Your Resume
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-sm border border-white/80 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
              <p className="mt-8 text-sm text-gray-400">
                Email{' '}
                <a href={`mailto:${careersContactEmail}`} className="text-white hover:underline">
                  {careersContactEmail}
                </a>{' '}
                with the subject line &ldquo;Careers.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

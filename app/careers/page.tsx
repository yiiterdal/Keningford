import CareerApplyButton from '../components/CareerApplyButton';
import Hero from '../components/Hero';
import HomeSectionHeader from '../components/HomeSectionHeader';
import ImageBand from '../components/ImageBand';
import NumberedCard from '../components/NumberedCard';
import { unsplashSrc } from '../lib/image-utils';
import { careerOpenings, careerValues, careersContactEmail, gmailApplicationUrl } from '../data/careers';

export const metadata = {
  title: 'Careers | Keningford Partners',
  description:
    'Join Keningford Partners and build your career in strategic capital advisory, M&A, and institutional finance.',
};

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-[1.5] tracking-[-0.01em] text-gray-600">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-white" aria-hidden>
            <svg className="h-3 w-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CareersPage() {
  return (
    <>
      <Hero
        eyebrow="Careers"
        title="Build your career in complex transactions."
        subtitle="Build your career at the intersection of strategic advisory, capital markets, and complex transactions."
        imageUrl={unsplashSrc('photo-1522071820081-009f0129c71c')}
        imageAlt="Professional team collaborating in a modern office"
        primaryCta={{ label: 'View Open Roles', href: '#open-roles' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
                Working at Keningford
              </p>
              <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
                A lean, senior-led investment bank.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-[1.6] tracking-[-0.01em] text-gray-600 md:text-lg lg:col-span-6 lg:col-start-7 lg:pt-14">
              <p>
                Keningford Partners is a lean, senior led investment bank where exceptional people do meaningful work on
                behalf of leading companies and institutional investors. We hire individuals who combine analytical rigor
                with sound judgment, discretion, and a genuine interest in long term client outcomes.
              </p>
              <p>
                Our culture rewards ownership, intellectual curiosity, and teamwork. If you thrive in fast paced
                environments and want direct exposure to live transactions rather than back office support, we encourage
                you to explore our current openings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            align="center"
            pill="Why Keningford"
            title="A boutique platform with institutional reach."
            description="Your contribution is visible from the first mandate."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {careerValues.map((value, index) => (
              <NumberedCard key={value.title} index={index} title={value.title} body={value.description} />
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="scroll-mt-24 bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Open Positions"
            title="Current openings."
            description="We hire selectively for each mandate cycle. Include your resume, relevant experience, and earliest start date in your application."
          />

          <div className="space-y-3">
            {careerOpenings.map((role) => (
              <article key={role.id} className="bg-[#f0f0f0] p-8 md:p-10">
                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-3 font-sans text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-navy md:text-[28px]">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[role.department, role.location, role.type, role.experience].map((tag) => (
                        <span
                          key={tag}
                          className="bg-white px-3 py-1 text-[12px] font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CareerApplyButton jobTitle={role.title} />
                </div>

                <p className="mb-8 max-w-3xl text-base leading-[1.6] tracking-[-0.01em] text-gray-600">{role.summary}</p>

                <div className="grid grid-cols-1 gap-8 border-t border-navy/[0.08] pt-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <h4 className="mb-4 font-sans text-lg font-medium text-navy">Responsibilities</h4>
                    <CheckList items={role.responsibilities} />
                  </div>
                  <div>
                    <h4 className="mb-4 font-sans text-lg font-medium text-navy">Requirements</h4>
                    <CheckList items={role.requirements} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-gray-500">
            Roles listed reflect our current needs; if timing does not align, we still welcome strong intern and
            experienced-hire inquiries.
          </p>
        </div>
      </section>

      <ImageBand
        image="/images/bands/city-lights-v2.jpg"
        imageAlt="Modern city skyline illuminated at dusk"
        imagePosition="center 40%"
        pill="General Inquiries"
        title="Don't see a role that fits?"
        description="We welcome inquiries from experienced professionals and motivated candidates who believe they can contribute to our team."
        primaryCta={{ label: 'Send Your Resume', href: gmailApplicationUrl('General Application'), external: true }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      >
        <p className="mt-6 text-sm text-white/55">
          Email{' '}
          <a href={`mailto:${careersContactEmail}`} className="text-white hover:underline">
            {careersContactEmail}
          </a>{' '}
          with the subject line &ldquo;Careers.&rdquo;
        </p>
      </ImageBand>
    </>
  );
}

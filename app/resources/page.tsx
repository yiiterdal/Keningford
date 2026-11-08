import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import HomeSectionHeader from '../components/HomeSectionHeader';
import ResourceCard from '../components/ResourceCard';
import { resources } from '../data/resources';
import { unsplashSrc } from '../lib/image-utils';

export const metadata = {
  title: 'Resources | Keningford Partners',
  description:
    'Downloadable checklists, templates, and guides for founders and boards preparing for capital events.',
};

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        title="Tools for capital-ready companies."
        subtitle="Practical checklists and templates for diligence, fundraising, board communication, and investor updates."
        imageUrl={unsplashSrc('photo-1450101499163-c8848c66ca85')}
        imageAlt="Business documents and planning resources"
      />

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <HomeSectionHeader
            pill="Resources"
            title="Checklists and templates."
            description="Enter your work email to access each resource. Our team may follow up with related insights. Materials are for general information only and do not constitute advice or an offer of services."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <HomeCta tone="white" />
    </>
  );
}

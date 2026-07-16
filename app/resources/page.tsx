import Hero from '../components/Hero';
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

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <p className="mx-auto mb-12 max-w-3xl text-sm leading-relaxed text-gray-600">
            Enter your work email to access each resource. Our team may follow up with related insights.
            Materials are for general information only and do not constitute advice or an offer of services.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

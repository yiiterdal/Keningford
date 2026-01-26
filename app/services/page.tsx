// app/services/page.tsx
import Section from '../components/Section';
import ServicesGrid from '../components/ServicesGrid';

export default function Services() {
  return (
    <>
      <Section title="Where we add value">
        <p className="text-gray-600 max-w-2xl">Specialized advisory across capital raising, M&A, and strategic finance for growth-stage companies.</p>
      </Section>

      <ServicesGrid />

      <Section className="mt-8">
        <p className="text-gray-600 max-w-2xl">Engagements are senior-led with clear milestones and consistent communication.</p>
      </Section>
    </>
  );
}

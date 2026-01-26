// app/cases/page.tsx
import Section from '../components/Section';
import CaseStudyCard from '../components/CaseStudyCard';

export default function Cases() {
  return (
    <>
      <Section title="Representative engagements">
        <p className="text-gray-600 max-w-2xl">Selected case studies emphasizing outcomes, not process. Names withheld by request.</p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <CaseStudyCard title="Growth equity placement — fintech" body="Led a targeted syndicate raise, achieving favorable terms and preserving founder control." />
        <CaseStudyCard title="Strategic sale — healthcare platform" body="Managed competitive sale process; optimized timing and buyer selection to maximize value." />
        <CaseStudyCard title="Restructuring & recapitalization" body="Repositioned balance sheet and negotiated creditor terms to enable sustained growth." />
      </div>
    </>
  );
}

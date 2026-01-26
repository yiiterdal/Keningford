// app/team/page.tsx
import Section from '../components/Section';
import TeamCard from '../components/TeamCard';

export default function Team() {
  return (
    <>
      <Section title="Senior advisors">
        <p className="text-gray-600 max-w-2xl">A compact team of senior operators and finance professionals. We partner with founders, not replace them.</p>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <TeamCard name="A. Morgan" title="Founding Partner" bio="20+ years advising growth companies and executing M&A in fintech and healthcare." />
        <TeamCard name="R. Bennett" title="Partner" bio="Capital markets specialist with a focus on growth equity and structured financings." />
        <TeamCard name="E. Clarke" title="Advisory" bio="Former operator and CFO; governance, financial planning, and board counsel." />
      </div>
    </>
  );
}

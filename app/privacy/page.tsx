import CookiePolicyContent from '../components/CookiePolicyContent';

export const metadata = {
  title: 'Privacy & Cookie Policy | Keningford Partners',
  description:
    'Clarification text on processing personal data and cookie policy for Keningford Partners LLC.',
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <CookiePolicyContent />
        </div>
      </div>
    </section>
  );
}

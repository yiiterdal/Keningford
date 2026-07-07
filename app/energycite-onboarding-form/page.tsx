import type { Metadata } from 'next';
import EnergyCiteOnboardingForm from '../components/EnergyCiteOnboardingForm';

export const metadata: Metadata = {
  title: 'EnergyCite Client Onboarding',
  description: 'Confidential client onboarding form for EnergyCite.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function EnergyCiteOnboardingPage() {
  return <EnergyCiteOnboardingForm />;
}

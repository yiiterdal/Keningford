import CapabilityServiceCard from './CapabilityServiceCard';
import type { CapabilityIconId, CapabilityItem } from '../data/capabilities';

interface CapabilityCardProps {
  title: string;
  description: string;
  href: string;
  icon?: CapabilityIconId;
}

export default function CapabilityCard({ title, description, href, icon = 'strategic' }: CapabilityCardProps) {
  const capability: CapabilityItem = { title, description, href, icon };
  return <CapabilityServiceCard capability={capability} />;
}

/** Lenis — light premium feel: low lerp, near-native multipliers */
export const SCROLL_CONFIG = {
  lerp: 0.1,
  wheelMultiplier: 1.05,
  touchMultiplier: 1.05,
  anchorDuration: 1.1,
} as const;

/** Ease-out quint — slow, confident landing for in-page anchors */
export function premiumScrollEasing(t: number): number {
  return 1 - Math.pow(1 - t, 5);
}

export function shouldUseReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

export function shouldLoadHeavyMedia(): boolean {
  if (typeof window === 'undefined') return true;

  const connection = (navigator as Navigator & { connection?: NetworkInformation })
    .connection;
  if (!connection) return true;

  if (connection.saveData) return false;

  const slowTypes = ['slow-2g', '2g'];
  if (connection.effectiveType && slowTypes.includes(connection.effectiveType)) {
    return false;
  }

  return true;
}

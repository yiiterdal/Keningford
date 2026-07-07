import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.keningfordpartners.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/energycite-onboarding-form'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import type { MetadataRoute } from 'next';
import { capabilities } from './data/capabilities';
import { newsItems } from './data/news';

const SITE_URL = 'https://www.keningfordpartners.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/capabilities',
    '/transactions',
    '/news',
    '/careers',
    '/contact',
    '/raise-readiness',
    '/privacy',
    '/terms',
  ];

  const capabilityRoutes = capabilities.map((capability) => capability.href);
  const newsRoutes = newsItems.map((item) => `/news/${item.slug}`);

  return [...staticRoutes, ...capabilityRoutes, ...newsRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/news/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/news/') ? 0.7 : 0.8,
  }));
}

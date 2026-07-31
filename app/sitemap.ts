import type { MetadataRoute } from 'next';
import { capabilities } from './data/capabilities';
import { industries } from './data/industries';
import { investorGuides } from './data/investor-guides';
import { newsItems } from './data/news';
import { reports } from './data/reports';

const SITE_URL = 'https://www.keningfordpartners.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/capabilities',
    '/industries',
    '/transactions',
    '/insights',
    '/investors',
    '/resources',
    '/reports',
    '/news',
    '/careers',
    '/contact',
    '/raise-readiness',
    '/privacy',
    '/terms',
  ];

  const capabilityRoutes = capabilities.map((capability) => capability.href);
  const industryRoutes = industries.map((industry) => `/industries/${industry.slug}`);
  const guideRoutes = investorGuides.map((guide) => `/insights/guides/${guide.slug}`);
  const newsRoutes = newsItems.map((item) => `/news/${item.slug}`);
  const reportRoutes = reports.map((item) => `/reports/${item.slug}`);

  return [
    ...staticRoutes,
    ...capabilityRoutes,
    ...industryRoutes,
    ...guideRoutes,
    ...newsRoutes,
    ...reportRoutes,
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route.startsWith('/news/') || route.startsWith('/reports/') ? 'monthly' : 'weekly',
    priority:
      route === ''
        ? 1
        : route.startsWith('/news/') || route.startsWith('/reports/')
          ? 0.7
          : 0.8,
  }));
}

import { capabilities } from '../data/capabilities';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
} from '../data/contact';
import type { NewsItem } from '../data/news';

const SITE_URL = 'https://www.keningfordpartners.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Keningford Partners',
  url: SITE_URL,
  logo: `${SITE_URL}/images/editorial/global-reach.jpg`,
  email: contactEmail,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactAddressLine1,
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10016',
    addressCountry: 'US',
  },
  founder: {
    '@type': 'Person',
    name: 'Tuna Yilar',
  },
  sameAs: [
    'https://www.linkedin.com/company/keningford-partners/',
    'https://pitchbook.com/profiles/advisor/1405195-84',
    'https://www.crunchbase.com/organization/keningford-partners',
  ],
};

export const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Keningford Partners',
  url: SITE_URL,
  serviceType: capabilities.map((capability) => capability.title),
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tuna Yilar',
  alternateName: 'Haktan Tuna Yilar',
  jobTitle: 'Founder and Managing Partner',
  worksFor: {
    '@type': 'Organization',
    name: 'Keningford Partners',
    url: SITE_URL,
  },
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/images/partners/haktan-tuna-yilar.jpg`,
  sameAs: ['https://www.linkedin.com/in/haktan-tuna-yilar-48311a264/'],
};

export function newsArticleSchema(article: NewsItem) {
  const datePublished = new Date(article.date).toISOString();
  const isFounderArticle = article.slug === 'keningford-partners-launches-in-new-york';

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished,
    image: article.imageUrl.startsWith('http')
      ? article.imageUrl
      : `${SITE_URL}${article.imageUrl}`,
    author: isFounderArticle
      ? personSchema
      : {
          '@type': 'Organization',
          name: 'Keningford Partners',
          url: SITE_URL,
        },
    publisher: {
      '@type': 'Organization',
      name: 'Keningford Partners',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/editorial/global-reach.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/news/${article.slug}`,
    },
  };
}

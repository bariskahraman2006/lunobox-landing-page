import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // admin, api gibi botların girmesini istemediğimiz dizinleri engelleyebiliriz
      disallow: ['/api/'], 
    },
    sitemap: 'https://lunobox.com/sitemap.xml',
  };
}
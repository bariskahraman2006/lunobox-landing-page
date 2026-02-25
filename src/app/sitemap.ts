import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lunobox.com';

  // Planda belirtilen örnekler ve kodladığımız tüm sayfalar
  return [
    { url: `${baseUrl}`, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/lunobox`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/card-packs`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/card-details`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.6 },
    // Plandaki örnek yasal sayfalar
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.3 },
  ];
}
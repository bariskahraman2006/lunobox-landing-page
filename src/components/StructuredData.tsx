// src/components/StructuredData.tsx
import React from 'react';

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'LunoBox',
    description: 'Audio-first play device for children with NFC cards',
    brand: { '@type': 'Brand', name: 'LunoBox' },
    manufacturer: {
      '@type': 'Organization',
      name: 'HEFA Technology Inc.',
      address: { '@type': 'PostalAddress', addressCountry: 'TR' },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
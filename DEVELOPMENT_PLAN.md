# LunoBox Web - Geliştirme Planı

**Proje:** LunoBox Web Sitesi
**Tarih:** Şubat 2025

---

## 1. Figma Tasarımları

**Figma Linki:** https://www.figma.com/design/XPjMhF7LOyZUw6KjqNu4S7/lunobox.com?node-id=251-552&t=0oyHNpG6oVb1p4gN-0

Tüm tasarım değerleri (renkler, tipografi, spacing, component'ler) Figma dosyasından alınmalıdır.

### Mevcut Tasarımlar
- Desktop tasarımı
- Mobile tasarımı

### Design System (Figma'dan alınacak)
- **Typography:** Font isimleri, boyutları, weight'leri
- **Color Palette:** Primary, secondary, accent, background, text renkleri
- **Components:**
  - Button - Default Large
  - Button - Default Medium
  - Button - Secondary Large
  - Navigation
  - Input
  - Product Card
- **Spacing:** Base unit, section padding, gaps

> **Not:** Kodlamaya başlamadan önce Figma'daki Design System sayfasını inceleyin ve CSS variables olarak tanımlayın.

---

## 2. Figma CSS Kullanımı

Figma'dan her sayfa/component için CSS çıktısı alınabilir (Inspect panel veya Dev Mode). Ancak **birebir kopyalamayın**, değer referansı olarak kullanın.

### Figma'dan Alınacaklar

```css
/* Figma CSS çıktısından BU DEĞERLERİ alın: */

/* Renkler */
background: #3B68AB;        → --color-primary: #3B68AB;
color: #505050;             → --color-text: #505050;

/* Typography */
font-family: 'Nunito';      → --font-heading: 'Nunito';
font-size: 48px;            → text-5xl veya text-[48px]
font-weight: 700;           → font-bold
line-height: 1.2;           → leading-tight

/* Spacing */
padding: 16px 24px;         → px-6 py-4
gap: 12px;                  → gap-3
margin-bottom: 32px;        → mb-8

/* Border */
border-radius: 9999px;      → rounded-full
border-radius: 12px;        → rounded-xl
border: 2px solid #3B68AB;  → border-2 border-[--color-primary]

/* Shadow */
box-shadow: 0 4px 12px rgba(0,0,0,0.1); → shadow-lg veya özel tanım
```

### Figma'dan ALINMAYACAKLAR

```css
/* ❌ BUNLARI KULLANMAYIN - Responsive bozar */

position: absolute;
top: 234px;
left: 156px;
width: 1440px;
height: 900px;
```

### Dönüştürme Örneği

**Figma CSS (Ham):**
```css
.button {
  position: absolute;
  left: 640px;
  top: 520px;
  width: 160px;
  height: 56px;
  background: #3B68AB;
  border-radius: 9999px;
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
}
```

**Tailwind'e Çevrilmiş (Doğru):**
```tsx
<button className="px-8 py-4 bg-[#3B68AB] hover:bg-[#164B96] rounded-full font-nunito font-bold text-base text-white transition-colors">
  Join Waitlist
</button>
```

### Sayfa Bazlı CSS Çıktısı Alma

1. Figma'da sayfayı/component'i seçin
2. Sağ panelde **Inspect** veya **Dev Mode** açın
3. CSS değerlerini not alın
4. Yukarıdaki kurallara göre Tailwind'e çevirin

### Değer Karşılık Tablosu

| Figma Değer | Tailwind Class |
|-------------|----------------|
| 4px | 1 (gap-1, p-1, m-1) |
| 8px | 2 |
| 12px | 3 |
| 16px | 4 |
| 20px | 5 |
| 24px | 6 |
| 32px | 8 |
| 40px | 10 |
| 48px | 12 |
| 64px | 16 |
| font-size: 14px | text-sm |
| font-size: 16px | text-base |
| font-size: 18px | text-lg |
| font-size: 20px | text-xl |
| font-size: 24px | text-2xl |
| font-size: 30px | text-3xl |
| font-size: 36px | text-4xl |
| font-size: 48px | text-5xl |
| font-weight: 400 | font-normal |
| font-weight: 500 | font-medium |
| font-weight: 600 | font-semibold |
| font-weight: 700 | font-bold |
| font-weight: 800 | font-extrabold |
| border-radius: 4px | rounded |
| border-radius: 8px | rounded-lg |
| border-radius: 12px | rounded-xl |
| border-radius: 16px | rounded-2xl |
| border-radius: 9999px | rounded-full |

---

## 3. Proje Özeti

LunoBox, çocuklar için ekransız, ses-odaklı bir oyun cihazıdır. NFC kartlar ile hikayeler, sesler ve eğitici içerikler sunar. Bu web sitesi, ürünün tanıtım sayfası ve waitlist toplama platformudur.

**Hedef Kitle:** 0-5 yaş çocukların ebeveynleri
**Durum:** Pre-launch / Waitlist aşaması

---

## 4. Teknoloji Stack'i

### Mevcut
| Teknoloji | Versiyon |
|-----------|----------|
| Next.js | 16.1.6 |
| React | 19.2.3 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |

### Eklenecek
| Teknoloji | Amaç |
|-----------|------|
| **class-variance-authority** | Button varyantları için |
| **React Hook Form + Zod** | Form validasyonu |
| **Google Sheets API (googleapis)** | Waitlist email'leri kaydetme |
| **Google Analytics 4** | Kullanıcı analizi |

```bash
npm install class-variance-authority googleapis zod react-hook-form @hookform/resolvers
```

---

## 5. Proje Yapısı

```
lunobox-web/
├── public/
│   ├── images/
│   │   ├── product/           # Ürün fotoğrafları
│   │   ├── cards/             # Kart paketi görselleri
│   │   └── lifestyle/         # Yaşam tarzı fotoğrafları
│   └── videos/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   │
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts   # Google Sheets'e yazar
│   │
│   ├── components/
│   │   ├── ui/                # Figma Design System'den
│   │   │   ├── Button.tsx     # Default Large, Default Medium, Secondary Large
│   │   │   ├── Input.tsx      # Form input
│   │   │   └── ProductCard.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Navigation component
│   │   │   └── Footer.tsx
│   │   └── sections/          # Hero, HowItWorks, Waitlist vs.
│   │
│   ├── lib/
│   │   ├── google-sheets.ts   # Sheets API helper
│   │   └── validations.ts     # Form validasyonları
│   │
│   └── types/
│       └── index.ts
│
├── .env.local                 # API keys (COMMIT ETME!)
└── .env.example
```

---

## 6. Google Sheets Waitlist Entegrasyonu

### 6.1 Kurulum Adımları

**1. Google Cloud Console'da:**
- Yeni proje oluştur
- Google Sheets API'yi etkinleştir
- Service Account oluştur
- JSON key indir

**2. Google Sheets'te:**
- Yeni spreadsheet oluştur
- İlk satıra başlıklar: `Email | Tarih | Kaynak`
- Service Account email'ini "Editor" olarak paylaş

**3. Environment Variables:**
```bash
# .env.local
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
GOOGLE_SHEETS_CLIENT_EMAIL="lunobox@project-id.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
```

### 6.2 API Route Kodu

```typescript
// src/app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Geçerli bir email giriniz'),
});

async function getGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    const sheets = await getGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    // Yeni satır ekle
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          email,
          new Date().toISOString(),
          'website'
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Geçersiz email' },
        { status: 400 }
      );
    }
    console.error('Sheets error:', error);
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
```

### 6.3 Waitlist Form Component

```typescript
// src/components/WaitlistForm.tsx
'use client';

import { useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Hata oluştu');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Bir hata oluştu');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-4 bg-green-50 rounded-xl">
        <p className="text-green-700 font-semibold">
          Teşekkürler! Waitlist'e eklendiniz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email adresiniz"
        required
        disabled={status === 'loading'}
        className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#3B68AB]"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-[#3B68AB] text-white rounded-full hover:bg-[#164B96] disabled:opacity-50 transition-colors"
      >
        {status === 'loading' ? '...' : 'Katıl'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
      )}
    </form>
  );
}
```

### 6.4 Gerekli Paket

```bash
npm install googleapis zod
```

---

## 7. SEO Optimizasyonu

### 7.1 Meta Tags (layout.tsx)

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://lunobox.com'),
  title: {
    default: 'LunoBox - Çocuklar için Ses Odaklı Oyun',
    template: '%s | LunoBox',
  },
  description: 'LunoBox, NFC kartlarla çalışan ekransız ses oyuncağı. 0-5 yaş çocuklar için hikayeler, sesler ve eğitici içerikler.',
  keywords: ['çocuk oyuncağı', 'ses oyuncağı', 'NFC kart', 'ekransız oyun', 'eğitici oyuncak', 'audio toy'],

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://lunobox.com',
    siteName: 'LunoBox',
    title: 'LunoBox - Çocuklar için Ses Odaklı Oyun',
    description: 'NFC kartlarla çalışan ekransız ses oyuncağı.',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'LunoBox',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'LunoBox',
    description: 'Çocuklar için ses odaklı oyun deneyimi',
    images: ['/images/twitter-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
};
```

### 7.2 Structured Data

```typescript
// src/components/StructuredData.tsx
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
```

### 7.3 Sitemap

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://lunobox.com', lastModified: new Date(), priority: 1 },
    { url: 'https://lunobox.com/privacy', lastModified: new Date(), priority: 0.3 },
    { url: 'https://lunobox.com/terms', lastModified: new Date(), priority: 0.3 },
  ];
}
```

### 7.4 SEO Checklist

- [ ] Her sayfada unique title ve description
- [ ] H1 tag'i her sayfada tek
- [ ] Image'larda alt text
- [ ] Open Graph ve Twitter Card
- [ ] JSON-LD structured data
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] Canonical URL'ler
- [ ] Mobile-friendly
- [ ] HTTPS
- [ ] Core Web Vitals < 2.5s LCP

---

## 8. Performans

### 8.1 Image Optimization

```typescript
import Image from 'next/image';

// Hero image (öncelikli yükle)
<Image
  src="/images/product/lunobox.webp"
  alt="LunoBox cihazı"
  width={600}
  height={400}
  priority
/>

// Diğer görseller (lazy load)
<Image
  src="/images/lifestyle/family.webp"
  alt="Aile ile LunoBox"
  width={400}
  height={300}
  loading="lazy"
/>
```

### 8.2 Font Optimization

```typescript
// layout.tsx
import { Nunito, Inter } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-nunito',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-inter',
});
```

### 8.3 Görsel Formatları

| Format | Kullanım |
|--------|----------|
| WebP | Fotoğraflar (fallback: JPG) |
| SVG | Logo, ikonlar |
| AVIF | Destekleniyorsa (en küçük boyut) |

---

## 9. Kodlama Standartları

### 9.1 Dosya İsimlendirme

| Tür | Format | Örnek |
|-----|--------|-------|
| Component | PascalCase | `HeroSection.tsx` |
| Utility | camelCase | `formatDate.ts` |
| Hook | camelCase | `useScrollPosition.ts` |

### 9.2 Button Component (Figma'dan)

Figma'daki 3 button varyantına göre:

```typescript
// src/components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

// Değerler Figma'dan alınacak (padding, border-radius, font-size vs.)
const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[--color-primary] text-white hover:bg-[--color-primary-hover]',
        secondary: 'bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white',
      },
      size: {
        large: 'px-8 py-4 text-lg rounded-full',   // Figma: Default Large
        medium: 'px-6 py-3 text-base rounded-full', // Figma: Default Medium
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  );
}

// Kullanım:
// <Button variant="default" size="large">Join Waitlist</Button>
// <Button variant="default" size="medium">Learn More</Button>
// <Button variant="secondary" size="large">Contact Us</Button>
```

### 9.3 CSS Variables (Figma'dan alınacak)

```css
/* globals.css - Değerleri Figma Design System'den alın */
:root {
  /* Colors - Figma Color Palette'den */
  --color-primary: /* Figma'dan */;
  --color-primary-hover: /* Figma'dan */;
  --color-secondary: /* Figma'dan */;
  --color-accent-1: /* Figma'dan */;
  --color-accent-2: /* Figma'dan */;
  --color-accent-3: /* Figma'dan */;
  --color-background: /* Figma'dan */;
  --color-text: /* Figma'dan */;
  --color-text-muted: /* Figma'dan */;

  /* Typography - Figma Typography'den */
  --font-heading: /* Figma'dan */;
  --font-body: /* Figma'dan */;
  --font-accent: /* Figma'dan */;

  /* Spacing - Figma'dan */
  --spacing-xs: /* Figma'dan */;
  --spacing-sm: /* Figma'dan */;
  --spacing-md: /* Figma'dan */;
  --spacing-lg: /* Figma'dan */;
  --spacing-xl: /* Figma'dan */;

  /* Border Radius - Figma'dan */
  --radius-sm: /* Figma'dan */;
  --radius-md: /* Figma'dan */;
  --radius-lg: /* Figma'dan */;
  --radius-full: 9999px;
}
```

> **Not:** Figma'daki Inspect panelinden veya Dev Mode'dan bu değerleri alabilirsiniz.

### 9.4 Input Component (Figma'dan)

```typescript
// src/components/ui/Input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-[--color-text]">
          {label}
        </label>
      )}
      <input
        className={`
          px-4 py-3 rounded-full border
          bg-white text-[--color-text]
          placeholder:text-[--color-text-muted]
          focus:outline-none focus:border-[--color-primary]
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
```

### 9.5 ProductCard Component (Figma'dan)

```typescript
// src/components/ui/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  color?: string; // Accent color from Figma
}

export function ProductCard({ title, description, image, color }: ProductCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg"
      style={{ backgroundColor: color }}
    >
      <div className="relative aspect-square">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[--color-text-muted]">{description}</p>
      </div>
    </div>
  );
}
```

### 9.6 Navigation Component (Figma'dan)

```typescript
// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#lunobox', label: 'LunoBox' },
    { href: '#card-packs', label: 'Card Packs' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="LunoBox" width={120} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[--color-text] hover:text-[--color-primary] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="default" size="medium">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon - Figma'dan */}
        </button>
      </div>

      {/* Mobile Menu - Figma Mobile tasarımından */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {/* Mobile nav links */}
        </div>
      )}
    </nav>
  );
}
```

---

## 10. Yapılacaklar (Öncelik Sırasına Göre)

### Aşama 1: Figma Design System Kurulumu
- [ ] Figma'dan renk kodlarını al → `globals.css` CSS variables
- [ ] Figma'dan typography değerlerini al → font tanımlamaları
- [ ] Figma'dan spacing değerlerini al → CSS variables
- [ ] Figma'dan border-radius değerlerini al → CSS variables

### Aşama 2: Component'leri Oluştur (Figma'dan)
- [ ] `Button.tsx` - Default Large, Default Medium, Secondary Large
- [ ] `Input.tsx` - Form input component
- [ ] `ProductCard.tsx` - Ürün kartı
- [ ] `Navbar.tsx` - Navigation (desktop + mobile)
- [ ] `Footer.tsx`

### Aşama 3: Sayfa Bölümlerini Ayır
- [ ] `page.tsx` dosyasını component'lere böl
- [ ] `/components/sections/` klasörü oluştur
- [ ] Her section için ayrı dosya

### Aşama 4: Waitlist Entegrasyonu
- [ ] Google Cloud Console'da proje oluştur
- [ ] Service Account ve API key al
- [ ] Google Sheets oluştur ve paylaş
- [ ] `/api/waitlist/route.ts` oluştur
- [ ] WaitlistForm component'i yap (Input component'ini kullan)
- [ ] Form validasyonu ekle

### Aşama 5: SEO
- [ ] Meta tags ekle
- [ ] Open Graph images hazırla (1200x630)
- [ ] JSON-LD structured data
- [ ] sitemap.ts oluştur
- [ ] robots.txt ekle

### Aşama 6: Görseller
- [ ] Placeholder'ları gerçek ürün fotoğraflarıyla değiştir
- [ ] WebP formatına dönüştür
- [ ] Alt text'leri yaz

### Aşama 7: Responsive & Test
- [ ] Figma Mobile tasarımına göre responsive kontrol
- [ ] Desktop/Mobile breakpoint'leri Figma'dan al
- [ ] Cross-browser test (Chrome, Safari, Firefox)
- [ ] Lighthouse audit (hedef: 90+)
- [ ] Form test
- [ ] Error state'leri kontrol

---

## 11. Deployment

### Vercel 

```bash
# Vercel CLI ile deploy
npm i -g vercel
vercel

# Environment variables Vercel Dashboard'dan ekle:
# - GOOGLE_SHEETS_PRIVATE_KEY
# - GOOGLE_SHEETS_CLIENT_EMAIL
# - GOOGLE_SHEETS_SPREADSHEET_ID
```

### Environment Variables (.env.example)

```bash
# Google Sheets API
GOOGLE_SHEETS_PRIVATE_KEY="your-private-key"
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="spreadsheet-id-from-url"

# Analytics (opsiyonel)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## 12. Dikkat Edilecekler

### Güvenlik
- `.env.local` dosyasını ASLA commit etme
- API key'leri environment variable olarak sakla
- Form input'larını validate et

### Performans
- Image'ları WebP formatında kullan
- Next.js Image component kullan
- Font'ları `display: swap` ile yükle
- Gereksiz JavaScript yükleme

### UX
- Loading state göster
- Error mesajları anlaşılır olsun
- Mobile'da touch target min 44x44px
- Form submit sonrası feedback ver

### Kod Kalitesi
- TypeScript strict mode
- ESLint kurallarına uy
- Component'leri küçük tut
- Tekrar eden kodu DRY yap

---

## 13. Google Sheets Yapısı

Sheets'te şu sütunlar olmalı:

| A | B | C |
|---|---|---|
| **Email** | **Tarih** | **Kaynak** |
| user@example.com | 2025-02-16T10:30:00Z | website |
| test@test.com | 2025-02-16T11:45:00Z | website |

- **Email:** Kullanıcının email adresi
- **Tarih:** ISO format kayıt tarihi
- **Kaynak:** Nereden geldiği (şimdilik hep "website")

Sheets üzerinden:
- Toplam kayıt sayısını görebilirsiniz
- Tarihe göre filtreleyebilirsiniz
- CSV olarak export edebilirsiniz
- Email listesini kopyalayıp başka araçlarda kullanabilirsiniz

---

## 14. Seçilen Mimari

Waitlist sistemi aşağıdaki mimari ile uygulanacaktır:

**Next.js API Route + Google Sheets (Service Account)**

---

### 14.1 Runtime Requirement (CRITICAL)

Google Sheets entegrasyonu `googleapis` paketi kullanır.
Bu nedenle waitlist API **Edge runtime kullanamaz**.

Tüm waitlist endpoint'leri şu satırı içermelidir:

```typescript
export const runtime = "nodejs";
```

**Bu kural zorunludur.**

---

### 14.2 Google Sheets Data Model

Yeni bir spreadsheet oluşturulacaktır:

- **Name:** LunoBox Waitlist
- **Kolonlar:**

| A | B | C |
|---|---|---|
| Email | Date | Source |

Her kayıt şu formatta eklenecektir:

```
email@example.com | ISO timestamp | website
```

Service account email bu sheet'e **Editor** olarak eklenecektir.

---

### 14.3 Environment Variables

Projeye aşağıdaki environment variable'lar eklenecektir:

```bash
GOOGLE_SHEETS_PRIVATE_KEY
GOOGLE_SHEETS_CLIENT_EMAIL
GOOGLE_SHEETS_SPREADSHEET_ID
```

`.env.local` dosyası repo'ya **commit edilmeyecektir**.

---

### 14.4 Waitlist API Endpoint

Yeni endpoint oluşturulacaktır:

```
src/app/api/waitlist/route.ts
```

**Endpoint sorumlulukları:**
1. Request body validation (Zod)
2. Honeypot spam koruması
3. Duplicate email kontrolü
4. Google Sheets'e yeni satır ekleme

---

### 14.5 Request Body Format

```json
{
  "email": "user@example.com",
  "company": ""
}
```

---

### 14.6 Minimum Spam Protection (MVP)

MVP aşamasında aşağıdaki koruma uygulanacaktır:

**Honeypot Field**

Frontend formda gizli input bulunacaktır:

```html
<input type="text" name="company" style="display:none" />
```

Bu alan doluysa:
- İstek bot kabul edilir
- Google Sheets'e kayıt yapılmaz
- API yine **success** döner (bot'a ipucu vermemek için)

Bu yöntem pre-launch için yeterlidir.

---

### 14.7 Duplicate Email Protection

Email eklenmeden önce:
1. Sheet1 A sütunu okunacaktır
2. Email normalize edilecektir (`lowercase` + `trim`)
3. Eğer email zaten varsa yeni satır eklenmeyecektir
4. API yine **success** dönecektir

**Amaç:** Waitlist'in temiz kalması.

---

### 14.8 Frontend Waitlist Form Requirements

Form aşağıdaki özellikleri içermelidir:

- [ ] `POST` → `/api/waitlist`
- [ ] Loading state
- [ ] Success state ("You're on the list!")
- [ ] Error state
- [ ] Hidden honeypot input (`name="company"`)

Bu özellikler MVP için **zorunludur**.

---

### 14.9 Future Phase (Not in MVP)

Aşağıdakiler daha sonra eklenecektir:

| Özellik | Açıklama |
|---------|----------|
| Rate limiting | Upstash / Vercel KV |
| Analytics | Event tracking |
| Email automation | Welcome email |
| Database migration | Supabase / Postgres |

Bu özellikler MVP scope **dışındadır**.

---

**Son Güncelleme:** Şubat 2025

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData"; // Yapılandırılmış Veri

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
});

// Planda istenen Global SEO ve Metadata ayarları
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
    locale: 'en_US', // Site İngilizce olduğu için
    url: 'https://lunobox.com',
    siteName: 'LunoBox',
    title: 'LunoBox - Çocuklar için Ses Odaklı Oyun',
    description: 'NFC kartlarla çalışan ekransız ses oyuncağı.',
    images: [{
      url: '/images/og-image.jpg', // Aşama 6'da bu resmi ekleyeceğiz
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
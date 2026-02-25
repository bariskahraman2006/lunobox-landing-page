import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/main/HeroSection";
import { WhatIsLunoBoxSection } from "@/components/sections/main/WhatIsLunoBoxSection";
import { VideoSection } from "@/components/sections/main/VideoSection";
import { HowItWorksSection } from "@/components/sections/main/HowItWorksStepsSection";
import { WhatKidsCanDoSection } from "@/components/sections/main/WhatKidsCanDoSection";
import { DiscoverCardpacksSection } from "@/components/sections/main/DiscoverCardpacksSection";
import { DailyLifeSection } from "@/components/sections/main/LunoBoxInDailyLifeSection";
import { WaitlistSection } from "@/components/sections/main/WaitlistSection"; // YENİ EKLENDİ

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-nunito text-text-main bg-bg-2">
      {/* Sitenin Sabit Üst Menüsü */}
      <Navbar />
      
      {/* Ana Sayfa Akışı (Sırasıyla Yüklediğin Görsellere Göre Kodlandı) */}
      <article className="flex-1 w-full">
        <HeroSection />
        <WhatIsLunoBoxSection />
        <VideoSection />
        <HowItWorksSection />
        <WhatKidsCanDoSection />
        <DiscoverCardpacksSection />
        <DailyLifeSection />
        <WaitlistSection /> {/* ANA SAYFA KAPANIŞI */}
      </article>

      {/* Sitenin Sabit Alt Menüsü */}
      <Footer />
    </main>
  );
}
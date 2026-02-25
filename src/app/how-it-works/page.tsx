import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/how-it-works/HowItWorksHeroSection";
import { StepByStepTimelineSection } from "@/components/sections/how-it-works/StepByStepTimelineSection";
import { DiscoverModesSection } from "@/components/sections/how-it-works/DiscoverModesSection"; // YENİ EKLENDİ
import { VideoSection } from "@/components/sections/main/VideoSection"; 

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito text-text-main bg-bg-2">
      <Navbar />
      
      <article className="flex-1 w-full">
        {/* 1. Hero Alanı */}
        <HeroSection />
        
        {/* 2. Adım Adım Zaman Çizelgesi */}
        <StepByStepTimelineSection />
        
        {/* 3. Oyun Modları (Yeni Eklenen) */}
        <DiscoverModesSection />
        
        {/* 4. Ana Sayfadan Tekrar Kullanılan Video Bileşeni */}
        <VideoSection />
      </article>

      <Footer />
    </main>
  );
}
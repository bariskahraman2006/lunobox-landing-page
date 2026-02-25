import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/lunobox/LunoBoxHeroSection";
import { WhatsInsideSection } from "@/components/sections/lunobox/WhatsInsideSection";
import { OurStorySection } from "@/components/sections/lunobox/OurStorySection";
import { HowItWorksSection } from "@/components/sections/main/HowItWorksStepsSection";
import { BuiltForPlaySection } from "@/components/sections/lunobox/BuiltForPlaySection";
import { VoiceRecordingSection } from "@/components/sections/lunobox/VoiceRecordingSection"; // YENİ EKLENDİ
import { ParentAppSection } from "@/components/sections/lunobox/ParentAppSection"; // YENİ EKLENDİ
import { ReviewsSection } from "@/components/sections/lunobox/ReviewsSection"; // YENİ EKLENDİ

export default function LunoBoxPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito text-text-main bg-bg-2">
      <Navbar />
      
      <article className="flex-1 w-full">
        <HeroSection />
        <WhatsInsideSection />
        <OurStorySection />
        <HowItWorksSection />
        <BuiltForPlaySection />
        
        <VoiceRecordingSection /> {/* YENİ */}
        <ParentAppSection /> {/* YENİ */}
        <ReviewsSection /> {/* YENİ VE FİNAL */}
        
      </article>

      <Footer />
    </main>
  );
}
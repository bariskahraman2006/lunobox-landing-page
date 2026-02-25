import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CardPacksGridSection } from "@/components/sections/card-packs/CardPacksGridSection";
import { GrowingLibrarySection } from "@/components/sections/card-packs/GrowingLibrarySection";

export default function CardPacksPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito text-text-main bg-bg-2">
      <Navbar />
      
      <article className="flex-1 w-full">
        {/* 1. Ürün Mağaza Izgarası */}
        <CardPacksGridSection />
        
        {/* 2. Büyüyen Kütüphane (Waitlist) */}
        <GrowingLibrarySection />
      </article>

      <Footer />
    </main>
  );
}
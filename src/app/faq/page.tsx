import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/sections/faq/FAQSection";

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito text-text-main bg-bg-2">
      <Navbar />
      
      <article className="flex-1 w-full">
        {/* Sıkça Sorulan Sorular Bileşeni */}
        <FAQSection />
      </article>

      <Footer />
    </main>
  );
}
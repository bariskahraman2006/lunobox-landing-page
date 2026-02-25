import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito text-text-main bg-bg-2">
      <Navbar />
      
      <article className="flex-1 w-full">
        {/* İletişim Formu Bileşeni */}
        <ContactSection />
      </article>

      <Footer />
    </main>
  );
}
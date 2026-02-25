import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CardDetailsSection } from "@/components/sections/card-details/CardDetailsSection";

export default function CardDetailsPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito text-text-main bg-bg-2">
      <Navbar />
      
      <article className="flex-1 w-full">
        <CardDetailsSection />
      </article>

      <Footer />
    </main>
  );
}
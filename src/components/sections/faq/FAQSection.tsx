"use client"; // Akordeon etkileşimi için client component yapıyoruz

import React, { useState } from 'react';
import Link from 'next/link'; // DÜZELTME 1: Next.js Link bileşeni eklendi
import { Button } from "@/components/ui/Button";

// Tasarımdaki örnek sorular ve cevapları
const faqs = [
  {
    id: 1,
    question: "What is LunoBox?",
    answer: "LunoBox is a screen-light, audio-first learning device that helps kids explore stories, games, and learning activities using physical NFC cards."
  },
  {
    id: 2,
    question: "Does LunoBox have a screen?",
    answer: "LunoBox features a simple, low-resolution dot-matrix display. It is designed to support the audio experience with gentle visual cues, not to hold their gaze like a smartphone or tablet."
  },
  {
    id: 3,
    question: "How do the NFC cards work?",
    answer: "Simply place a card on top of LunoBox. The device instantly recognizes it and starts playing the corresponding story, sound, or game."
  },
  {
    id: 4,
    question: "Do I need Wi-Fi to use it?",
    answer: "Wi-Fi is only needed for the initial setup and to download new card packs via the parent app. Once downloaded, LunoBox works completely offline."
  },
  {
    id: 5,
    question: "Is it safe for young children?",
    answer: "Yes, LunoBox is made from durable, child-safe materials. It contains no microphones, cameras, or always-listening technology."
  }
];

export const FAQSection = () => {
  // İlk sorunun varsayılan olarak açık gelmesi için id'sini (1) state'e veriyoruz
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#DFEBF3] pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px] min-h-screen">
      <div className="max-w-[1000px] mx-auto px-[16px] md:px-[40px]">
        
        {/* CSS Flex/Grid ile Mobil ve Masaüstü Yerleşimi */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] relative">
          
          {/* Sol Sütun: Başlık ve "Daha fazla yardım" (Masaüstünde Sabit/Sticky) */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left md:sticky md:top-[160px] h-fit z-10">
            <h1 className="text-[36px] md:text-[44px] font-extrabold text-[#3A5B93] leading-[1.1] tracking-tight flex flex-col items-center md:items-start gap-[8px] mb-[40px]">
              Frequently Asked
              {/* Harika Detay: Mobilde Sarı, Masaüstünde Yeşil Rozet */}
              <span className="inline-block bg-[#F2BA44] md:bg-[#A8C464] text-white px-[20px] py-[4px] rounded-[16px] -rotate-3 shadow-sm">
                Questions
              </span>
            </h1>

            {/* MASAÜSTÜ: "Daha fazla yardım" alanı (Mobilde gizli, sol sütunda kalıyor) */}
            <div className="hidden md:flex flex-col items-start mt-[40px]">
              <p className="text-[#3A5B93] font-bold text-[18px] mb-[16px]">
                Need more help?
              </p>
              {/* DÜZELTME 2: Masaüstü butonu Link içine alındı */}
              <Link href="/contact">
                <Button variant="default" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white shadow-md rounded-full px-[32px] mb-[12px]">
                  Contact Us
                </Button>
              </Link>
              <p className="text-[#3A5B93]/80 font-accent-hand text-[16px]">
                Still have questions?
              </p>
            </div>
          </div>

          {/* Sağ Sütun: Akordeon Soru Listesi */}
          <div className="w-full md:w-2/3 flex flex-col gap-[16px] z-10">
            {/* Ortadaki o yatay kesik mavi çizgi detayı (Mobilde 3. sorunun arkasında görünüyor) */}
            <div className="md:hidden absolute top-[50%] left-[10%] right-[10%] border-t-[2px] border-dashed border-[#4168A6]/40 z-[-1] flex items-center justify-center">
              <div className="absolute w-[16px] h-[16px] border-t-[2px] border-r-[2px] border-[#4168A6]/40 rotate-45 bg-[#DFEBF3]"></div>
            </div>

            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-[16px] md:rounded-[20px] shadow-sm border-[1px] border-white/50 overflow-hidden transition-all duration-300"
                >
                  {/* Akordeon Başlığı (Tıklanabilir Alan) */}
                  <button 
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-[20px] md:p-[24px] text-left focus:outline-none group"
                  >
                    <h3 className="text-[#3A5B93] font-bold text-[16px] md:text-[18px] pr-[16px] group-hover:text-[#4168A6] transition-colors">
                      {faq.question}
                    </h3>
                    
                    {/* Sağdaki Yuvarlak Ok İkonu */}
                    <div className={`w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex-shrink-0 rounded-full bg-[#4168A6] text-white flex items-center justify-center transition-transform duration-300 shadow-sm ${isOpen ? 'rotate-180 bg-[#3A5B93]' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </button>

                  {/* Akordeon İçeriği (Cevap) */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-[20px] md:p-[24px] pt-0 text-[#3A5B93]/80 font-medium text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* MOBİL: "Daha fazla yardım" alanı (Sadece mobilde en altta görünür) */}
          <div className="md:hidden w-full flex flex-col items-center text-center mt-[40px] z-10">
            <p className="text-[#3A5B93] font-bold text-[18px] mb-[16px]">
              Need more help?
            </p>
            {/* DÜZELTME 3: Mobil butonu Link içine alındı */}
            <Link href="/contact">
              <Button variant="default" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white shadow-md rounded-full px-[32px] mb-[12px]">
                Contact Us
              </Button>
            </Link>
            <p className="text-[#3A5B93]/80 font-accent-hand text-[16px]">
              Still have questions?
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
import React from 'react';
import Link from 'next/link'; // DÜZELTME 1: Next.js Link bileşeni eklendi
import { Button } from "@/components/ui/Button";

export const DiscoverCardpacksSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px]">
        
        {/* Üst Kısım: Başlıklar ve Açıklamalar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[80px] gap-[24px]">
          <div className="max-w-[350px]">
            <h2 className="text-[#3A5B93] font-extrabold text-[20px] md:text-[24px] mb-[12px] leading-tight">
              Card Packs for every kind of curiosity
            </h2>
            <p className="text-[#3A5B93]/80 text-[16px] md:text-[18px] font-medium leading-relaxed">
              Stories, sounds, and ideas — each pack designed around a theme.
            </p>
          </div>
          
          <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px]">
            Discover
            <span className="inline-block bg-[#4168A6] text-white px-[20px] md:px-[24px] py-[4px] rounded-[16px] -rotate-3 shadow-sm">
              cardpacks
            </span>
          </h1>
        </div>

        {/* Kartlar ve Dalgalı Çizgi Alanı */}
        <div className="relative w-full flex justify-center items-center py-[60px]">
          
          {/* Arka Plandaki Dalgalı Çizgi */}
          <div className="absolute top-1/2 left-[50%] z-0 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden w-[200vw] flex justify-center pointer-events-none">
            <svg width="2400" height="40" viewBox="0 0 2400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20 Q 60 0 120 20 T 240 20 T 360 20 T 480 20 T 600 20 T 720 20 T 840 20 T 960 20 T 1080 20 T 1200 20 T 1320 20 T 1440 20 T 1560 20 T 1680 20 T 1800 20 T 1920 20 T 2040 20 T 2160 20 T 2280 20 T 2400 20" stroke="#4168A6" strokeWidth="3" strokeDasharray="8 8" opacity="0.3"/>
            </svg>
          </div>

          {/* Tek Parça Kart Grubu */}
          <div className="relative z-10 w-full flex justify-center">
            <img 
              src="/images/cards-group.svg" 
              alt="Luno Card Packs Group" 
              style={{ width: '1077.14px', maxWidth: '100%', height: 'auto' }}
              className="object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>

        {/* Alt Kısım: Buton ve Metin */}
        <div className="flex flex-col items-center mt-[80px]">
          {/* DÜZELTME 2: Buton bir Link içine alındı ve hedefi '/card-packs' yapıldı */}
          <Link href="/card-packs">
            <Button variant="default" size="large" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white font-bold shadow-md text-[18px] md:text-[20px] px-[40px] h-[56px] rounded-full mb-[16px] transition-transform hover:-translate-y-1">
              Discover Card Packs
            </Button>
          </Link>
          <p className="text-[#3A5B93]/80 font-accent-hand text-[16px] md:text-[18px]">
            Each card pack is designed for a different age and interest.
          </p>
        </div>

      </div>
    </section>
  );
};
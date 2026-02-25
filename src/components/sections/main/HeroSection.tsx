/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from "@/components/ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#C5E1F3] pt-[120px] pb-[80px] md:pt-[180px] md:pb-[120px] overflow-hidden min-h-screen lg:min-h-0 lg:h-[800px] flex items-center">
      
      {/* Arka Plan Çizimleri (Doodles) - Tasarımdaki Ruhu Veren Kısım */}
      <img src="/images/doodle-cloud.svg" alt="" className="absolute top-[10%] right-[5%] w-[300px] opacity-80 z-0 hidden md:block" />
      <img src="/images/doodle-sun.svg" alt="" className="absolute bottom-[10%] right-[35%] w-[200px] opacity-80 z-0 hidden md:block" />

      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] w-full grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center relative z-10">
        
        {/* Sol Taraf: Metinler ve Rozetler */}
        <div className="flex flex-col items-start relative">
          <h1 className="text-[48px] md:text-[64px] font-extrabold text-[#3A5B93] leading-[1.1] tracking-tight mb-[24px]">
            A <span className="inline-block bg-[#4168A6] text-white px-[16px] py-[4px] rounded-[16px] shadow-sm transform -rotate-2">sound-first</span> play<br />
            audio buddy with a<br />
            <span className="inline-block bg-[#A8C464] text-white px-[16px] py-[4px] rounded-[16px] shadow-sm transform rotate-1">dot-matrix</span> display
          </h1>

          {/* Sağa giden kesik ok çizimi */}
          <img src="/images/doodle-arrow-right.svg" alt="" className="absolute right-[-80px] top-[35%] w-[180px] hidden lg:block" />

          <p className="text-[#3A5B93]/80 text-[18px] md:text-[20px] font-medium mb-[40px] max-w-[400px]">
            Tap an NFC card to explore sounds, stories, and play — at their own pace.
          </p>

          <Button variant="default" size="large" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white shadow-md text-[20px] px-[40px] rounded-full mb-[16px]">
            How it works
          </Button>

          <div className="flex items-center gap-[8px] text-[#3A5B93]/80 font-accent-hand text-[16px]">
            <span>☆☆☆</span>
            <span>Built for independent play</span>
          </div>
        </div>

        {/* Sağ Taraf: TEK PARÇA SVG GÖRSELİ */}
        <div className="relative flex justify-center lg:justify-end items-center mt-[40px] md:mt-0">
          <div className="relative w-full max-w-[628px] z-10 flex justify-center">
            <img 
              src="/images/hero-device.svg" 
              alt="LunoBox Device" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};
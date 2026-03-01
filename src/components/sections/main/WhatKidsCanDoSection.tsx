/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from "@/components/ui/Button";

export const WhatKidsCanDoSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Başlık */}
        <div className="text-center mb-[60px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#3A5B93] tracking-tight leading-[1.3] flex flex-col md:flex-row items-center justify-center gap-[8px] md:gap-[12px]">
            <span>What kids can do</span>
            <span className="flex items-center gap-[8px]">
              <span>with</span>
              <span className="inline-block bg-[#A8C464] text-white px-[20px] py-[4px] rounded-[12px] -rotate-3 shadow-sm">
                LunoBox?
              </span>
            </span>
          </h2>
        </div>

        {/* 3 Renkli SVG Etiket Kartı ve Dalgalı Çizgi */}
        <div className="relative w-full max-w-[1100px] flex flex-col md:flex-row justify-center items-center md:items-start gap-[40px] lg:gap-[78px] mb-[40px]">
          
          {/* MASAÜSTÜ İÇİN DALGALI KESİK ÇİZGİ (Sadece geniş ekranlarda görünür 'hidden md:flex') */}
          <div className="absolute top-[90px] left-[50%] z-0 transform -translate-x-1/2 overflow-hidden w-[200vw] flex justify-center pointer-events-none hidden md:flex">
            <svg width="2400" height="40" viewBox="0 0 2400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SADECE BURASI DEĞİŞTİ: stroke rengi #88ACE2 oldu ve net görünmesi için opacity kaldırıldı */}
              <path d="M0 20 Q 60 0 120 20 T 240 20 T 360 20 T 480 20 T 600 20 T 720 20 T 840 20 T 960 20 T 1080 20 T 1200 20 T 1320 20 T 1440 20 T 1560 20 T 1680 20 T 1800 20 T 1920 20 T 2040 20 T 2160 20 T 2280 20 T 2400 20" stroke="#88ACE2" strokeWidth="3" strokeDasharray="8 8" />
            </svg>
          </div>
          
          {/* Kart 1: Mavi Etiket SVG (302x185) */}
          <div className="relative z-10 w-full max-w-[302px] shrink-0 hover:-translate-y-2 transition-transform duration-300">
            <img 
              src="/images/label-blue.svg" 
              alt="Listen and imagine" 
              className="w-full h-auto md:w-[302px] md:h-[185px] object-contain mx-auto drop-shadow-md" 
            />
          </div>

          {/* Kart 2: Yeşil Etiket SVG (302x185) */}
          <div className="relative z-10 w-full max-w-[302px] shrink-0 hover:-translate-y-2 transition-transform duration-300 md:mt-[41px]">
            <img 
              src="/images/label-green.svg" 
              alt="Learn through play" 
              className="w-full h-auto md:w-[302px] md:h-[185px] object-contain mx-auto drop-shadow-md" 
            />
          </div>

          {/* Kart 3: Sarı Etiket SVG (302x185) */}
          <div className="relative z-10 w-full max-w-[302px] shrink-0 hover:-translate-y-2 transition-transform duration-300">
            <img 
              src="/images/label-yellow.svg" 
              alt="Grow at their own pace" 
              className="w-full h-auto md:w-[302px] md:h-[185px] object-contain mx-auto drop-shadow-md" 
            />
          </div>

        </div>

        {/* Alt Açıklama ve Buton */}
        <div className="mt-[40px] md:mt-[60px] flex flex-col items-center text-center">
          <p className="text-[#3A5B93]/80 text-[16px] md:text-[18px] max-w-[600px] mb-[24px] font-medium">
            Open-ended play that grows with their curiosity — without screens, scores, or pressure.
          </p>
          <Button variant="default" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white shadow-md text-[16px] px-[32px] py-[12px] h-auto rounded-full font-bold transition-transform hover:-translate-y-1">
            See how it plays
          </Button>
        </div>

      </div>
    </section>
  );
};
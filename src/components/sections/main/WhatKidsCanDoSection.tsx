import React from 'react';
import { Button } from "@/components/ui/Button";

export const WhatKidsCanDoSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
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

        {/* 3 Renkli Özellik Kartı */}
        <div className="relative w-full max-w-[1000px] flex flex-col md:flex-row justify-between gap-[50px] md:gap-[24px]">
          
          {/* Arka Plandaki Kesik Çizgi (Masaüstünde tam genişlik, mobilde sadece ortada) */}
          <div className="hidden md:block absolute top-[50%] left-[-5%] right-[-5%] border-t-[2px] border-dashed border-[#4168A6]/40 z-0"></div>
          
          {/* Kart 1: Mavi (Listen and imagine) */}
          <div className="relative w-full md:w-1/3 bg-[#4168A6] rounded-[24px] p-[24px] pt-[40px] text-center shadow-md z-10 flex flex-col items-center">
            {/* Taşan İkon (Overlapping Icon) */}
            <div className="absolute -top-[24px] w-[56px] h-[56px] bg-[#4168A6] rounded-full flex items-center justify-center border-[6px] border-[#DFEBF3]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            </div>
            <h3 className="text-white font-bold text-[20px] mb-[12px]">Listen and imagine</h3>
            <p className="text-white/90 text-[15px] leading-relaxed">
              Audio stories help develop language skills and imagination.
            </p>
          </div>

          {/* Kart 2: Yeşil (Learn through play) */}
          <div className="relative w-full md:w-1/3 bg-[#A8C464] rounded-[24px] p-[24px] pt-[40px] text-center shadow-md z-10 flex flex-col items-center">
            {/* Mobilde arkadan geçen kesik çizgi detayı */}
            <div className="md:hidden absolute top-[50%] left-[-10%] right-[-10%] border-t-[2px] border-dashed border-[#4168A6]/40 z-[-1]"></div>
            {/* Mobilde ortadaki X detayı */}
            <div className="md:hidden absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[16px] h-[16px] border-t-[2px] border-r-[2px] border-[#4168A6]/40 rotate-45 z-[-1]"></div>
            
            <div className="absolute -top-[24px] w-[56px] h-[56px] bg-[#A8C464] rounded-full flex items-center justify-center border-[6px] border-[#DFEBF3]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3 className="text-white font-bold text-[20px] mb-[12px]">Learn through play</h3>
            <p className="text-white/90 text-[15px] leading-relaxed">
              Children explore concepts through sounds and cards.
            </p>
          </div>

          {/* Kart 3: Sarı (Grow at their own pace) */}
          <div className="relative w-full md:w-1/3 bg-[#F2BA44] rounded-[24px] p-[24px] pt-[40px] text-center shadow-md z-10 flex flex-col items-center">
            <div className="absolute -top-[24px] w-[56px] h-[56px] bg-[#F2BA44] rounded-full flex items-center justify-center border-[6px] border-[#DFEBF3]">
              {/* Pasta (Cake) İkonu */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path><path d="M2 21h20"></path><path d="M7 8v3"></path><path d="M12 8v3"></path><path d="M17 8v3"></path><path d="M7 4h.01"></path><path d="M12 4h.01"></path><path d="M17 4h.01"></path></svg>
            </div>
            <h3 className="text-white font-bold text-[20px] mb-[12px]">Grow at their own pace</h3>
            <p className="text-white/90 text-[15px] leading-relaxed">
              Different content for different ages — no pressure, no scores.
            </p>
          </div>

        </div>

        {/* Alt Açıklama ve Buton */}
        <div className="mt-[60px] md:mt-[80px] flex flex-col items-center text-center">
          <p className="text-[#3A5B93]/80 text-[16px] md:text-[18px] max-w-[600px] mb-[24px] font-medium">
            Open-ended play that grows with their curiosity — without screens, scores, or pressure.
          </p>
          <Button variant="default" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white shadow-md">
            See how it plays
          </Button>
        </div>

      </div>
    </section>
  );
};
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const WhatIsLunoBoxSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px] flex flex-col md:flex-row items-center gap-[60px] md:gap-[100px]">
        
        {/* Sol Taraf: Metinler */}
        <div className="w-full md:w-1/2 flex flex-col gap-[40px] relative z-10">
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px]">
            What is
            <span className="inline-block bg-[#A8C464] text-white px-[20px] py-[4px] rounded-[16px] -rotate-3 shadow-sm">
              LunoBox?
            </span>
          </h2>

          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[#3A5B93] font-bold text-[24px] flex items-center gap-[12px]">
              <span className="inline-block bg-[#A8C464] text-white px-[12px] py-[2px] rounded-[12px] text-[20px]">Audio-first</span>
              play experiences
            </h3>
            <p className="text-[#3A5B93]/80 text-[16px]">Listening comes first, encouraging focus before looking or tapping on a screen.</p>
          </div>

          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[#3A5B93] font-bold text-[24px] flex items-center gap-[12px]">
              Hold a card, 
              <span className="inline-block bg-[#4168A6] text-white px-[12px] py-[2px] rounded-[12px] text-[20px]">listen first</span>
            </h3>
            <p className="text-[#3A5B93]/80 text-[16px]">Guided by sound, supported by a dot-matrix display.</p>
          </div>

          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[#3A5B93] font-bold text-[24px] flex items-center gap-[12px]">
              <span className="inline-block bg-[#F2BA44] text-white px-[12px] py-[2px] rounded-[12px] text-[20px]">No scores,</span>
              no pressure
            </h3>
            <p className="text-[#3A5B93]/80 text-[16px]">Listening comes first, encouraging focus before looking or tapping on a screen.</p>
          </div>
        </div>

        {/* Sağ Taraf: TEK PARÇA SVG GÖRSELİ */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="relative w-full max-w-[514px] flex justify-center items-center">

            {/* Eski kesik çizgi ve uçak tamamen silindi. Sadece yeni SVG var! */}
            <img 
              src="/images/what-is-lunobox.svg" 
              alt="What is LunoBox" 
              className="w-full h-auto object-contain relative z-10 hover:scale-[1.02] transition-transform duration-500 drop-shadow-xl" 
            />

          </div>
        </div>

      </div>
    </section>
  );
};
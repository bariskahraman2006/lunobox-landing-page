/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const WhatsInsideSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      {/* 1279px'lik SVG'nin rahatça sığabilmesi için ana çerçeveyi 1440px olarak ayarladık */}
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Başlık ve Açıklama (Aynen korundu) */}
        <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#3A5B93] tracking-tight flex flex-col md:flex-row items-center gap-[8px] md:gap-[12px]">
            What's inside
            <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] rotate-2 shadow-sm">
              the box?
            </span>
          </h2>
          <p className="text-[#3A5B93]/80 font-medium mt-[16px] text-[16px] md:text-[18px] max-w-[500px]">
            Open-ended play that grows with their curiosity — without screens, scores, or pressure.
          </p>
        </div>

        {/* TEK PARÇA SVG ALANI: Figma'daki 1279x222 ölçülerine tam oturtuldu! */}
        <div className="relative w-full flex justify-center items-center max-w-[1279px]">
          {/* O karmaşık diziler, ikonlar ve çizgiler SİLİNDİ, yerine SVG eklendi */}
          <img 
            src="/images/whats-inside.svg" 
            alt="What's inside the LunoBox box" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

      </div>
    </section>
  );
};
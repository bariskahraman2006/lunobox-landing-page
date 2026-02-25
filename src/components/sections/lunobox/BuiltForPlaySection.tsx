/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const BuiltForPlaySection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      {/* 1130px'lik SVG'nin rahatça sığabilmesi için ana çerçeve genişletildi */}
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Başlık ve Açıklama (Aynen korundu) */}
        <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#3A5B93] tracking-tight flex flex-col md:flex-row items-center gap-[8px] md:gap-[12px]">
            Built for
            <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] -rotate-3 shadow-sm">
              independent play
            </span>
          </h2>
          <p className="text-[#3A5B93]/80 font-medium mt-[16px] text-[16px] md:text-[18px]">
            LunoBox is a screen-light audio device designed for calm, curiosity-led play.
          </p>
        </div>

        {/* TEK PARÇA SVG ALANI: Figma'daki 1130.84x202.84 ölçülerine tam oturtuldu! */}
        <div className="relative w-full flex justify-center items-center max-w-[1130px]">
          {/* Eski o karmaşık kutular (div'ler) ve çizgiler silindi, yerine sadece SVG'n geldi */}
          <img 
            src="/images/built-for-play-features.svg" 
            alt="LunoBox features for independent play" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

      </div>
    </section>
  );
};
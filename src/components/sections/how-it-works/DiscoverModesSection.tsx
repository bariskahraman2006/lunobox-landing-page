/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const DiscoverModesSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      {/* 1224px'lik SVG'nin rahatça sığabilmesi için ana çerçeveyi 1280px olarak ayarladık */}
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Üst Kısım: Başlık ve Açıklamalar (Aynen korundu) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-[60px] md:mb-[80px] w-full gap-[40px]">
          
          {/* Sol Sütun: Açıklama Metni */}
          <div className="text-center md:text-left max-w-[450px]">
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#3A5B93] mb-[16px]">
              One device. Multiple ways to play.
            </h3>
            <p className="text-[#3A5B93]/80 text-[16px] md:text-[18px] font-medium leading-relaxed">
              Every interaction with LunoBox starts the same way — what changes is how kids explore.
            </p>
          </div>

          {/* Sağ Sütun: Discover Modes Rozeti */}
          <div className="text-center md:text-right flex items-center justify-center md:justify-end">
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px]">
              Discover
              <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] -rotate-3 shadow-sm">
                modes
              </span>
            </h2>
          </div>
          
        </div>

        {/* Alt Kısım: TEK PARÇA SVG ALANI (Eski 4'lü yapının yerini aldı) */}
        {/* DÜZELTME: Figma'daki 1224x435 ölçülerine tam oturtuldu! */}
        <div className="relative w-full flex justify-center items-center w-full max-w-[1224px]">
          <img 
            src="/images/modes-grid.svg" 
            alt="LunoBox play modes" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

      </div>
    </section>
  );
};
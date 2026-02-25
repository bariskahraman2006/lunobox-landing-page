/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from "@/components/ui/Button";

export const HeroSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px] overflow-hidden flex items-center min-h-[80vh]">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px] flex flex-col lg:flex-row items-center justify-between gap-[60px] w-full">

        {/* Sol Taraf: YENİ SVG Metin ve MAVİ Buton */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-10">
          
          {/* Eski HTML metinleri (Meet LunoBox, h1, p etiketleri) tamamen SİLİNDİ, 
              yerine tam istediğin 543x283 boyutlarındaki SVG eklendi */}
          <img 
            src="/images/meet-lunobox.svg" 
            alt="Meet LunoBox text" 
            className="w-full max-w-[543px] h-auto object-contain mb-[40px]"
          />

          {/* İstenilen renkteki (#3B68AB) Add to cart butonu (Buna hiç dokunmadık, aynı kaldı) */}
          <Button variant="default" size="large" className="bg-[#3B68AB] hover:bg-[#2C4A7A] text-white shadow-md text-[20px] px-[40px] rounded-full mb-[16px] transition-all">
            Add to cart
          </Button>

          <div className="flex items-center gap-[8px] text-[#505050]/80 font-accent-hand text-[16px]">
            <span>☆☆☆</span>
            <span>Built for independent play</span>
          </div>
        </div>

        {/* Sağ Taraf: KALPLİ LunoBox (Bulut silindi) */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-[40px] lg:mt-0">
          
          {/* Arkadaki Bulut Çizimi tamamen SİLİNDİ! */}

          {/* Kalp Gözlü Doğru Görsel (Mevcut koduna tamamen sadık kalındı) */}
          <img
            src="/images/lunobox-lunobox.svg"
            alt="LunoBox Device with heart eyes"
            className="w-full max-w-[628px] h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};
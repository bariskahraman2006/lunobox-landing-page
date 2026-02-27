/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'; // DÜZELTME 1: Next.js Link bileşeni projeye dahil edildi

export const HeroSection = () => {
  return (
    <section className="w-full bg-[#C5E1F3] pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px] flex flex-col md:flex-row items-center justify-between gap-[60px]">

        {/* Sol Taraf: Metinler */}
        <div className="w-full md:w-1/2 flex flex-col items-start relative z-10 pt-[20px]">

          {/* Figma'dan gelen sarı "works?" rozetli Başlık */}
          <h1 className="text-[48px] md:text-[60px] font-extrabold text-[#3A5B93] leading-tight flex items-center gap-[16px] mb-[32px]">
            How it
            <span className="inline-block bg-[#F2BA44] text-white px-[20px] py-[4px] rounded-[16px] rotate-3 shadow-sm">
              works?
            </span>
          </h1>

          {/* Alt Metinler: Figma ölçüsü olan 411x159 alanına kilitlendi */}
          <div className="max-w-[411px] flex flex-col gap-[20px] mb-[40px]">
            <p className="text-[#505050] font-bold text-[20px] md:text-[22px] leading-snug">
              Simple. Calm. Screen-light play<br />
              — designed for everyday moments.
            </p>
            <p className="text-[#505050]/80 text-[18px] md:text-[20px] leading-relaxed">
              LunoBox works without complicated setup<br />
              — just tap a card and play begins.
            </p>
          </div>

          {/* DÜZELTME 2: Buton bir Link içine alındı ve hedefi '#step-by-step' yapıldı */}
          <Link href="#step-by-step">
            <button className="bg-[#F2BA44] hover:bg-[#E0A832] text-white font-bold text-[16px] w-[191px] h-[37px] rounded-full shadow-md transition-transform hover:-translate-y-1 flex items-center justify-center">
              See it step by step
            </button>
          </Link>

        </div>

        {/* Sağ Taraf: Görsel ve Doodle'lar */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-[40px] md:mt-0">

          <div className="relative w-full max-w-[600px]">

            {/* Kalpli konuşma balonu SVG'si (Sol alt) */}
            <img 
              src="/images/doodle-heart-bubble.svg" 
              alt="" 
              className="absolute -bottom-[40px] -left-[50px] w-[120px] z-20 pointer-events-none drop-shadow-sm hidden md:block" 
            />

            {/* Ana Görsel (Figma'daki çocuk odası / masaüstü fotoğrafı) */}
            <img 
              src="/images/how-it-works-desk.png" 
              alt="LunoBox lifestyle" 
              className="w-full h-auto object-cover rounded-[24px] shadow-xl relative z-10" 
            />

            {/* Bulut SVG'si (Sağ üst) */}
            <img 
              src="/images/doodle-cloud-outline.svg" 
              alt="" 
              className="absolute -top-[50px] -right-[60px] w-[180px] z-20 pointer-events-none drop-shadow-sm hidden md:block" 
            />

          </div>

        </div>

      </div>
    </section>
  );
};
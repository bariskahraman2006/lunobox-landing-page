import React from 'react';
import { WaitlistForm } from "@/components/WaitlistForm"; // Bileşeni tekrar içeri aktarıyoruz!

export const GrowingLibrarySection = () => {
  return (
    <section id="waitlist" className="w-full bg-[#DFEBF3] pt-[40px] pb-[80px] md:pb-[120px] flex justify-center px-[16px] md:px-[40px]">
      
      <div className="w-full max-w-[842px] flex flex-col items-center text-center">
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#505050] tracking-tight leading-[1.3] mb-[24px]">
          The <span className="inline-block bg-[#EBB336] text-white px-[20px] py-[4px] rounded-[16px] shadow-sm mx-[4px]">LunoBox</span> library is growing
        </h2>
        
        <p className="w-full text-[#505050]/80 text-[16px] md:text-[18px] font-medium mb-[40px]">
          New card packs are always in the works — from emotions and music to nature, science, and everyday life.
        </p>

        {/* DÜZELTME: Görsel HTML formu silindi, çalışan gerçek API bileşeni eklendi! */}
        <WaitlistForm />

      </div>

    </section>
  );
};
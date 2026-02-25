/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const StepByStepTimelineSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      {/* 1274px'lik SVG'nin rahatça sığabilmesi için ana çerçeveyi genişlettik */}
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Başlık Alanı (Aynen korundu) */}
        <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px]">
            See it
            <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] -rotate-2 shadow-sm">
              step by step
            </span>
          </h2>
          <p className="text-[#3A5B93]/80 font-medium mt-[16px] text-[16px] md:text-[18px]">
            Listen first. Imagine more.
          </p>
        </div>

        {/* TEK PARÇA SVG ALANI: Figma'daki 1274x225 ölçülerine tam oturtuldu! */}
        <div className="relative w-full max-w-[1274px] flex justify-center items-center">
          <img 
            src="/images/steps-timeline.svg" 
            alt="Step by step process" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

      </div>
    </section>
  );
};
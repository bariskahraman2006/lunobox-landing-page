/* eslint-disable @next/next/no-img-element */
import React from 'react';

// MOBİL GÖRÜNÜM İÇİN KART VERİLERİ (Görselden birebir alındı)
const mobileSteps = [
  { id: 1, title: "Choose a card", desc: "A story, sound, or game\n—your pick.", color: "bg-[#4168A6]" },
  { id: 2, title: "Tap to start", desc: "Tap it on\nLunoBox.", color: "bg-[#A8C464]" },
  { id: 3, title: "Listen & enjoy", desc: "Kids follow prompts, clues, and\nplayful feedback.", color: "bg-[#E59ECA]" },
  { id: 4, title: "Swap & continue", desc: "Every card unlocks\na new moment.", color: "bg-[#F2BA44]" },
];

export const StepByStepTimelineSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[80px]">
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

        {/* MASAÜSTÜ İÇİN TEK PARÇA SVG ALANI (Mobilde gizlenir -> 'hidden lg:flex') */}
        <div className="relative w-full max-w-[1274px] hidden lg:flex justify-center items-center">
          <img 
            src="/images/steps-timeline.svg" 
            alt="Step by step process" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

        {/* MOBİL İÇİN DİKEY ZAMAN ÇİZELGESİ (Masaüstünde gizlenir -> 'flex lg:hidden') */}
        <div className="flex lg:hidden flex-col items-center w-full max-w-[350px] mt-[10px]">
          {mobileSteps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center pt-[20px] w-full">
              
              {/* Yuvarlak Numara Badge'i */}
              <div className={`absolute top-0 w-[44px] h-[44px] rounded-full border-[4px] border-[#DFEBF3] ${step.color} text-white font-extrabold flex items-center justify-center text-[18px] shadow-sm z-10`}>
                {step.id}
              </div>
              
              {/* Renkli Metin Kutusu */}
              <div className={`w-full ${step.color} text-white rounded-[20px] pt-[32px] pb-[24px] px-[20px] shadow-md`}>
                <h3 className="font-extrabold text-[18px] mb-[6px] tracking-wide">{step.title}</h3>
                <p className="text-[14px] font-medium opacity-90 whitespace-pre-line leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Adımlar Arası Kesik Çizgi (Son adımda çizgi çıkmaz) */}
              {step.id !== 4 && (
                <div className="w-[2px] h-[30px] border-l-[2px] border-dashed border-[#4168A6]/30 mt-[12px]"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
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
    <section id="step-by-step" className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
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
          
          {/* YENİ EKLENEN DALGALI KESİKLİ ÇİZGİ (#88ACE2) */}
          <div className="absolute top-1/2 left-[50%] z-0 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden w-[200vw] flex justify-center pointer-events-none">
            <svg width="2400" height="40" viewBox="0 0 2400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20 Q 60 0 120 20 T 240 20 T 360 20 T 480 20 T 600 20 T 720 20 T 840 20 T 960 20 T 1080 20 T 1200 20 T 1320 20 T 1440 20 T 1560 20 T 1680 20 T 1800 20 T 1920 20 T 2040 20 T 2160 20 T 2280 20 T 2400 20" stroke="#88ACE2" strokeWidth="3" strokeDasharray="8 8" />
            </svg>
          </div>

          <img 
            src="/images/steps-timeline.svg" 
            alt="Step by step process" 
            className="relative z-10 w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

        {/* MOBİL İÇİN DİKEY ZAMAN ÇİZELGESİ (Masaüstünde gizlenir -> 'flex lg:hidden') */}
        <div className="relative flex lg:hidden flex-col items-center w-full max-w-[350px] mt-[40px] gap-[40px]">
          
          {/* MOBİL: Arka plandan geçen sürekli dikey kesikli çizgi (#88ACE2) */}
          <div className="absolute top-[10px] bottom-[20px] left-1/2 -translate-x-1/2 border-l-[3px] border-dashed border-[#88ACE2] z-0"></div>

          {mobileSteps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center w-full drop-shadow-sm">
              
              {/* Renkli Metin Kutusu (Kart) */}
              <div className={`relative z-10 w-full ${step.color} text-white rounded-[20px] pt-[36px] pb-[24px] px-[20px]`}>
                
                {/* Yuvarlak Numara Badge'i (Kartın üst ortasına yerleştirildi ve etrafına zemin renginde kalın border eklendi) */}
                <div className={`absolute -top-[24px] left-1/2 -translate-x-1/2 w-[48px] h-[48px] rounded-full border-[6px] border-[#DFEBF3] ${step.color} text-white font-extrabold flex items-center justify-center text-[20px] z-20`}>
                  {step.id}
                </div>

                <h3 className="font-extrabold text-[18px] mb-[6px] tracking-wide">{step.title}</h3>
                <p className="text-[14px] font-medium opacity-90 whitespace-pre-line leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
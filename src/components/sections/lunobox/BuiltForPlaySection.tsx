/* eslint-disable @next/next/no-img-element */
import React from 'react';

// MOBİL İÇİN KUTU VERİLERİ (Görselden birebir okundu)
const mobileFeatures = [
  {
    id: 1,
    text: "Simple controls\nmade for little\nhands",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
  },
  {
    id: 2,
    text: "Soft, durable, and\nmade to handle\neveryday drops",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  },
  {
    id: 3,
    text: "Plays all day\nwithout frequent\ncharging",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="4" width="10" height="16" rx="2" ry="2"></rect><line x1="10" y1="2" x2="14" y2="2"></line></svg>
  },
  {
    id: 4,
    text: "Customize the\nlook with playful\nadd-ons",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
  },
  {
    id: 5,
    text: "Designed without\ncameras, mics, or\nalways-on tech",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
  }
];

export const BuiltForPlaySection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Başlık ve Açıklama */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[80px]">
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

        {/* MASAÜSTÜ İÇİN TEK PARÇA SVG ALANI (Mobilde gizlenir -> 'hidden lg:flex') */}
        <div className="relative w-full hidden lg:flex justify-center items-center max-w-[1130px]">
          <img 
            src="/images/built-for-play-features.svg" 
            alt="LunoBox features for independent play" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

        {/* MOBİL İÇİN İKİŞERLİ GRID ALANI (Masaüstünde gizlenir -> 'grid lg:hidden') */}
        <div className="grid grid-cols-2 gap-[12px] md:gap-[20px] w-full max-w-[500px] lg:hidden mt-[10px]">
          {mobileFeatures.map((feature, index) => (
            <div 
              key={feature.id} 
              // 5. kutuyu tam ortaya almak için col-span-2 yapıp genişliğini diğerleriyle aynı ölçüde kilitliyoruz
              className={`flex flex-col items-center justify-start text-center bg-[#D4E6F4] p-[16px] rounded-[16px] shadow-sm ${index === 4 ? 'col-span-2 mx-auto w-full max-w-[180px] md:max-w-[220px]' : 'col-span-1'}`}
            >
              {/* İkon */}
              <div className="text-[#3A5B93] mb-[12px] opacity-90">
                {feature.icon}
              </div>
              
              {/* Metin (whitespace-pre-line ile \n olan yerlerden alt satıra iner) */}
              <p className="text-[#3A5B93] font-bold text-[13px] md:text-[15px] leading-snug whitespace-pre-line">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
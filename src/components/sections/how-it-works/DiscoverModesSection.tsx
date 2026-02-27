/* eslint-disable @next/next/no-img-element */
import React from 'react';

// MOBİL GÖRÜNÜM İÇİN MOD VERİLERİ (Görselden birebir alındı)
const mobileModes = [
  {
    id: "explorer",
    color: "bg-[#4168A6]", // Mavi
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
    ),
    title: "Explorer mode",
    subtitle: "Discover real-world sounds and little discoveries",
    desc: "Tap a card and explore real-world sounds inspired by everyday objects — driven by curiosity, not instructions.",
    footer: "Best for: first discoveries, free exploration, younger kids"
  },
  {
    id: "quiz",
    color: "bg-[#A8C464]", // Yeşil
    icon: (
      <span className="font-extrabold text-[22px]">?</span>
    ),
    title: "Quiz mode",
    subtitle: "Playful questions, gently guiding learning",
    desc: "Simple, card-based questions with helpful hints — no pressure, no scores.",
    footer: "Best for: learning through play, confidence-building"
  },
  {
    id: "story",
    color: "bg-[#E59ECA]", // Pembe
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
    ),
    title: "Story & music mode",
    subtitle: "Listen, imagine, and create worlds",
    desc: "Stories, songs, and soundscapes bring each card to life — inviting kids to listen, imagine, and build their own worlds.",
    footer: "Best for: language development, imagination, calm moments"
  },
  {
    id: "ar",
    color: "bg-[#F2BA44]", // Sarı
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    ),
    title: "AR mode",
    subtitle: "Playful questions, gently guiding learning",
    desc: "With a companion app, selected cards unlock short AR moments — designed as a shared, guided activity.",
    footer: "Best for: shared play, visual exploration, special moments. Never required for play."
  }
];

export const DiscoverModesSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Üst Kısım: Başlık ve Açıklamalar */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-[40px] md:mb-[80px] w-full gap-[32px] md:gap-[40px]">
          
          {/* Sol Sütun: Açıklama Metni */}
          <div className="text-center md:text-left max-w-[450px]">
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#3A5B93] mb-[12px] md:mb-[16px]">
              One device. Multiple ways to play.
            </h3>
            <p className="text-[#3A5B93]/80 text-[16px] md:text-[18px] font-medium leading-relaxed">
              Every interaction with LunoBox starts the same way — what changes is how kids explore.
            </p>
          </div>

          {/* Sağ Sütun: Discover Modes Rozeti */}
          <div className="text-center md:text-right flex items-center justify-center md:justify-end shrink-0">
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px]">
              Discover
              <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] -rotate-3 shadow-sm">
                modes
              </span>
            </h2>
          </div>
          
        </div>

        {/* MASAÜSTÜ İÇİN TEK PARÇA SVG ALANI (Mobilde gizlenir -> 'hidden lg:flex') */}
        <div className="relative w-full max-w-[1224px] hidden lg:flex justify-center items-center">
          <img 
            src="/images/modes-grid.svg" 
            alt="LunoBox play modes" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

        {/* MOBİL İÇİN DİKEY KART LİSTESİ (Masaüstünde gizlenir -> 'flex lg:hidden') */}
        <div className="flex lg:hidden flex-col gap-[32px] w-full mt-[10px]">
          {mobileModes.map((mode) => (
            <div key={mode.id} className="flex items-start gap-[16px]">
              
              {/* Sol Taraf: Yuvarlak İkon */}
              <div className={`shrink-0 w-[56px] h-[56px] rounded-full ${mode.color} text-white flex items-center justify-center shadow-md`}>
                {mode.icon}
              </div>
              
              {/* Sağ Taraf: İçerik */}
              <div className="flex flex-col items-start pt-[2px]">
                {/* Renkli Rozet Başlık */}
                <span className={`inline-block ${mode.color} text-white font-extrabold text-[14px] px-[12px] py-[4px] rounded-[8px] mb-[8px] shadow-sm`}>
                  {mode.title}
                </span>
                
                {/* Alt Başlık */}
                <h4 className="font-extrabold text-[#3A5B93] text-[15px] mb-[6px] leading-tight">
                  {mode.subtitle}
                </h4>
                
                {/* Açıklama */}
                <p className="text-[#3A5B93]/80 text-[14px] font-medium leading-relaxed mb-[8px]">
                  {mode.desc}
                </p>
                
                {/* Footer (Best for...) */}
                <p className="text-[#3A5B93]/60 text-[12px] font-medium">
                  {mode.footer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
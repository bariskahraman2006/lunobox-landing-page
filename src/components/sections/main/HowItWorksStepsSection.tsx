/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Şeritteki kelimeler ve ikonlar dizisi
const bannerItems = [
  { label: "Explore", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> },
  { label: "Repeat", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> },
  { label: "Tap a card", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.5a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5S9.5 6.38 9.5 5 10.62 2.5 12 2.5z"/><path d="M16 12a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 0 5A2.5 2.5 0 0 1 16 12z"/><path d="M8 12a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 3.5 12a2.5 2.5 0 0 1 5 0z"/><path d="M12 21.5a2.5 2.5 0 0 1-2.5-2.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><circle cx="12" cy="12" r="2"/></svg> },
  { label: "Listen", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> },
  { label: "Imagine", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg> }
];

// Ekranı doldurması için diziyi 4 kez tekrarlıyoruz
const repeatedBannerItems = [...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems];

export const HowItWorksSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pb-[80px] md:pb-[120px] overflow-hidden flex flex-col">
      
      {/* Figma'daki 80px yüksekliğindeki Mavi Şerit */}
      <div className="w-full h-[80px] bg-[#3B68AB] flex items-center overflow-hidden mb-[60px] md:mb-[100px] shadow-sm">
        <div className="flex items-center gap-[40px] px-[20px] w-max whitespace-nowrap text-white font-extrabold text-[24px]">
          {repeatedBannerItems.map((item, index) => (
            <div key={index} className="flex items-center gap-[12px]">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] w-full">
        
        {/* Üst Kısım: Başlık ve Alt Metin */}
        <div className="flex flex-col items-center text-center mb-[80px]">
          <h2 className="text-[40px] md:text-[56px] font-extrabold text-[#3A5B93] tracking-tight flex items-center justify-center gap-[16px] mb-[16px]">
            How it
            <span className="inline-block bg-[#4168A6] text-white px-[24px] py-[4px] rounded-[16px] -rotate-2 shadow-sm">
              works?
            </span>
          </h2>
          <p className="text-[#505050]/80 font-medium text-[18px]">
            Simple. Calm. Screen-light.
          </p>
        </div>

        {/* Alt Kısım: SADECE YENİ SVG'LER */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-[40px] relative w-full">
          
          {/* Sol Taraf: Adımlar SVG'si (Senin 779x200 ölçülerine göre kilitlendi) */}
          <div 
            className="w-full flex justify-center xl:justify-start"
            style={{ maxWidth: '779px' }}
          >
            <img 
              src="/images/steps.svg" 
              alt="How it works steps" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Sağ Taraf: LunoBox SVG'si (Senin 411x470 ölçülerine göre kilitlendi) 
              Tüm eski doodle'lar ve çizgiler buradan silindi! */}
          <div 
            className="w-full flex justify-center xl:justify-end mt-[40px] xl:mt-0 shrink-0"
            style={{ maxWidth: '411px' }}
          >
            <img 
              src="/images/image.svg" 
              alt="LunoBox Device" 
              className="w-full h-auto xl:h-[470px] object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Kart renkleri ve başlıkları tasarıma birebir uygun şekilde eşleştirildi
const cardPacks = [
  { id: 1, title: "Fruits NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-fruits-card.png", isPlaying: true, bgColor: "#69A04F" },   // Yeşil
  { id: 2, title: "Animals NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-animals-card.png", isPlaying: false, bgColor: "#D66E63" }, // Kırmızı
  { id: 3, title: "Shapes NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-shapes-card.png", isPlaying: false, bgColor: "#395488" },  // Mavi
  { id: 4, title: "Fruits NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-fruits-card.png", isPlaying: false, bgColor: "#69A04F" },   // Yeşil
  { id: 5, title: "Fruits NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-fruits-card.png", isPlaying: false, bgColor: "#69A04F" },   // Yeşil
  { id: 6, title: "Fruits NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-fruits-card.png", isPlaying: false, bgColor: "#69A04F" },   // Yeşil
  { id: 7, title: "Fruits NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-fruits-card.png", isPlaying: false, bgColor: "#69A04F" },   // Yeşil
  { id: 8, title: "Fruits NFC Card Pack", age: "3 - 5 Years", image: "/images/pack-fruits-card.png", isPlaying: false, bgColor: "#69A04F" },   // Yeşil
];

export const CardPacksGridSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[80px] pb-[120px] md:pt-[120px] overflow-hidden">
      
      {/* Maksimum genişlik Figma'daki gibi 1440px */}
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[40px] lg:px-[80px]">
        
        {/* Üst Başlık ve Açıklamalar */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[60px] relative z-10">
          <h2 className="text-[32px] md:text-[56px] font-extrabold text-[#3A5B93] tracking-tight flex items-center justify-center gap-[8px] md:gap-[12px] mb-[12px] md:mb-[16px]">
            Discover
            <span className="inline-block bg-[#4168A6] text-white px-[16px] md:px-[24px] py-[2px] md:py-[4px] rounded-[16px] -rotate-2 shadow-sm text-[28px] md:text-[56px]">
              cardpacks
            </span>
          </h2>
          <p className="text-[#3A5B93]/80 font-medium text-[15px] md:text-[18px] mb-[16px]">
            Each pack unlocks a new way to listen, imagine, and play.
          </p>
          <div className="flex items-center justify-center gap-[8px] text-[#3A5B93]/80 text-[13px] md:text-[14px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#3A5B93] shrink-0"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
            <span>Tap the speaker icon to hear a sample from each pack.</span>
          </div>
        </div>

        {/* Kartların Dizildiği Alan (Grid) */}
        <div className="relative w-full mt-[20px] md:mt-[40px]">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] md:gap-[24px] lg:gap-[32px] relative z-10 justify-items-center">
            {cardPacks.map((pack) => (
              <div 
                key={pack.id} 
                className="w-full md:w-[302px] h-auto md:h-[427px] bg-white rounded-[20px] md:rounded-[30px] p-[8px] md:p-[10px] flex flex-col gap-[8px] md:gap-[10px] shadow-sm hover:-translate-y-2 transition-transform duration-300 shrink-0"
              >
                {/* Görsel Kutusu (Sahne) */}
                <div 
                  className="w-full h-[140px] md:h-[266px] rounded-[14px] md:rounded-[20px] overflow-hidden relative shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: pack.bgColor }}
                >
                  {/* Resim (Oyuncu) */}
                  <img 
                    src={pack.image} 
                    alt={pack.title} 
                    className="w-auto h-[90%] md:h-[90%] object-contain" 
                  />
                </div>

                {/* ALT KISIM: Metinler ve Oynatıcı Bar */}
                <div className="flex flex-col flex-1 px-[4px] md:px-[6px] pb-[4px] md:pb-[6px]">
                  
                  {/* Başlık */}
                  <h3 className="text-[#505050] font-bold text-[14px] md:text-[18px] leading-tight mb-[6px] md:mb-[8px] line-clamp-2 min-h-[40px] md:min-h-0">
                    {pack.title}
                  </h3>
                  
                  {/* Yaş rozeti */}
                  <span className="bg-[#EBB336] text-white text-[11px] md:text-[13px] font-extrabold px-[8px] md:px-[12px] py-[2px] md:py-[4px] rounded-full inline-block self-start shadow-sm mb-auto">
                    {pack.age}
                  </span>

                  {/* Oynatıcı Barları */}
                  {pack.isPlaying ? (
                    <div className="relative w-full h-[32px] md:h-[39px] rounded-[16px] md:rounded-[20px] bg-[#E5EEF4] flex items-center overflow-hidden cursor-pointer mt-[10px] shrink-0">
                      <div className="absolute left-0 top-0 h-full w-[45%] bg-[#9EB9CE] rounded-r-[10px]"></div>
                      <div className="relative z-10 flex items-center gap-[8px] pl-[4px] md:pl-[6px] w-full">
                        <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full bg-[#4168A6] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="md:w-[14px] md:h-[14px]"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                        </div>
                        <span className="text-[#4168A6] font-extrabold text-[13px] md:text-[15px] hidden md:inline-block">Stop</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-[32px] md:h-[39px] rounded-[16px] md:rounded-[20px] bg-[#E5EEF4] flex items-center overflow-hidden cursor-pointer hover:bg-[#D5E3EE] transition-colors mt-[10px] shrink-0">
                      {/* DÜZELTME: "justify-center" silindi, padding değeri "pl-[4px] md:pl-[6px]" olarak eşitlendi */}
                      <div className="relative z-10 flex items-center gap-[8px] pl-[4px] md:pl-[6px] w-full">
                        <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full bg-[#4168A6] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="md:w-[14px] md:h-[14px]"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                        </div>
                        <span className="text-[#4168A6] font-extrabold text-[13px] md:text-[15px] hidden md:inline-block">Preview</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
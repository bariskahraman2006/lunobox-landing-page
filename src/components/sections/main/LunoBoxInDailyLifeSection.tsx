import React from 'react';

// 1. EKSİK GÖRSEL EKLENDİ VE SIRALAMA FIGMA İLE BİREBİR EŞLEŞTİRİLDİ
const dailyLifeImages = [
  { id: 1, src: "/images/kids-playing.jpg", alt: "Kids playing with legos" },
  { id: 2, src: "/images/girl-smiling.jpg", alt: "Child playing with LunoBox" },
  { id: 3, src: "/images/video-thumbnail.jpg", alt: "LunoBox on a table in a bright room" },
  { id: 4, src: "/images/lunobox-yellow-bg.jpg", alt: "LunoBox on yellow background" },
  { id: 5, src: "/images/pack-animals.png", alt: "LunoBox Animals card pack" },
  { id: 6, src: "/images/daily-life-5.jpg", alt: "Stacked LunoBox cards" },
];

export const DailyLifeSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[80px] pb-[120px] overflow-hidden">
      
      <div className="flex flex-col items-center text-center mb-[60px] px-[16px]">
        <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px] mb-[12px]">
          <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] -rotate-2 shadow-sm">
            LunoBox
          </span>
          in daily life
        </h2>
        <p className="text-[#3A5B93]/80 text-[18px] font-medium">
          How LunoBox fits into everyday family life.
        </p>
      </div>

      <div className="relative w-full">
        
        {/* Arkadan geçen kesik çizgi */}
        <div className="absolute top-1/2 left-0 right-0 border-t-[2px] border-dashed border-[#4168A6]/40 z-0 transform -translate-y-1/2"></div>

        {/* 2. KONUMLANDIRMA DÜZELTİLDİ: 'xl:justify-center' ile geniş ekranlarda blok tam ortaya (merkeze) sabitlendi! */}
        <div className="flex flex-row items-center justify-start xl:justify-center gap-[24px] px-[20px] xl:px-0 overflow-x-auto no-scrollbar relative z-10 w-full pb-[20px]">
          
          {dailyLifeImages.map((img) => (
            <div 
              key={img.id} 
              className="w-[302px] h-[302px] shrink-0 rounded-[20px] overflow-hidden bg-white/50 border-[1px] border-white/40 shadow-sm transition-transform hover:scale-[1.02]"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};
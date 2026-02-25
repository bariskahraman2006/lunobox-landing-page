import React from 'react';
import { Button } from "@/components/ui/Button";

export const DiscoverCardpacksSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px]">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[80px] gap-[24px]">
          <div className="max-w-[400px]">
            <h2 className="text-[#3A5B93] font-bold text-[20px] md:text-[24px] mb-[12px]">
              Card Packs for every kind of curiosity
            </h2>
            <p className="text-[#3A5B93]/80 text-[16px] md:text-[18px]">
              Stories, sounds, and ideas — each pack designed around a theme.
            </p>
          </div>
          
          <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px]">
            Discover
            <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] rotate-3 shadow-sm">
              cardpacks
            </span>
          </h1>
        </div>

        <div className="relative w-full flex justify-center items-center py-[60px]">
          
          <div className="absolute top-1/2 left-[-10%] right-[-10%] border-t-[3px] border-dashed border-[#4168A6]/30 z-0 transform -translate-y-1/2"></div>

          <div className="flex flex-row items-center justify-center gap-[40px] z-10 w-full max-w-[1077px] overflow-visible">
            
            <img 
              src="/images/card-luno.png" 
              alt="Luno Card" 
              // min-w eklenerek küçülmesi tamamen engellendi!
              className="w-[292px] min-w-[292px] h-[292px] shrink-0 object-contain transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 drop-shadow-md"
            />

            <img 
              src="/images/card-orange.png" 
              alt="Orange Card" 
              className="w-[292px] min-w-[292px] h-[292px] shrink-0 object-contain transform -translate-y-[20px] scale-105 hover:scale-110 transition-all duration-300 drop-shadow-xl z-20"
            />

            <img 
              src="/images/card-star.png" 
              alt="Star Card" 
              className="w-[292px] min-w-[292px] h-[292px] shrink-0 object-contain transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 drop-shadow-md"
            />

          </div>
        </div>

        <div className="flex flex-col items-center mt-[80px]">
          <Button variant="default" size="large" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white shadow-md text-[18px] px-[32px] rounded-full mb-[16px]">
            Discover Card Packs
          </Button>
          <p className="text-[#3A5B93]/80 font-accent-hand text-[14px]">
            Each card pack is designed for a different age and interest.
          </p>
        </div>

      </div>
    </section>
  );
};
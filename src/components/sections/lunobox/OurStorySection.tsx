import React from 'react';

export const OurStorySection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[80px] px-[16px] md:px-[40px] flex justify-center overflow-hidden">
      
      {/* Lacivert Hikaye Kartı (Scallop/Dalgalı maskesi tasarımı baz alınarak yuvarlak köşeli yapıldı) */}
      <div className="relative w-full max-w-[1000px] bg-[#3A5B93] rounded-[32px] md:rounded-[40px] px-[20px] md:px-[40px] py-[60px] md:py-[80px] flex flex-col items-center text-center shadow-lg overflow-hidden">
        
        {/* Dekoratif Vektörler (Güneş ve Bulut) */}
        <div className="absolute top-[20px] left-[20px] md:top-[40px] md:left-[40px] w-[60px] md:w-[100px] opacity-90 pointer-events-none">
          <img src="/images/sun-doodle-white.svg" alt="" aria-hidden="true" className="w-full" />
        </div>
        <div className="absolute top-[20px] right-[20px] md:top-[40px] md:right-[40px] w-[80px] md:w-[120px] opacity-90 pointer-events-none">
          <img src="/images/cloud-doodle-white.svg" alt="" aria-hidden="true" className="w-full" />
        </div>

        {/* İçerik */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[700px]">
          
          <span className="text-white/80 font-accent-hand text-[16px] mb-[12px]">
            Our Story
          </span>
          
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.2] tracking-tight mb-[32px] md:mb-[40px] flex items-center gap-[8px]">
            Where imagination<br className="md:hidden" /> meets hands-on play 
            {/* Tasarımdaki gülen yüz detayı */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden md:block"><path d="M5 15c.5 1.5 2 3.5 7 3.5s6.5-2 7-3.5"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
          </h2>

          <div className="relative flex flex-col gap-[20px] md:gap-[24px]">
            <p className="text-white/90 text-[15px] md:text-[16px] font-medium leading-relaxed">
              LunoBox began with a simple idea—and a pixelated cat sketch. Born from late-night talks between an educator and a tech-loving parent, it blends storytelling with Montessori-inspired, hands-on play.
            </p>
            
            {/* Ortadaki kesik mavi çizgi ve X işareti */}
            <div className="relative w-full flex justify-center items-center py-[10px]">
              <div className="absolute left-[20%] right-[20%] border-t-[2px] border-dashed border-[#4168A6]"></div>
              <div className="w-[12px] h-[12px] border-t-[2px] border-r-[2px] border-[#4168A6] rotate-45 z-10 bg-[#3A5B93]"></div>
            </div>

            <p className="text-white/90 text-[15px] md:text-[16px] font-medium leading-relaxed">
              Designed to spark imagination without screens, LunoBox turns illustrated NFC cards into moments of discovery. Tested in homes and classrooms, each interaction inspires curiosity, joy, and small “aha!” moments.
            </p>
            <p className="text-white/90 text-[15px] md:text-[16px] font-medium leading-relaxed">
              Created with child-development experts, LunoBox brings calm, playful learning to families around the world—and this is just the beginning.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
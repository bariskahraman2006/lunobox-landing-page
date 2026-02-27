import React from 'react';

export const OurStorySection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] px-[16px] md:px-[40px] flex justify-center overflow-hidden">
      
      {/* ANA KONTEYNER */}
      <div className="relative w-full max-w-[1280px] min-h-[588px] lg:h-[588px] flex flex-col items-center justify-center z-10 px-[20px] py-[60px] lg:py-0">
        
        {/* MASAÜSTÜ İÇİN SVG ARKA PLAN */}
        <img 
          src="/images/waitlist-blue-label.svg" 
          alt="Blue Background Label" 
          className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none drop-shadow-lg hidden lg:block mx-auto" 
        />
        
        {/* MOBİL İÇİN TEMİZ ARKA PLAN (Sünmüş SVG yerine yuvarlak köşeli esnek kutu) */}
        <div className="absolute inset-0 w-full h-full bg-[#3B68AB] rounded-[32px] z-0 lg:hidden shadow-lg"></div>

        {/* Dekoratif Vektörler (Güneş ve Bulut) */}
        <div className="absolute top-[10%] left-[-2%] md:left-[2%] lg:left-[5%] w-[120px] md:w-[180px] opacity-100 pointer-events-none z-10 hidden md:block">
          <img src="/images/sun-doodle-white.svg" alt="" aria-hidden="true" className="w-full" />
        </div>
        <div className="absolute top-[15%] right-[-2%] md:right-[2%] lg:right-[5%] w-[140px] md:w-[220px] opacity-100 pointer-events-none z-10 hidden md:block">
          <img src="/images/cloud-doodle-white.svg" alt="" aria-hidden="true" className="w-full" />
        </div>

        {/* İÇERİK MERKEZİ */}
        <div className="relative z-20 flex flex-col items-center w-full text-center h-full justify-center py-[20px]">
          
          <span className="text-white/90 font-medium text-[14px] md:text-[16px] mb-[16px]">
            Our Story
          </span>
          
          {/* BAŞLIK ALANI */}
          <div className="relative w-full max-w-[399px] mb-[32px] md:mb-[40px]">
            
            {/* Sol Kıvılcım (Spark) */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-[10px] -top-[30px] md:-left-[50px] md:-top-[15px] hidden md:block">
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
            </svg>

            {/* Başlık Metni */}
            <h2 className="text-[32px] md:text-[38px] font-extrabold text-white leading-[1.2] tracking-tight">
              Where imagination<br />meets hands-on play
            </h2>

            {/* Sağ Gülen Yüz */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute -right-[10px] bottom-[-20px] md:-right-[40px] md:bottom-[5px] hidden md:block">
              <path d="M5 15c.5 1.5 2 3.5 7 3.5s6.5-2 7-3.5"></path>
              <path d="M9 9h.01"></path>
              <path d="M15 9h.01"></path>
            </svg>

          </div>

          {/* PARAGRAFLAR */}
          <div className="relative flex flex-col gap-[16px] md:gap-[20px] w-full max-w-[846px] px-[10px]">
            <p className="text-white text-[14px] md:text-[16px] lg:text-[17px] font-medium leading-relaxed">
              LunoBox began with a simple idea—and a pixelated cat sketch. Born from late-night talks between an educator and a tech-loving parent, it blends storytelling with Montessori-inspired, hands-on play.
            </p>
            <p className="text-white text-[14px] md:text-[16px] lg:text-[17px] font-medium leading-relaxed">
              Designed to spark imagination without screens, LunoBox turns illustrated NFC cards into moments of discovery. Tested in homes and classrooms, each interaction inspires curiosity, joy, and small “aha!” moments.
            </p>
            <p className="text-white text-[14px] md:text-[16px] lg:text-[17px] font-medium leading-relaxed">
              Created with child-development experts, LunoBox brings calm, playful learning to families around the world—and this is just the beginning.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
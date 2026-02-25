/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from "@/components/ui/Button";

export const ParentAppSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[80px] md:py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px] flex flex-col md:flex-row items-center gap-[60px] relative">

        {/* Sol Taraf: Görsel */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center z-10">
          
          {/* Arkadan geçen kesik çizgi (border-dashed) BURADAN TAMAMEN SİLİNDİ! */}
          
          <img
            src="/images/parent-app.jpg"
            alt="Mother using the LunoBox parent app"
            className="w-full max-w-[450px] rounded-[24px] object-cover shadow-xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Sağ Taraf: Metinler ve Buton */}
        <div className="w-full md:w-1/2 flex flex-col items-start relative z-10 md:pl-[40px]">
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] leading-[1.2] tracking-tight mb-[24px]">
            An app built<br />
            <span className="inline-block bg-[#A8C464] text-white px-[20px] py-[4px] rounded-[16px] rotate-2 mt-[8px] shadow-sm">
              just for parents
            </span>
          </h2>
          <p className="text-[#3A5B93]/80 text-[18px] mb-[32px] max-w-[400px]">
            Set up, manage, and control LunoBox from your phone — quietly and in the background.
          </p>
          <Button variant="default" size="large" className="bg-[#4168A6] hover:bg-[#2C4A7A] text-white shadow-md text-[18px] px-[32px] rounded-full">
            Download the app
          </Button>
        </div>

      </div>
    </section>
  );
};
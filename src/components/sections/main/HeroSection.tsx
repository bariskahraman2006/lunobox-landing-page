/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#C5E1F3] overflow-hidden min-h-screen lg:min-h-[800px] flex items-center pt-[120px] pb-[60px] md:py-[120px]">
      
      {/* Arka Plan Çizimleri (Doodles) */}
      <img src="/images/doodle-cloud.svg" alt="" className="absolute top-[10%] right-[5%] w-[300px] opacity-80 z-0 hidden md:block" />
      <img src="/images/doodle-sun.svg" alt="" className="absolute bottom-[20%] right-[35%] w-[200px] opacity-80 z-0 hidden md:block" />

      {/* CİHAZIN KUSURSUZ KONUMLANDIRILMASI */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-full h-full pointer-events-none z-10">
        {/* DÜZELTME: Mobilde 'left-1/2 -translate-x-1/2 bottom-0' ile tam ortaya hizalandı. md ve lg ekranlarda ise eski koordinatlarına dönüyor! */}
        <img 
          src="/images/hero-device.svg" 
          alt="LunoBox Device" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[-5%] lg:bottom-auto lg:right-auto lg:top-[113px] lg:left-[732px] w-[320px] md:w-[450px] lg:w-[628px] lg:h-[687px] object-contain drop-shadow-2xl pointer-events-auto hover:scale-[1.02] transition-transform duration-500" 
        />
      </div>

      {/* İçerik Konteyneri */}
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] w-full relative z-20 flex">
        
        {/* Sol Taraf: Metinler */}
        <div className="flex flex-col items-start w-full md:w-[55%] pb-[350px] md:pb-0">
          
          <h1 className="text-[48px] md:text-[64px] font-extrabold text-[#3A5B93] leading-[1.1] tracking-tight mb-[24px]">
            A <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[2px] md:py-[4px] rounded-[20px] shadow-sm transform -rotate-3 mx-[4px]">sound-first</span> play<br />
            audio buddy with a<br />
            <span className="inline-block bg-[#A8C464] text-white px-[20px] py-[2px] md:py-[4px] rounded-[20px] shadow-sm transform rotate-2 mx-[4px]">dot-matrix</span>
            
            <span className="relative inline-block ml-[4px]">
              display
              <img src="/images/doodle-arrow-right.svg" alt="" className="absolute left-[100%] top-[20%] ml-[10px] w-[140px] md:w-[180px] hidden lg:block pointer-events-none" />
            </span>
          </h1>

          <p className="text-[#3A5B93]/80 text-[18px] md:text-[20px] font-medium mb-[40px] max-w-[420px]">
            Tap an NFC card to explore sounds, stories,<br className="hidden md:block" />
            and play — at their own pace.
          </p>

          <Link href="#how-it-works">
            <Button variant="default" size="large" className="bg-[#F2BA44] hover:bg-[#E0A832] text-white font-bold shadow-md text-[18px] md:text-[20px] h-[56px] px-[40px] rounded-full mb-[20px] transition-transform hover:-translate-y-1">
              How it works
            </Button>
          </Link>

          <div className="flex items-center gap-[8px] text-[#3A5B93]/80 font-accent-hand text-[16px] md:text-[18px]">
            <span>☆☆☆</span>
            <span>Built for independent play</span>
          </div>
        </div>

      </div>
    </section>
  );
};
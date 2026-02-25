'use client';

import React, { useRef, useState } from 'react';

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full bg-[#DFEBF3] py-[80px] md:py-[120px]">
      <div className="max-w-[1000px] mx-auto px-[16px] md:px-[40px]">
        
        {/* Üst Kısım: Figma'ya birebir uygun başlık */}
        <div className="flex justify-center mb-[40px]">
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] tracking-tight flex items-center gap-[12px]">
            Where curiosity
            <span className="inline-block bg-[#A8C464] text-white px-[20px] py-[4px] rounded-[16px] rotate-3 shadow-sm">
              begins?
            </span>
          </h2>
        </div>

        {/* Video Oynatıcı Alanı */}
        <div className="relative w-full rounded-[24px] overflow-hidden shadow-2xl aspect-video bg-black group">
          
          {/* Asıl Video (Senin mp4 dosyan ve kapak fotoğrafın) */}
          <video
            ref={videoRef}
            src="/videos/lunobox-demo.mp4"
            poster="/images/video-thumbnail.jpg"
            className="w-full h-full object-cover"
            controls={isPlaying}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />

          {/* Figma'daki o muhteşem Play (Oynat) Butonu (Kesik çizgi tamamen kaldırıldı) */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-all group-hover:bg-black/10"
              onClick={handlePlay}
            >
              {/* Yuvarlak Play İkonu */}
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-[4px] border-white/90 flex items-center justify-center bg-white/20 backdrop-blur-md relative z-10 hover:scale-110 transition-transform duration-300 shadow-xl">
                <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-white ml-[8px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          
        </div>

      </div>
    </section>
  );
};
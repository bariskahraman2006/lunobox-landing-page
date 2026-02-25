/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from "@/components/ui/Button";

export const CardDetailsSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] min-h-screen pt-[40px] pb-[120px]">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px]">
        
        {/* Üst Kısım: Breadcrumb (Sayfa Yolu) */}
        <div className="text-[#3A5B93]/60 text-[14px] mb-[40px]">
          Card Packs <span className="mx-2">/</span> <span className="font-semibold text-[#3A5B93]">Fruits NFC Card Pack</span>
        </div>

        <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
          
          {/* SOL TARAF: Görsel Galerisi (Figma'daki tam 411px genişliğe sabitlendi) */}
          <div className="w-full md:w-[411px] shrink-0 flex flex-col gap-[12px]">
            
            {/* Ana Büyük Görsel */}
            <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-white shadow-sm border-[2px] border-[#3FA0E4]">
              <img src="/images/cards-grid.png" alt="Fruits NFC Card Pack" className="w-full h-full object-cover" />
              
              {/* Sol ve Sağ Oklar (Carousel) */}
              <button className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/60 transition">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-[#3A5B93]/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#3A5B93]/90 transition">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>

            {/* Küçük Görseller (Thumbnails) */}
            <div className="grid grid-cols-4 gap-[12px]">
              <div className="aspect-square rounded-[12px] border-[2px] border-[#3FA0E4] overflow-hidden cursor-pointer">
                <img src="/images/card-watermelon.png" alt="Watermelon" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[12px] border-[2px] border-transparent overflow-hidden cursor-pointer hover:border-[#3FA0E4]/50 opacity-70 hover:opacity-100 transition">
                <img src="/images/card1-orange.png" alt="Orange" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[12px] border-[2px] border-transparent overflow-hidden cursor-pointer hover:border-[#3FA0E4]/50 opacity-70 hover:opacity-100 transition">
                <img src="/images/card-cherry.png" alt="Cherry" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[12px] border-[2px] border-transparent overflow-hidden cursor-pointer hover:border-[#3FA0E4]/50 opacity-70 hover:opacity-100 transition">
                <img src="/images/pack-animals-box.png" alt="Box" className="w-full h-full object-cover bg-gray-100" />
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Ürün Detayları */}
          <div className="flex-1 flex flex-col w-full">
            
            <div className="flex justify-between items-start mb-[8px]">
              <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] leading-tight">Fruits NFC Card Pack</h1>
              <button className="text-[#3A5B93]/40 hover:text-[#D66E63] transition mt-[10px]">
                {/* Kalp İkonu */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>
            
            <p className="text-[#505050] text-[18px] mb-[16px]">10 physical cards. Multiple ways to play.</p>
            <div className="text-[#3A5B93] font-extrabold text-[32px] mb-[24px]">$9.99</div>

            {/* Butonlar: Add to cart & Preview */}
            <div className="flex flex-wrap items-center gap-[16px] mb-[32px]">
              <Button className="bg-[#EBB336] hover:bg-[#D4A12F] text-white rounded-full px-[32px] h-[48px] text-[18px] font-extrabold shadow-md flex items-center gap-[8px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                Add to cart
              </Button>
              
              {/* Figma'ya Birebir Preview Butonu */}
              <div className="relative h-[48px] w-[200px] rounded-[24px] bg-[#C5E1F3] flex items-center overflow-hidden cursor-pointer shadow-sm hover:bg-[#B3D4EA] transition-colors">
                <div className="absolute left-0 top-0 h-full w-[35%] bg-[#9EB9CE] rounded-r-[12px]"></div>
                <div className="relative z-10 flex items-center gap-[8px] pl-[6px] w-full">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#3A5B93] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                  </div>
                  <span className="text-[#3A5B93] font-extrabold text-[16px]">Preview</span>
                </div>
              </div>
            </div>

            <hr className="border-[#3A5B93]/20 mb-[24px]" />

            {/* Bilgi Etiketleri (10 Cards, English, Yaş) */}
            <div className="flex flex-wrap items-center gap-[32px] mb-[24px]">
              <div className="flex items-center gap-[8px] text-[#EBB336] font-extrabold text-[16px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> 10 Cards
              </div>
              <div className="flex items-center gap-[8px] text-[#EBB336] font-extrabold text-[16px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> English
              </div>
              <div className="flex items-center gap-[8px] text-[#EBB336] font-extrabold text-[16px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path></svg> 2 - 5 Years
              </div>
            </div>
            
            <hr className="border-[#3A5B93]/20 mb-[24px]" />

            {/* Oyun Modları (Modes) */}
            <div className="flex flex-wrap items-center gap-[24px] mb-[32px]">
              <span className="text-[#505050] font-medium text-[16px]">Modes:</span>
              <div className="flex items-center gap-[6px] text-[#3A5B93] font-extrabold text-[14px]">
                 <div className="w-[24px] h-[24px] rounded-full bg-[#3A5B93] text-white flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg></div> Explorer
              </div>
              <div className="flex items-center gap-[6px] text-[#3A5B93] font-extrabold text-[14px]">
                 <div className="w-[24px] h-[24px] rounded-full bg-[#3A5B93] text-white flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div> Story & Music
              </div>
              <div className="flex items-center gap-[6px] text-[#3A5B93] font-extrabold text-[14px]">
                 <div className="w-[24px] h-[24px] rounded-full bg-[#3A5B93] text-white flex items-center justify-center"><span className="font-bold text-[12px]">?</span></div> Quiz
              </div>
              <div className="flex items-center gap-[6px] text-[#3A5B93] font-extrabold text-[14px]">
                 <div className="w-[24px] h-[24px] rounded-full bg-[#3A5B93] text-white flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg></div> AR
              </div>
            </div>

            {/* Açıklama Metni */}
            <p className="text-[#505050]/80 text-[15px] leading-relaxed max-w-[800px]">
              Each card adapts to how children play, working across different modes. Explorer & Quiz cards encourage open-ended discovery and gentle challenges. Music Cards introduce real-world sounds and musical patterns, and Story Cards spark imagination through short audio stories and prompts. The Super Luno Card can be personalized with parent recordings or used for AR experiences. All cards work in Explorer mode, with some unlocking additional music, story, or AR interactions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
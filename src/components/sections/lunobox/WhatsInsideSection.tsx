/* eslint-disable @next/next/no-img-element */
import React from 'react';

// MOBİL GÖRÜNÜM İÇİN KUTU İÇERİĞİ (Görselden birebir alındı)
const mobileItems = [
  {
    id: 1,
    title: "LunoBox device",
    desc: "",
    color: "bg-[#4168A6]", // Mavi
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="12" height="16" rx="2" ry="2"></rect><path d="M12 16v.01"></path></svg>
  },
  {
    id: 2,
    title: "1x NFC Card Pack (your choice)",
    desc: "Choose the card pack that fits your child's interests.",
    color: "bg-[#A8C464]", // Yeşil
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
  },
  {
    id: 3,
    title: "USB-C charging cable",
    desc: "For easy, everyday charging.",
    color: "bg-[#F2BA44]", // Sarı
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="4" y="6" width="16" height="8" rx="2"></rect><path d="M12 14v8"></path></svg>
  },
  {
    id: 4,
    title: "Quick start guide",
    desc: "Simple tips for parents.",
    color: "bg-[#A8C464]", // Yeşil
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
  },
  {
    id: 5,
    title: "Optional headphones",
    desc: "For quiet listening at home or on the go.",
    color: "bg-[#4168A6]", // Mavi
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
  }
];

export const WhatsInsideSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[40px] flex flex-col items-center">
        
        {/* Başlık ve Açıklama */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#3A5B93] tracking-tight flex flex-col md:flex-row items-center gap-[8px] md:gap-[12px]">
            What's inside
            <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] rotate-2 shadow-sm">
              the box?
            </span>
          </h2>
          <p className="text-[#3A5B93]/80 font-medium mt-[16px] text-[16px] md:text-[18px] max-w-[500px]">
            Open-ended play that grows with their curiosity — without screens, scores, or pressure.
          </p>
        </div>

        {/* MASAÜSTÜ İÇİN TEK PARÇA SVG ALANI (Mobilde gizlenir -> 'hidden lg:flex') */}
        <div className="relative w-full hidden lg:flex justify-center items-center max-w-[1279px]">
          <img 
            src="/images/whats-inside.svg" 
            alt="What's inside the LunoBox box" 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-sm" 
          />
        </div>

        {/* MOBİL İÇİN DİKEY LİSTE ALANI (Masaüstünde gizlenir -> 'flex lg:hidden') */}
        <div className="flex lg:hidden flex-col gap-[24px] w-full max-w-[400px]">
          {mobileItems.map((item) => (
            <div key={item.id} className="flex items-start gap-[16px] bg-white/40 p-[16px] rounded-[24px] shadow-sm">
              
              {/* Sol Taraf: Renkli Yuvarlak İkon */}
              <div className={`shrink-0 w-[52px] h-[52px] rounded-full ${item.color} text-white flex items-center justify-center shadow-md`}>
                {item.icon}
              </div>
              
              {/* Sağ Taraf: Başlık ve Açıklama */}
              <div className="flex flex-col justify-center pt-[2px]">
                <h4 className="font-extrabold text-[#3A5B93] text-[16px] leading-tight mb-[4px]">
                  {item.title}
                </h4>
                {item.desc && (
                  <p className="text-[#3A5B93]/80 text-[14px] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
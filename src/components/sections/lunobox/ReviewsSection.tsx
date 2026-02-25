import React from 'react';

const reviews = [
  {
    id: 1,
    quote: "“Screen-free time we actually look forward to.”",
    author: "Hazel M.",
    role: "Parent of a 4-year-old",
    text: "We were looking for something calm but engaging, and LunoBox nailed it. My daughter uses it on her own, and I love that there's no screen involved. It's become part of our bedtime routine."
  },
  {
    id: 2,
    quote: "“Finally, independent play that feels meaningful.”",
    author: "Hazel M.", // Tasarımda aynı isim kopyalanmış
    role: "Parent of a 4-year-old",
    text: "We were looking for something calm but engaging, and LunoBox nailed it. My daughter uses it on her own, and I love that there's no screen involved. It's become part of our bedtime routine."
  },
  {
    id: 3,
    quote: "“Perfect for quiet moments.”",
    author: "Hazel M.",
    role: "Parent of a 4-year-old",
    text: "We were looking for something calm but engaging, and LunoBox nailed it. My daughter uses it on her own, and I love that there's no screen involved. It's become part of our bedtime routine."
  }
];

export const ReviewsSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[60px] pb-[100px] md:pt-[100px] md:pb-[140px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px]">
        
        {/* Başlık ve Yıldızlar */}
        <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#3A5B93] tracking-tight flex flex-col md:flex-row items-center justify-center gap-[8px] md:gap-[16px] leading-[1.3] mb-[16px]">
            <span className="inline-block bg-[#4168A6] text-white px-[20px] py-[4px] rounded-[16px] -rotate-3 shadow-sm">
              Loved by Parents.
            </span>
            <span>Adored by kids.</span>
          </h2>
          
          <div className="flex items-center justify-center gap-[8px]">
            <div className="flex gap-[4px] text-[#F2BA44]">
              {/* 5 Yıldız İkonu */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <span className="text-[#3A5B93] font-medium text-[16px]">4.9 / 5</span>
          </div>
        </div>

        {/* Yorum Kartları (Grid Layout) */}
        <div className="relative w-full">
          
          {/* MASAÜSTÜ: Arkadan geçen yatay kesik çizgi ve X işareti */}
          <div className="hidden md:flex absolute top-[30%] left-[5%] right-[5%] border-t-[2px] border-dashed border-[#4168A6]/40 z-0 items-center justify-center -translate-y-1/2">
             <div className="w-[16px] h-[16px] border-t-[2px] border-r-[2px] border-[#4168A6]/40 rotate-45 bg-[#DFEBF3]"></div>
          </div>

          {/* MOBİL: 1. ve 2. kart arasındaki yatay kesik çizgi detayı */}
          <div className="md:hidden absolute top-[31%] left-[20%] right-[20%] border-t-[2px] border-dashed border-[#4168A6]/40 z-0 flex items-center justify-center">
             <div className="absolute w-[16px] h-[16px] border-t-[2px] border-r-[2px] border-[#4168A6]/40 rotate-45 bg-[#DFEBF3]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px] relative z-10">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-[24px] p-[24px] md:p-[32px] shadow-sm flex flex-col h-full border-[1px] border-white/50">
                
                <div className="flex gap-[2px] text-[#F2BA44] mb-[16px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                
                <h3 className="text-[#0088CC] font-bold text-[18px] leading-snug mb-[12px] flex-1">
                  {review.quote}
                </h3>
                
                <div className="mt-auto">
                  <p className="text-[#3A5B93] font-medium text-[15px] mb-[8px]">
                    {review.author} — <span className="font-normal opacity-80">{review.role}</span>
                  </p>
                  <p className="text-[#3A5B93]/70 text-[13px] leading-relaxed">
                    {review.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
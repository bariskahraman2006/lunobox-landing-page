import React from 'react';

export const ContactSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] pt-[80px] pb-[120px] md:pt-[120px] overflow-hidden min-h-screen">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px]">
        
        {/* Üst Başlık ve Açıklamalar */}
        <div className="flex flex-col items-center text-center mb-[40px] relative z-10">
          <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#3A5B93] tracking-tight flex items-center justify-center gap-[12px] mb-[16px]">
            <span className="inline-block bg-[#F2BA44] text-white px-[24px] py-[4px] rounded-[16px] -rotate-2 shadow-sm">
              Contact
            </span>
            Us
          </h1>
          <h2 className="text-[#505050] font-bold text-[20px] md:text-[24px] mb-[12px]">
            We're here to help.
          </h2>
          <p className="text-[#505050] text-[16px] md:text-[18px]">
            Have a question about LunoBox, card packs, or your order?<br className="hidden md:block" />
            We'd love to hear from you.
          </p>
        </div>

        {/* İletişim Formu (Figma'daki tam ölçü: max-w 1062px) */}
        <div className="max-w-[1062px] mx-auto w-full relative z-20">
          <form className="flex flex-col gap-[24px]">
            
            {/* İsim ve E-posta Satırı */}
            <div className="flex flex-col md:flex-row gap-[24px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="text-[#505050] font-medium text-[15px] pl-[8px]">Your Name</label>
                <input 
                  type="text" 
                  placeholder="john doe" 
                  className="w-full bg-white rounded-[16px] px-[20px] py-[16px] outline-none shadow-sm text-[#505050] placeholder:text-[#505050]/40 border border-transparent focus:border-[#4168A6]/30 transition-colors" 
                />
              </div>
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="text-[#505050] font-medium text-[15px] pl-[8px]">Your E-mail</label>
                <input 
                  type="email" 
                  placeholder="johndoe@mail.com" 
                  className="w-full bg-white rounded-[16px] px-[20px] py-[16px] outline-none shadow-sm text-[#505050] placeholder:text-[#505050]/40 border border-transparent focus:border-[#4168A6]/30 transition-colors" 
                />
              </div>
            </div>

            {/* Mesaj Satırı */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#505050] font-medium text-[15px] pl-[8px]">Your Message</label>
              <textarea 
                rows={6} 
                placeholder="Your message....." 
                className="w-full bg-white rounded-[16px] px-[20px] py-[16px] outline-none shadow-sm text-[#505050] placeholder:text-[#505050]/40 border border-transparent focus:border-[#4168A6]/30 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Alt Metin ve Gönder Butonu Alanı */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#505050]/60 text-[12px] pl-[8px]">
                Bu site reCAPTCHA ve Google tarafından korunmaktadır. Gizlilik Politikası ve Hizmet Şartları için tıklayın.
              </p>
              
              {/* Buton Sağa Hizalandı! */}
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="bg-[#F2BA44] hover:bg-[#E0A832] text-white font-bold text-[18px] px-[40px] py-[12px] rounded-full shadow-md transition-transform hover:-translate-y-1"
                >
                  Send
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
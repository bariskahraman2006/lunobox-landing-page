/* eslint-disable @next/next/no-img-element */
'use client'; // Form state'lerini çalıştırabilmek için gerekli!

import React, { useState } from 'react';
import Link from 'next/link';

export const Footer = () => {
  // --- API VE FORM KONTROL DURUMLARI ---
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); 
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Beklenmeyen bir hata oluştu.');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Bir hata oluştu');
    }
  };

  return (
    <footer className="w-full bg-[#DFEBF3] pt-[80px] pb-[40px] border-t border-[#3A5B93]/10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
        
        {/* Üst Kısım: 5 Kolonlu Yapı (Mobilde her şey ortalanır, masaüstünde sola hizalı) */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[40px] lg:gap-[20px] mb-[60px]">
          
          {/* Kolon 1: LOGO */}
          <div className="flex-shrink-0 lg:w-[200px] flex justify-center lg:justify-start w-full lg:w-auto">
            <Link href="/">
              <img 
                src="/logo.svg" 
                alt="Luno Logo" 
                className="h-[52px] md:h-[60px] lg:h-[52px] w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Kolon 2: Sayfa Menüsü (Mobilde gizlenir) */}
          <div className="hidden lg:flex flex-col gap-[12px]">
            {/* DÜZELTME: Linkler '#' yerine '/' ile başlayacak şekilde gerçek sayfa rotalarına çevrildi */}
            <Link href="/how-it-works" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">How It Works</Link>
            <Link href="/lunobox" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">LunoBox</Link>
            <Link href="/card-packs" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">Card Packs</Link>
            <Link href="/faq" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">FAQ</Link>
            <Link href="/contact" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">Contact</Link>
          </div>

          {/* Kolon 3: Yasal Linkler (Mobilde gizlenir) */}
          <div className="hidden lg:flex flex-col gap-[12px]">
            <Link href="#" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">Accessibility</Link>
            <Link href="#" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">Statement</Link>
            <Link href="#" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">Shipping Policy</Link>
            <Link href="#" className="text-[#505050] font-bold text-[15px] hover:text-[#3A5B93] transition-colors">Terms & Conditions</Link>
          </div>

          {/* Kolon 4: İletişim & Sosyal Medya (Mobilde ortalanır) */}
          <div className="flex flex-col gap-[12px] items-center lg:items-start text-center lg:text-left">
            <span className="text-[#505050] font-medium lg:font-bold text-[16px] lg:text-[15px]">+90 212 706 16 32</span>
            <span className="text-[#505050] font-medium lg:font-bold text-[16px] lg:text-[15px]">+90 505 292 43 32</span>
            <a href="mailto:info@lunobox.com" className="text-[#505050] font-medium lg:font-bold text-[16px] lg:text-[15px] hover:text-[#3A5B93] transition-colors">info@lunobox.com</a>
            <span className="text-[#505050] font-medium lg:font-bold text-[16px] lg:text-[15px]">Istanbul, Turkiye</span>
            
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center justify-center lg:justify-start gap-[16px] mt-[4px] text-[#F2BA44]">
               <a href="#" className="hover:scale-110 transition-transform" aria-label="X (Twitter)">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="lg:w-[20px] lg:h-[20px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z"/></svg>
               </a>
               <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-[20px] lg:h-[20px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
               <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="lg:w-[20px] lg:h-[20px]"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>
               </a>
            </div>
          </div>

          {/* Kolon 5: Mini Waitlist Formu (Mobilde ortalanır) */}
          <div className="flex flex-col gap-[12px] w-full max-w-[320px] lg:max-w-[280px] items-center lg:items-start text-center lg:text-left">
            {status === 'success' ? (
              <div className="w-full text-center lg:text-left p-[16px] bg-white/40 rounded-[12px] animate-fade-in border border-[#3A5B93]/10">
                <p className="text-[#F2BA44] font-extrabold text-[16px] mb-[4px]">
                  You're on the list! 🎉
                </p>
                <p className="text-[#505050]/80 font-medium text-[13px]">
                  We'll send you a gentle note when we're ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] lg:gap-[12px] w-full items-center lg:items-start">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  placeholder="Your email address" 
                  className="w-full h-[52px] lg:h-[48px] rounded-[12px] bg-white px-[16px] text-[#505050] outline-none shadow-sm placeholder:text-[#505050]/40 border border-transparent focus:border-[#4168A6]/30 transition-colors disabled:opacity-50"
                  required
                />
                
                {/* Hata Mesajı */}
                {status === 'error' && (
                  <p className="text-[#D66E63] text-[13px] font-bold animate-fade-in">{errorMsg}</p>
                )}

                {/* Gizli honeypot (bot koruması) alanı */}
                <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                
                {/* Mobilde el yazısı, masaüstünde standart yazı */}
                <p className="text-[#505050]/80 font-accent-hand text-[18px] lg:font-sans lg:text-[#505050]/60 lg:text-[12px]">
                  No spam. Just a gentle note when we're ready.
                </p>
                
                {/* Buton Mobilde tam ortada, Masaüstünde solda */}
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-[#F2BA44] hover:bg-[#E0A832] text-white font-bold text-[18px] lg:text-[16px] px-[36px] lg:px-[28px] py-[12px] lg:py-[10px] rounded-full shadow-md transition-transform hover:-translate-y-1 self-center lg:self-start mt-[4px] disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Alt Bilgi (Telif Hakkı) */}
        <div className="w-full flex justify-center lg:justify-start border-t border-[#3A5B93]/20 pt-[24px]">
          <p className="text-[#505050]/60 text-[13px] lg:text-[12px] font-medium text-center lg:text-left">
            © 2025 All rights reserved by HEFA Technology Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
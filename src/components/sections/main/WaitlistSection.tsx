/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';

export const WaitlistSection = () => {
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
    <section id="waitlist" className="relative w-full bg-[#DFEBF3] py-[60px] md:py-[120px] overflow-hidden flex justify-center px-[16px] md:px-[40px]">
      
      {/* YEŞİL KOL (Sadece geniş ekranlarda gösterilecek şekilde 'hidden lg:block' eklendi) */}
      <img 
        src="/images/waitlist-arm.svg" 
        alt="Pointing Arm" 
        className="absolute right-0 top-[65%] -translate-y-1/2 w-[350px] lg:w-[450px] pointer-events-none z-20 drop-shadow-lg hidden lg:block" 
      />

      {/* ANA KONTEYNER */}
      <div className="relative w-full max-w-[1280px] min-h-[588px] flex flex-col items-center justify-center px-[20px] py-[60px] z-10">

        {/* MASAÜSTÜ İÇİN SVG ARKA PLAN */}
        <img 
          src="/images/waitlist-blue-label.svg" 
          alt="Blue Background Label" 
          className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none drop-shadow-lg hidden lg:block mx-auto" 
        />
        
        {/* MOBİL İÇİN TEMİZ ARKA PLAN (Sünmüş SVG yerine yuvarlak köşeli kutu) */}
        <div className="absolute inset-0 w-full h-full bg-[#3B68AB] rounded-[32px] z-0 lg:hidden shadow-lg"></div>

        {/* İçerik ve Metinler */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          
          <span className="text-white/80 font-medium text-[15px] mb-[12px]">
            Join the Journey
          </span>

          <h2 className="text-[36px] md:text-[56px] font-extrabold text-white leading-[1.1] mb-[24px]">
            LunoBox is coming.<br />
            Slowly. Thoughtfully.
          </h2>

          <div className="text-white/90 text-[15px] md:text-[18px] mb-[40px] max-w-[650px] leading-relaxed">
            <p>LunoBox isn't available just yet.</p>
            <p>We're taking the time to get it right — from stories to cards to sound design.</p>
            <p>Join the list to be the first to know when we're ready.</p>
          </div>

          {status === 'success' ? (
            <div className="w-full max-w-[380px] text-center p-[24px] bg-white/10 backdrop-blur-sm border-[2px] border-white/20 rounded-[24px] animate-fade-in">
              <p className="text-[#F2BA44] font-extrabold text-[24px] mb-[8px]">
                You're on the list! 🎉
              </p>
              <p className="text-white/90 font-medium text-[16px]">
                We'll send you a gentle note when we're ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                placeholder="Your email address" 
                className="w-full max-w-[380px] h-[52px] rounded-full bg-white px-[24px] text-[#505050] outline-none shadow-sm mb-[12px] placeholder:text-[#505050]/50 focus:ring-4 focus:ring-[#F2BA44]/50 transition-all disabled:opacity-50"
                required
              />
              
              {status === 'error' && (
                <p className="text-[#F2BA44] text-[14px] font-bold text-center mb-[12px] animate-fade-in">
                  {errorMsg}
                </p>
              )}
              
              <p className="text-white/80 text-[13px] mb-[24px]">
                No spam. Just a gentle note when we're ready.
              </p>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-[#F2BA44] hover:bg-[#E0A832] text-white font-bold text-[16px] md:text-[18px] px-[32px] md:px-[40px] py-[14px] rounded-full shadow-md transition-transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
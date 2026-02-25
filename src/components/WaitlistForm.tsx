'use client';

import React, { useState } from 'react';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); // Spam koruması için gizli alan
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

      setStatus('success'); // Başarılı durumu
      setEmail('');
    } catch (err) {
      setStatus('error'); // Hata durumu
      setErrorMsg(err instanceof Error ? err.message : 'Bir hata oluştu');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full sm:w-[360px] text-center p-[20px] bg-white rounded-[8px] shadow-sm animate-fade-in mt-[16px]">
        <p className="text-[#EBB336] font-extrabold text-[20px] mb-[8px]">
          You're on the list! 🎉
        </p>
        <p className="text-[#505050] font-medium text-[16px]">
          We'll send you a gentle note when we're ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
      
      {/* GİZLİ HONEYPOT ALANI (Kullanıcı göremez) */}
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Email Input: Tam 360x55 boyutunda */}
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address" 
        className="w-full sm:w-[360px] h-[55px] bg-white rounded-[8px] px-[16px] text-[#505050] placeholder:text-[#505050]/50 outline-none shadow-sm focus:ring-2 focus:ring-[#EBB336] transition-all border border-transparent disabled:opacity-50"
        required
        disabled={status === 'loading'}
      />
      
      {status === 'error' && (
        <p className="text-[#D66E63] text-[14px] font-bold text-center mt-[8px] animate-fade-in">{errorMsg}</p>
      )}
      
      {/* Alt Metin: El yazısı fontu */}
      <p className="mt-[16px] mb-[20px] text-[#505050] font-accent-hand text-[16px] md:text-[18px]">
        No spam. Just a gentle note when we're ready.
      </p>
      
      {/* Buton: Tam 168x37 boyutunda */}
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-[168px] h-[37px] bg-[#EBB336] hover:bg-[#D4A12B] text-white font-bold text-[15px] rounded-[20px] flex items-center justify-center border-b-[2px] border-[#D4A12B] shadow-sm transition-all disabled:opacity-70"
      >
        {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
      </button>

    </form>
  );
};
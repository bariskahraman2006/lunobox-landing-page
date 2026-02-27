/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Sayfa URL'ini almak için eklendi!

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Şu anki sayfanın yolunu alıyoruz

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/lunobox', label: 'LunoBox' },
    { href: '/card-packs', label: 'Card Packs' },
    // DÜZELTME 1: '#faq' yerine '/faq' yazıldı. Artık ayrı sayfaya gidecek!
    { href: '/faq', label: 'FAQ' }, 
    { href: '/contact', label: 'Contact' },
  ];

  // Hangi sayfada olduğumuzu kontrol edip ona göre arkaplan rengini belirliyoruz
  const isSpecialPage = pathname === '/' || pathname === '/how-it-works';
  const navBgColor = isSpecialPage ? 'bg-[#C5E1F3]' : 'bg-[#DFEBF3]';

  return (
    <>
      {/* Navbar sınıfına statik renk yerine dinamik `${navBgColor}` değişkeni eklendi! */}
      <nav className={`absolute top-[15px] left-[16px] right-[16px] lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-[1280px] lg:right-auto h-[80px] z-50 ${navBgColor} border-[1px] border-white/70 rounded-[30px] flex items-center justify-between px-[20px] md:px-[40px] shadow-sm transition-all duration-300`}>
        
        {/* LOGO */}
        <Link href="/" className="shrink-0 flex items-center">
          <img 
            src="/logo.svg" 
            alt="Luno Logo" 
            className="h-[40px] md:h-[52px] w-auto object-contain" 
          />
        </Link>

        {/* MASAÜSTÜ MENÜ (Orta Kısım) */}
        <div className="hidden lg:flex items-center gap-[32px] xl:gap-[48px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#505050] font-medium text-[16px] hover:text-[#3A5B93] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* JOIN WAITLIST BUTONU (Sağ Kısım) */}
        <div className="shrink-0 hidden md:block">
          {/* DÜZELTME 2: '#waitlist' yerine '/#waitlist' yapıldı. */}
          <Link href="/#waitlist">
            <button className="bg-[#F2BA44] hover:bg-[#E0A832] text-white font-bold text-[16px] px-[28px] py-[12px] rounded-full shadow-sm transition-transform hover:-translate-y-[2px]">
              Join Waitlist
            </button>
          </Link>
        </div>

        {/* MOBİL MENÜ BUTONU (Hamburger İkonu) */}
        <button 
          className="lg:hidden text-[#505050] p-[8px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* MOBİL AÇILIR MENÜ */}
      {isMenuOpen && (
        <div className={`absolute top-[105px] left-[16px] right-[16px] ${navBgColor} border-[1px] border-white/70 rounded-[24px] shadow-lg z-40 p-[24px] flex flex-col gap-[16px] lg:hidden animate-in fade-in slide-in-from-top-4`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#505050] font-bold text-[18px] text-center border-b border-[#3A5B93]/10 pb-[12px]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* DÜZELTME 3: Mobil menüdeki waitlist butonu da '/#waitlist' olarak güncellendi. */}
          <Link href="/#waitlist" className="mt-[8px]" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full bg-[#F2BA44] text-white font-bold text-[18px] py-[14px] rounded-full shadow-md">
              Join Waitlist
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
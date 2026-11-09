'use client';

import React, { useState, useEffect } from 'react';
import { VJMonogram } from './VJMonogram';
import { PRIMARY_PHONE_NUMBER, formatWhatsAppUrl, buildNavContactMessage } from '@/lib/whatsapp';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const waUrl = formatWhatsAppUrl(PRIMARY_PHONE_NUMBER, buildNavContactMessage());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Packages', href: '#tour-packages' },
    { label: 'Vehicles', href: '#our-fleet' },
    { label: 'Testimonials', href: '#why-choose-us' },
    { label: 'Contacts', href: '#contact-us' },
  ];

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4 pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-white/95 border border-slate-200/90 shadow-md shadow-slate-900/5'
            : 'backdrop-blur-md bg-slate-950/25 border border-white/20 shadow-sm shadow-black/10'
        }`}
      >
        {/* Brand with Gold Laurel VJ Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.history.pushState) {
              window.history.pushState(null, '', window.location.pathname);
            }
          }}
          className="flex items-center gap-3 group shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 rounded-xl cursor-pointer"
          aria-label="VJ Tours and Travels Home"
        >
          <VJMonogram size={40} theme={isScrolled ? 'light' : 'dark'} />
          <span
            className={`font-display font-bold text-sm sm:text-base tracking-tight leading-tight transition-colors ${
              isScrolled
                ? 'text-slate-900 group-hover:text-[#065F46]'
                : 'text-white drop-shadow-xs group-hover:text-emerald-200'
            }`}
          >
            VJ TOURS &amp; TRAVELS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-600 hover:text-[#065F46] hover:bg-slate-50'
                  : 'text-white/90 hover:text-white hover:bg-white/15 drop-shadow-xs'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: WhatsApp CTA (desktop only) & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl font-semibold text-xs tracking-wide shadow-xs transition-all focus:outline-none focus:ring-2 shrink-0 ${
              isScrolled
                ? 'bg-slate-900 hover:bg-black text-white focus:ring-slate-900/30'
                : 'bg-emerald-600/90 hover:bg-emerald-600 text-white border border-emerald-400/30 backdrop-blur-sm focus:ring-emerald-500/40 shadow-sm'
            }`}
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Contact Us</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl focus:outline-none transition-colors ${
              isScrolled
                ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                : 'text-white hover:bg-white/15'
            }`}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 pointer-events-auto">
          <div
            className={`backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150 ${
              isScrolled
                ? 'bg-white/95 border border-slate-200/90'
                : 'bg-slate-950/90 border border-white/20'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center h-11 px-4 rounded-xl font-medium text-sm transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#065F46] hover:bg-slate-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div
              className={`pt-2 mt-1 border-t flex flex-col gap-2 ${
                isScrolled ? 'border-slate-100' : 'border-white/15'
              }`}
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#065F46] text-white font-semibold text-sm shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

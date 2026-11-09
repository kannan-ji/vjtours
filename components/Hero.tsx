'use client';

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  PRIMARY_PHONE_NUMBER,
  DISPLAY_PHONE_NUMBER,
  formatWhatsAppUrl,
  buildHeroInquiryMessage,
} from '@/lib/whatsapp';

export function Hero() {
  const waUrl = formatWhatsAppUrl(PRIMARY_PHONE_NUMBER, buildHeroInquiryMessage());

  return (
    <section id="hero" className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center overflow-hidden pt-20 sm:pt-24 pb-14 sm:pb-20">
      {/* Full-bleed background photo: Munnar tea hills road landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/aistudio/hero_vjtours-1_3d3038b9.jpg"
          alt="Munnar Tea Hills Road Kerala VJ Tours"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_35%]"
          referrerPolicy="no-referrer"
        />
        {/* Soft dark gradient on the left side to ensure crisp typographic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left flex flex-col items-start">
          {/* Headline matching attached HTML */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-6 font-normal drop-shadow-sm">
            Your Trusted Keralam Travel &amp; <span className="italic text-emerald-300">Holiday Partner</span>
          </h1>

          {/* Subheading matching attached HTML */}
          <p className="text-base md:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed mb-8 drop-shadow-sm">
            Direct Dispatch from Perumbavoor Hub • 15 Mins from Cochin Airport (COK) • Zero Middlemen • 100% Owned Fleet &amp; Hill-Certified Chauffeurs
          </p>

          {/* WhatsApp CTA & Phone Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-[#065F46] hover:bg-[#047857] text-white font-semibold text-sm tracking-wide shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Contact Us on WhatsApp</span>
            </a>

            <a
              href={`tel:+${PRIMARY_PHONE_NUMBER}`}
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-white hover:text-emerald-200 text-sm font-semibold tracking-wide transition-colors py-2 group underline-offset-4 hover:underline"
            >
              <Phone className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
              <span>Call {DISPLAY_PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

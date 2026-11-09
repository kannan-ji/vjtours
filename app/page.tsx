'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { PackagesSection } from '@/components/PackagesSection';
import { VehiclesSection } from '@/components/VehiclesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // When the website is opened or refreshed, ensure it starts at the hero section
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      // Reset scroll position to top
      window.scrollTo(0, 0);

      // If URL opened with a stale hash from previous in-page navigation, clean it up
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col relative overflow-x-hidden selection:bg-[#059669] selection:text-white">
      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. HERO */}
        <Hero />

        {/* 2. TRUST STRIP */}
        <TrustStrip />

        {/* 3. PACKAGES */}
        <PackagesSection />

        {/* 4. VEHICLES */}
        <VehiclesSection />

        {/* 5. TESTIMONIALS */}
        <TestimonialsSection />

        {/* 6. CONTACT US */}
        <ContactSection />
      </main>

      {/* 7. FOOTER */}
      <Footer />
    </div>
  );
}

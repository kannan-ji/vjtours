'use client';

import React from 'react';
import { VJMonogram } from './VJMonogram';

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <VJMonogram size={38} />
            <div>
              <span className="font-display font-bold text-sm tracking-tight text-slate-900 block">
                VJ TOURS AND TRAVELS
              </span>
              <span className="text-xs text-slate-500">
                Trusted local tour operator and chauffeur service based in Perumbavoor, Kerala.
              </span>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
            <a className="hover:text-emerald-800 transition-colors" href="#tour-packages">
              Packages
            </a>
            <a className="hover:text-emerald-800 transition-colors" href="#our-fleet">
              Vehicles
            </a>
            <a className="hover:text-emerald-800 transition-colors" href="#why-choose-us">
              Testimonials
            </a>
            <a className="hover:text-emerald-800 transition-colors" href="#contact-us">
              Contacts
            </a>
          </nav>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 VJ Tours and Travels Perumbavoor. All rights reserved. Government of Kerala approved transport partner.</p>
        </div>
      </div>
    </footer>
  );
}

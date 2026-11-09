'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  PRIMARY_PHONE_NUMBER,
  formatWhatsAppUrl,
  buildCustomTripMessage,
} from '@/lib/whatsapp';

interface PackageItem {
  id: string;
  name: string;
  duration: string;
  route: string;
  image: string;
  inclusions: string[];
}

const PACKAGES: PackageItem[] = [
  {
    id: 'munnar-cochin',
    name: 'Munnar Tea Valley & Cochin Heritage',
    duration: '3N / 4D',
    route: 'Cochin → Munnar → Cochin',
    image: '/assets/aistudio/navi-lotbFfrhm5Q-unsplash_9ddef83b.jpg',
    inclusions: [
      'Private AC chauffeur vehicle for entire tour',
      'Munnar tea plantation & Mattupetty sightseeing',
      'Cheeyappara & Valara waterfalls stops',
      'Cochin Fort Kochi & colonial heritage tour',
      'All toll gates, parking fees & driver allowances',
    ],
  },
  {
    id: 'kerala-circuit',
    name: 'Classic Kerala Circuit',
    duration: '4N / 5D',
    route: 'Cochin → Munnar → Thekkady → Alleppey',
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Private AC vehicle & experienced hill chauffeur',
      'Munnar hill views & tea museum visit',
      'Thekkady spice plantation & Periyar sanctuary transit',
      'Alleppey backwater cruise / houseboat coordination',
      'Zero hidden charges with transparent airport transfers',
    ],
  },
];

export function PackagesSection() {
  const customTripUrl = formatWhatsAppUrl(PRIMARY_PHONE_NUMBER, buildCustomTripMessage());

  return (
    <section id="tour-packages" className="w-full py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-2">
            Kerala Packages
          </h2>
          <p className="text-base text-slate-600">
            Rates vary by season. Message us for a quote.
          </p>
        </div>

        {/* 2 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className="flex flex-col justify-between bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-600 transition-all shadow-xs"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-emerald-800 text-xs font-bold shadow-xs">
                        {pkg.duration}
                      </span>
                      <span className="text-xs font-semibold text-white uppercase tracking-wide drop-shadow-sm truncate">
                        {pkg.route}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-4">
                      {pkg.name}
                    </h3>
                    <div className="space-y-3 mb-6">
                      {pkg.inclusions.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        Rates on request (seasonal)
                      </span>
                      <span className="text-xs font-medium text-emerald-700">
                        Customizable Itinerary
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Banner matching attached HTML */}
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-emerald-950">
              Want something different? Tell us your dates and interests.
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
              We craft fully customizable day-wise plans for families, honeymooners, and corporate teams.
            </p>
          </div>
          <a
            href={customTripUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-[#065F46] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

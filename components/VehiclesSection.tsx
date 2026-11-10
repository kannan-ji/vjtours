'use client';

import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Users, Luggage } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import wagonrImage from '@/public/assets/aistudio/vehicle-wagonr.jpg';
import dzireImage from '@/public/assets/aistudio/vehicle-dzire.jpg';
import ertigaImage from '@/public/assets/aistudio/vehicle-ertiga.jpg';
import {
  PRIMARY_PHONE_NUMBER,
  formatWhatsAppUrl,
  buildVehicleInquiryMessage,
} from '@/lib/whatsapp';

interface VehicleItem {
  id: string;
  name: string;
  image: string | StaticImageData;
  passengers: string;
  luggage: string;
  idealFor: string;
  features: string[];
}

const VEHICLES: VehicleItem[] = [
  {
    id: 'wagonr',
    name: 'WagonR',
    image: wagonrImage,
    passengers: '3-4 passengers',
    luggage: '2 small bags',
    idealFor: 'Couples & Solo Travelers',
    features: ['AC', 'Compact Hatchback', 'Easy Ghats Transit'],
  },
  {
    id: 'dzire',
    name: 'Dzire',
    image: dzireImage,
    passengers: '4 passengers',
    luggage: '2 large + 1 small suitcase',
    idealFor: 'Small Families & Couples',
    features: ['AC', 'Comfortable Sedan', 'Generous Boot Space'],
  },
  {
    id: 'ertiga',
    name: 'Ertiga',
    image: ertigaImage,
    passengers: '5-6 passengers',
    luggage: '3-4 large suitcases',
    idealFor: 'Families & Groups',
    features: ['Dual AC', 'Spacious 7-Seater', 'Reclining Comfort Seats'],
  },
];

export function VehiclesSection() {
  const customGroupUrl = formatWhatsAppUrl(
    PRIMARY_PHONE_NUMBER,
    buildVehicleInquiryMessage()
  );

  return (
    <section id="our-fleet" className="w-full py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-2">
            Our Vehicles
          </h2>
          <p className="text-base text-slate-600">
            Our own clean vehicles, driven by experienced local drivers.
          </p>
        </div>

        {/* 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-emerald-800 text-xs font-semibold shadow-xs">
                        {vehicle.idealFor}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white font-display font-bold text-lg drop-shadow-sm">
                      {vehicle.name}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2 text-xs md:text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{vehicle.passengers}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Luggage className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {vehicle.features.map((feat) => (
                        <span
                          key={feat}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other vehicles & custom fleet banner card matching packages section */}
        <div className="mt-12 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-emerald-950">
              Need a different vehicle or a larger group?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
              We&apos;ll arrange it for you — outstation vans, tempo travellers, or customized group transport.
            </p>
          </div>
          <a
            href={customGroupUrl}
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

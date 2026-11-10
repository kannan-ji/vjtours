'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  PRIMARY_PHONE_NUMBER,
  DISPLAY_PHONE_NUMBER,
  DISPLAY_SECONDARY_PHONE,
  formatWhatsAppUrl,
  buildEnquiryMessage,
} from '@/lib/whatsapp';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildEnquiryMessage(formData);
    const url = formatWhatsAppUrl(PRIMARY_PHONE_NUMBER, msg);
    window.open(url, '_blank');
  };

  return (
    <section id="contact-us" className="w-full py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-2">
                Plan your Kerala trip with us
              </h2>
              <p className="text-base text-slate-600">
                Reach us directly or drop an enquiry. We operate round-the-clock from our Perumbavoor hub.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-display font-bold text-base text-slate-900">
                  VJ Tours and Travels
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Main Central Road (MC Road), Perumbavoor, Ernakulam District, Kerala – 683542
                </div>
                <div className="text-xs text-emerald-800 font-medium pt-0.5">
                  15 minutes from Cochin International Airport (COK)
                </div>
              </div>
            </div>

            {/* Email Contact Detail */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Email Us</div>
                <a
                  href="mailto:vjtoursperumbavoor@gmail.com"
                  className="text-xs sm:text-sm font-medium text-slate-900 hover:text-emerald-700 transition-colors truncate block"
                >
                  vjtoursperumbavoor@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="text-xs font-semibold text-slate-600 mb-2.5">
                Connect on Social Media
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200 text-xs font-medium transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 text-xs font-medium transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Call us */}
            <div className="pt-1">
              <div className="text-xs font-semibold text-slate-600 mb-2.5">
                Call us
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={`tel:+${PRIMARY_PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition-all shrink-0"
                >
                  <Phone className="w-4 h-4 shrink-0 text-white" />
                  <span>Call {DISPLAY_PHONE_NUMBER}</span>
                </a>

                <a
                  href="tel:+919847054620"
                  className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition-all shrink-0"
                >
                  <Phone className="w-4 h-4 shrink-0 text-white" />
                  <span>Call {DISPLAY_SECONDARY_PHONE}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Enquiry Form matching updated specs */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
              Enquiry
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="enq-name" className="block text-xs font-semibold text-slate-600 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="enq-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full h-10 px-3.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label htmlFor="enq-phone" className="block text-xs font-semibold text-slate-600 mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="enq-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full h-10 px-3.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label htmlFor="enq-message" className="block text-xs font-semibold text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  id="enq-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Munnar, Alleppey, Thekkady or custom tour enquiry"
                  className="w-full p-3 rounded-lg border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-emerald-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-[#065F46] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Send on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

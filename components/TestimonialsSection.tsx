'use client';

import React from 'react';

interface ReviewItem {
  id: string;
  name: string;
  city: string;
  tripType: string;
  quote: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    name: 'Rahul S.',
    city: 'Bengaluru',
    tripType: 'Family Vacation',
    quote:
      'The driver was waiting at Kochi airport right on time. Calm and safe driving on the Munnar hill roads, and he pointed out great tea spots and viewpoints along the way.',
  },
  {
    id: 'review-2',
    name: 'Priya & Amit M.',
    city: 'Mumbai',
    tripType: 'Honeymoon & Leisure',
    quote:
      'Booked an Ertiga for 5 days. Spotless car, very chill driver, and the price quoted on WhatsApp was exact with no extra surprise costs at the end.',
  },
  {
    id: 'review-3',
    name: 'George K.',
    city: 'Chennai',
    tripType: 'Family Trip',
    quote:
      'Traveled with my elderly parents and kids. Our driver was genuinely kind, patient with stops, and made sure everyone was comfortable throughout.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="why-choose-us" className="w-full py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs mb-3">
            <span className="text-amber-500 text-sm">★</span>
            <span>Rated 4.9 on Google</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
            What Travellers Say
          </h2>
        </div>

        {/* 3 Review Cards matching attached HTML */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3" aria-label="5 stars">
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 italic">
                  “{review.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-slate-900">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-500">{review.city}</div>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                    review.id === 'review-2'
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {review.tripType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

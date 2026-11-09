'use client';

import React from 'react';

export function TrustStrip() {
  const stats = [
    { value: '3', label: 'Own vehicles' },
    { value: '15 min', label: 'From Cochin Airport' },
    { value: '24/7', label: 'Support' },
    { value: '10+', label: 'Years on the road', editableNote: 'years on the road' },
  ];

  return (
    <section className="w-full bg-white border-b border-slate-200 py-6 sm:py-8 shadow-xs relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 border border-slate-200/60 rounded-2xl md:border-0 md:rounded-none">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-4 sm:p-5 text-center ${
                idx % 2 === 1 && idx < 2 ? 'border-l border-slate-200/90 md:border-l-0' : ''
              } ${idx === 3 ? 'border-l border-slate-200/90 md:border-l-0' : ''}`}
            >
              <span className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

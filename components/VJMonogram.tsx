'use client';

import React from 'react';

interface VJMonogramProps {
  size?: number;
  className?: string;
  theme?: 'dark' | 'light';
}

export function VJMonogram({ size = 40, className = '', theme = 'light' }: VJMonogramProps) {
  const goldColor = '#C59A45';
  const textColor = theme === 'dark' ? '#FFFFFF' : '#1C1B1B';

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="VJ Tours and Travels Monogram"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Subtle circular background disc */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={theme === 'dark' ? '#0F261E' : '#FDFBF7'}
          stroke={goldColor}
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />

        {/* Left Laurel Branch */}
        <g stroke={goldColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main branch stem */}
          <path d="M 50 86 C 26 82 14 62 14 46 C 14 34 22 22 36 14" />
          
          {/* Leaves */}
          <path d="M 45 83 C 40 85 36 82 35 79 C 39 77 43 79 45 83 Z" fill={goldColor} fillOpacity="0.35" />
          <path d="M 37 77 C 31 79 26 75 25 71 C 30 70 35 72 37 77 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 28 69 C 22 70 17 65 17 60 C 22 60 27 63 28 69 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 21 59 C 16 58 13 52 14 47 C 19 48 23 52 21 59 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 18 47 C 14 45 13 39 15 34 C 20 36 22 41 18 47 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 19 36 C 16 32 17 26 21 22 C 24 26 24 31 19 36 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 24 25 C 23 20 27 15 32 13 C 33 18 31 22 24 25 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 33 16 C 34 11 40 8 45 8 C 44 13 40 16 33 16 Z" fill={goldColor} fillOpacity="0.4" />
        </g>

        {/* Right Laurel Branch */}
        <g stroke={goldColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main branch stem */}
          <path d="M 50 86 C 74 82 86 62 86 46 C 86 34 78 22 64 14" />
          
          {/* Leaves */}
          <path d="M 55 83 C 60 85 64 82 65 79 C 61 77 57 79 55 83 Z" fill={goldColor} fillOpacity="0.35" />
          <path d="M 63 77 C 69 79 74 75 75 71 C 70 70 65 72 63 77 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 72 69 C 78 70 83 65 83 60 C 78 60 73 63 72 69 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 79 59 C 84 58 87 52 86 47 C 81 48 77 52 79 59 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 82 47 C 86 45 87 39 85 34 C 80 36 78 41 82 47 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 81 36 C 84 32 83 26 79 22 C 76 26 76 31 81 36 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 76 25 C 77 20 73 15 68 13 C 67 18 69 22 76 25 Z" fill={goldColor} fillOpacity="0.4" />
          <path d="M 67 16 C 66 11 60 8 55 8 C 56 13 60 16 67 16 Z" fill={goldColor} fillOpacity="0.4" />
        </g>

        {/* Small ribbon bow at bottom */}
        <circle cx="50" cy="87" r="2.5" fill={goldColor} />

        {/* Monogram letters VJ */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-serif), Georgia, serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="1"
          fill={textColor}
        >
          VJ
        </text>
      </svg>
    </div>
  );
}

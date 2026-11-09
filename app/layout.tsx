import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope } from 'next/font/google';
import './globals.css';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VJ Tours and Travels | Kerala Cabs & Tour Operator Perumbavoor',
  description:
    'Reliable Kerala cabs and tour operator based in Perumbavoor, 15 minutes from Cochin Airport. Airport transfers, outstation trips, and custom Kerala holiday packages.',
  openGraph: {
    title: 'VJ Tours and Travels | Kerala Cabs & Tour Operator',
    description:
      'Reliable Kerala cabs and tour operator based in Perumbavoor, 15 minutes from Cochin Airport.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VJ Tours and Travels | Kerala Cabs & Tour Operator',
    description:
      'Reliable Kerala cabs and tour operator based in Perumbavoor, 15 minutes from Cochin Airport.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAFAFA] text-[#171717] antialiased selection:bg-[#0F6B4A] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

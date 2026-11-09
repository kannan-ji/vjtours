export const PRIMARY_PHONE_NUMBER = '917025304620';
export const DISPLAY_PHONE_NUMBER = '+91 70253 04620';
export const SECONDARY_PHONE_NUMBER = '919847054620';
export const DISPLAY_SECONDARY_PHONE = '+91 98470 54620';

export interface EnquiryFormData {
  name: string;
  phone: string;
  message: string;
}

export function formatWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function buildNavContactMessage(): string {
  return 'Hello VJ Tours, I would like to book a Chauffeur or Itinerary';
}

export function buildHeroInquiryMessage(): string {
  return 'Hello VJ Tours, I would like to plan my Kerala trip and request a chauffeur quote';
}

export function buildVehicleInquiryMessage(vehicleName?: string): string {
  if (vehicleName) {
    return `Hello VJ Tours, I would like to inquire about vehicle availability and rates for ${vehicleName}`;
  }
  return 'Hello VJ Tours, I would like to inquire about vehicle availability and rates';
}

export function buildPackageQuoteMessage(packageName: string, duration: string): string {
  return `Hello VJ Tours, I would like to get a quote and details for the ${packageName} (${duration}) package.`;
}

export function buildCustomTripMessage(): string {
  return 'Hello VJ Tours, I would like to customize my Kerala trip itinerary';
}

export function buildContactSectionMessage(): string {
  return 'Hello VJ Tours, I would like to plan my trip and request a quote';
}

export function buildEnquiryMessage(data: EnquiryFormData): string {
  const n = data.name.trim() || 'Guest';
  const p = data.phone.trim() || '';
  const m = data.message.trim() || 'Kerala tour & cab inquiry';

  return `Hello VJ Tours, I would like an itinerary quote:
Name: ${n}
Phone: ${p}
Message: ${m}`;
}

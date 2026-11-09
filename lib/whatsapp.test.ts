import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatWhatsAppUrl,
  buildNavContactMessage,
  buildHeroInquiryMessage,
  buildVehicleInquiryMessage,
  buildEnquiryMessage,
} from './whatsapp';

test('formatWhatsAppUrl properly strips non-digits and URL-encodes message', () => {
  const url = formatWhatsAppUrl('+91 70253 04620', 'Hello VJ Tours, I would like to plan my trip');
  assert.equal(url, 'https://wa.me/917025304620?text=Hello%20VJ%20Tours%2C%20I%20would%20like%20to%20plan%20my%20trip');
});

test('buildNavContactMessage matches reference HTML', () => {
  assert.equal(buildNavContactMessage(), 'Hello VJ Tours, I would like to book a Chauffeur or Itinerary');
});

test('buildHeroInquiryMessage matches reference HTML', () => {
  assert.equal(buildHeroInquiryMessage(), 'Hello VJ Tours, I would like to plan my Kerala trip and request a chauffeur quote');
});

test('buildVehicleInquiryMessage includes vehicle name', () => {
  const msg = buildVehicleInquiryMessage('Innova Crysta / Ertiga');
  assert.ok(msg.includes('Innova Crysta / Ertiga'));
});

test('buildEnquiryMessage formats name, phone, and message', () => {
  const msg = buildEnquiryMessage({
    name: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    message: 'Looking for 3-day Munnar cab with driver',
  });
  assert.ok(msg.includes('Ramesh Kumar'));
  assert.ok(msg.includes('+91 98765 43210'));
  assert.ok(msg.includes('Looking for 3-day Munnar cab with driver'));
});

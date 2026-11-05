/**
 * Central business configuration.
 *
 * EVERYTHING the business needs to change (WhatsApp number, phone, email,
 * address, hours, Instagram) lives in this one file. Replace the placeholder
 * values marked with "TODO(business)" once confirmed with Gunjan.
 */

export const site = {
  name: "The Colour Palette by Gunjan",
  shortName: "The Colour Palette",
  founder: "Gunjan",
  tagline: "Beauty, curated like art.",
  description:
    "A boutique beauty studio by Gunjan — makeup, nails, lashes, hair and curated beauty services in one elegant experience.",
  instagram: "https://www.instagram.com/thecolourpalettebygunjan/",
  contact: {
    /** TODO(business): real WhatsApp number, international format, digits only (e.g. 919876543210) */
    whatsappNumber: "919717116976",
    /** TODO(business): real display phone number */
    phoneDisplay: "+91 97171 16976",
    email: "tcpbygunjan@gmail.com",
    address: "Shop No. G-8, Ground Floor, DC Chowk, Sector 9, Rohini, Delhi",
    mapsUrl: "https://maps.app.goo.gl/akwNkCmq8T2fJAxv7?g_st=iw",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    ],
  },
} as const;

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Pre-filled appointment enquiry used by the booking form. */
export function bookingMessage(fields: {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}): string {
  const lines = [
    `Hello ${site.shortName}! I'd like to book an appointment.`,
    ``,
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Service: ${fields.service}`,
    `Preferred date: ${fields.date}`,
    `Preferred time: ${fields.time}`,
  ];
  if (fields.notes?.trim()) lines.push(`Notes: ${fields.notes.trim()}`);
  return lines.join("\n");
}

import makeupImg from "@/assets/gp.jpeg";
import nailsImg from "@/assets/nails.jpeg";
import lashesImg from "@/assets/gg.jpeg";
import hairImg from "@/assets/hair.jpeg";
import beautyImg from "@/assets/new.jpeg";

export type ServiceItem = {
  name: string;
  description: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  services: ServiceItem[];
};

/**
 * SUGGESTED service menu. Names and descriptions are editable examples —
 * every category must be verified with the business before publish
 * (see the note shown on the Services page).
 */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "makeup",
    name: "Makeup",
    tagline: "Looks painted for the moment — soft, luminous, unforgettable.",
    image: makeupImg,
    imageAlt: "Makeup artist applying rose-gold eyeshadow with a luxury brush",
    services: [
      {
        name: "Bridal Makeup",
        description:
          "A complete bridal look designed around your outfit, jewellery and wedding rituals, with long-wear products that photograph beautifully.",
      },
      {
        name: "Party Makeup",
        description:
          "Glamorous evening looks — from soft glow to full glam — tailored to the occasion.",
      },
      {
        name: "Engagement Makeup",
        description:
          "Polished, camera-ready styling for your engagement ceremony and photos.",
      },
      {
        name: "Professional Makeup",
        description:
          "Refined looks for shoots, events and professional appearances.",
      },
    ],
  },
  {
    id: "nails",
    name: "Nails",
    tagline: "Finishing touches in ivory, blush and gold.",
    image: nailsImg,
    imageAlt: "Elegant hands with blush gel nails and gold foil nail art",
    services: [
      {
        name: "Nail Extensions",
        description:
          "Custom-shaped extensions sculpted to a length and silhouette that suits your hands.",
      },
      {
        name: "Nail Art",
        description:
          "Hand-painted designs, chrome accents, foil details and minimal luxury art.",
      },
      {
        name: "Gel Nails",
        description:
          "High-shine gel overlays and colour with a lasting, chip-resistant finish.",
      },
      {
        name: "Nail Care",
        description:
          "Cuticle care, shaping and strengthening treatments for healthy natural nails.",
      },
    ],
  },
  {
    id: "lashes",
    name: "Lashes",
    tagline: "A whisper of drama, feathered to perfection.",
    image: lashesImg,
    imageAlt: "Close-up of an eye with volume eyelash extensions",
    services: [
      {
        name: "Eyelash Extensions",
        description:
          "Classic, hybrid and volume sets applied strand by strand for a weightless feel.",
      },
      {
        name: "Lash Styling",
        description:
          "Mapping and styling designed to flatter your eye shape and features.",
      },
      {
        name: "Lash Enhancement",
        description:
          "Subtle lifts, tints and fills that open up the eyes with natural definition.",
      },
    ],
  },
  {
    id: "hair",
    name: "Hair",
    tagline: "Silk, shine and shapes that move.",
    image: hairImg,
    imageAlt: "Woman with long glossy chocolate-brown waves in soft light",
    services: [
      {
        name: "Hair Styling",
        description:
          "Blowouts, waves, updos and occasion styling that holds from daylight to midnight.",
      },
      {
        name: "Hair Colouring",
        description:
          "Dimensional colour, balayage and glosses curated to your tone.",
      },
      {
        name: "Hair Treatments",
        description:
          "Repair, smoothing and shine treatments for healthier, softer hair.",
      },
      {
        name: "Hair Transformations",
        description:
          "Cut and colour transformations planned end-to-end for a new you.",
      },
    ],
  },
  {
    id: "beauty-services",
    name: "Beauty Services",
    tagline: "Skin-first rituals for your calmest glow.",
    image: beautyImg,
    imageAlt: "Woman relaxing during a gentle facial treatment with candles",
    services: [
      {
        name: "General Beauty Services",
        description:
          "Everyday essentials — threading, waxing and grooming — with careful, gentle technique.",
      },
      {
        name: "Beauty Treatments",
        description:
          "Facials and skin rituals selected for your skin's mood that day.",
      },
      {
        name: "Personalized Beauty Care",
        description:
          "A plan built around you — combining services into one seamless appointment.",
      },
    ],
  },
];

/** Flat list of every service name, used by the booking form. */
export const allServiceNames: string[] = serviceCategories.flatMap((c) =>
  c.services.map((s) => `${c.name} — ${s.name}`),
);

/** Shown on the Services page until the menu is verified with the business. */
export const servicesVerificationNote =
  "Service names and descriptions above are suggested examples. Final offerings, availability and pricing are to be confirmed with the studio.";

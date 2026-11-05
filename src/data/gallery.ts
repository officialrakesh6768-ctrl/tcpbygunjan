import heroImg from "@/assets/hero.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import bridalImg from "@/assets/gallery-bridal.jpg";
import nailArtImg from "@/assets/gallery-nailart.jpg";
import partyImg from "@/assets/gallery-party.jpg";
import colourImg from "@/assets/gallery-colour.jpg";
import m1Img from "@/assets/m1.jpeg";
import m2Img from "@/assets/m2.jpeg";
import m3Img from "@/assets/m3.jpeg";
import n1Img from "@/assets/n1.jpeg";
import n2Img from "@/assets/n2.jpeg";
import n3Img from "@/assets/n3.jpeg";
import n4Img from "@/assets/n4.jpeg";
import h1Img from "@/assets/h1.PNG";
import h2Img from "@/assets/h2.PNG";
import h4Img from "@/assets/h4.jpeg";
import h5Img from "@/assets/h5.jpeg";
import h6Img from "@/assets/h6.jpeg";
import h7Img from "@/assets/h7.jpeg";
import h8Img from "@/assets/h8.jpeg";
import k1Img from "@/assets/k1.jpeg";
import k2Img from "@/assets/k2.jpeg";
import k3Img from "@/assets/k3.jpeg";

export type GalleryCategory = "makeup" | "nails" | "lashes" | "hair" | "beauty";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
};

/**
 * Placeholder editorial images. Replace each entry's `src` import with the
 * studio's own Instagram photos — never present these as the business's work.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "bridal-glow",
    src: m1Img,
    alt: "Bride in ivory and gold with traditional bridal makeup",
    category: "makeup",
    title: "Bridal glow",
  },
  {
    id: "evening-glam",
    src: m2Img,
    alt: "Party makeup look with gold eyeliner and luminous skin",
    category: "makeup",
    title: "Evening glam",
  },
  {
    id: "editorial-bronze",
    src: m3Img,
    alt: "Rose-gold eye makeup being applied with a luxury brush",
    category: "makeup",
    title: "Bronze editorial",
  },
  {
    id: "floral-bridal",
    src: k1Img,
    alt: "Bridal hairstyle adorned with colorful flowers",
    category: "makeup",
    title: "Floral bridal",
  },
  {
    id: "celebration-glam",
    src: k2Img,
    alt: "Guest in a pink sari with soft glam makeup",
    category: "makeup",
    title: "Celebration glam",
  },
  {
    id: "traditional-bridal",
    src: k3Img,
    alt: "Traditional bridal makeup with red attire and jewelry",
    category: "makeup",
    title: "Traditional bridal",
  },
  {
    id: "soft-focus-portrait",
    src: n1Img,
    alt: "Soft glam portrait with smoky bronze eyes",
    category: "makeup",
    title: "Soft focus",
  },
  {
    id: "gold-foil-nails",
    src: n2Img,
    alt: "Blush gel nails with delicate gold foil art",
    category: "nails",
    title: "Gold foil",
  },
  {
    id: "burgundy-chrome",
    src: n3Img,
    alt: "Burgundy and chrome gold stiletto nail art",
    category: "nails",
    title: "Burgundy chrome",
  },
  {
    id: "nail-detail",
    src: n4Img,
    alt: "Detailed nail art design",
    category: "nails",
    title: "Nail detail",
  },
  {
    id: "honey-balayage",
    src: colourImg,
    alt: "Honey-caramel balayage in soft curls",
    category: "hair",
    title: "Honey balayage",
  },
  {
    id: "hair-look-one",
    src: h1Img,
    alt: "Styled hair look",
    category: "hair",
    title: "Hair look",
  },
  {
    id: "hair-look-two",
    src: h2Img,
    alt: "Finished hair styling",
    category: "hair",
    title: "Finished style",
  },
  {
    id: "hair-look-three",
    src: h4Img,
    alt: "Finished hair styling",
    category: "hair",
    title: "Hair finish",
  },
  {
    id: "hair-look-four",
    src: h5Img,
    alt: "Styled hair look",
    category: "hair",
    title: "Hair look",
  },
  {
    id: "hair-look-five",
    src: h6Img,
    alt: "Finished hair styling",
    category: "hair",
    title: "Finished style",
  },
  {
    id: "hair-look-six",
    src: h7Img,
    alt: "Hair styling detail",
    category: "hair",
    title: "Styling detail",
  },
  {
    id: "hair-look-seven",
    src: h8Img,
    alt: "Glossy styled hair",
    category: "hair",
    title: "Glossy finish",
  },
];

export const galleryFilters: { value: GalleryCategory | "all"; label: string }[] =
  [
    { value: "all", label: "All" },
    { value: "makeup", label: "Makeup" },
    { value: "nails", label: "Nails" },
    { value: "lashes", label: "Lashes" },
    { value: "hair", label: "Hair" },
    { value: "beauty", label: "Beauty" },
  ];

export const galleryPlaceholderNote =
  "Sample editorial imagery is shown for design. It will be replaced with the studio's own work — these photos are not presented as client results.";

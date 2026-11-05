export type Testimonial = {
  quote: string;
  name: string;
  service: string;
};

/**
 * PLACEHOLDER testimonials for layout only. These are sample quotes, not real
 * client reviews — replace each entry with genuine feedback (with permission)
 * before publish. Initials are used instead of photos.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Sample review — the whole experience felt calm and personal, and the makeup lasted through the entire celebration.",
    name: "A. S.",
    service: "Bridal Makeup",
  },
  {
    quote:
      "Sample review — my nails have never looked this refined. The attention to detail is on another level.",
    name: "R. K.",
    service: "Nail Art",
  },
  {
    quote:
      "Sample review — soft, natural lashes that still look incredible weeks later.",
    name: "S. M.",
    service: "Eyelash Extensions",
  },
  {
    quote:
      "Sample review — Gunjan understood exactly the look I wanted before I could even describe it fully.",
    name: "P. D.",
    service: "Party Makeup",
  },
];

export const testimonialsPlaceholderNote =
  "The reviews shown are placeholders for design. Real client testimonials will replace them.";

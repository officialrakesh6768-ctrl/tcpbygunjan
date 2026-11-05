import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const telHref = `tel:${site.contact.phoneDisplay.replace(/[^\d+]/g, "")}`;

/** Small pill label shown next to a floating button on hover. */
function FloatLabel({ children }: { children: string }) {
  return (
    <span
      className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border bg-background/95 px-3.5 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-foreground opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100 sm:group-hover:block"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

/**
 * Floating contact shortcuts, visible on every page:
 * WhatsApp chat, Instagram, and a direct call button.
 */
export function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${site.name} on Instagram`}
        className="group relative grid h-11 w-11 place-items-center rounded-full bg-instagram text-instagram-foreground shadow-[0_10px_24px_-10px_oklch(0.5_0.18_340)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <FloatLabel>Instagram</FloatLabel>
        <Instagram className="h-5 w-5" aria-hidden="true" />
      </a>

      <a
        href={telHref}
        aria-label={`Call ${site.shortName}`}
        className="group relative grid h-11 w-11 place-items-center rounded-full bg-call text-call-foreground shadow-[0_10px_24px_-10px_var(--color-call)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <FloatLabel>Call us</FloatLabel>
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>

      <a
        href={waLink("Hello! I'd like to know more about your beauty services.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_12px_30px_-8px_var(--color-whatsapp)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <FloatLabel>WhatsApp</FloatLabel>
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s]"
          aria-hidden="true"
        />
        <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </motion.div>
  );
}

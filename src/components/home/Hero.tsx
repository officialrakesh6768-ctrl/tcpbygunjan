import { motion } from "framer-motion";
import heroImg from "@/assets/gcoverphoto.jpeg";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/PremiumButton";

/** Four fine gold corner ticks framing the hero portrait. */
function GoldCorners() {
  const corner = "absolute h-7 w-7 border-gold";
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(corner, "-left-2.5 -top-2.5 border-l-2 border-t-2")}
      />
      <span
        aria-hidden="true"
        className={cn(corner, "-right-2.5 -top-2.5 border-r-2 border-t-2")}
      />
      <span
        aria-hidden="true"
        className={cn(corner, "-bottom-2.5 -left-2.5 border-b-2 border-l-2")}
      />
      <span
        aria-hidden="true"
        className={cn(corner, "-bottom-2.5 -right-2.5 border-b-2 border-r-2")}
      />
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 sm:pt-32">
      {/* Oversized serif watermark behind the composition */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-16 select-none font-display text-[24vw] italic leading-none text-gold/10 sm:top-8 sm:text-[15rem] lg:text-[17rem]"
      >
        Palette
      </span>
      {/* Soft gold aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.45em] text-gold-deep"
          >
            Makeup · Nails · Lashes · Hair · Beauty
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl leading-[1.04] sm:text-6xl lg:text-7xl"
          >
            Your face is the canvas.
            <span className="text-gradient-gold mt-2 block italic">
              We bring the palette.
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 flex items-center justify-center gap-3 lg:mx-0 lg:justify-start"
            aria-hidden="true"
          >
            <span className="gold-rule h-px w-16" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="gold-rule h-px w-16" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-8 max-w-lg font-sans text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg"
          >
            {site.name} is a boutique beauty experience — soft, luminous,
            detail-obsessed artistry across makeup, nails, lashes, hair and
            curated beauty services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <ButtonLink to="/services" variant="outline" size="lg">
              Explore Services
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          <GoldCorners />
          <div className="editorial-frame relative rounded-3xl shadow-luxe">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              <img
                src={heroImg}
                alt="Soft glam beauty portrait with smoky bronze eyes and glowing skin"
                width={1920}
                height={1200}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/4.4] lg:aspect-[4/5]"
              />
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute -bottom-6 left-4 hidden border-t border-gold/50 bg-card px-7 py-5 shadow-[0_18px_50px_-20px_rgba(33,26,18,0.35)] sm:block lg:-left-8"
          >
            <p className="font-display text-2xl italic text-gold-deep">
              {site.tagline}
            </p>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {site.name}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { site, waLink } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonAnchor } from "@/components/ui/PremiumButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blush/10 blur-[110px]"
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto max-w-3xl px-6">
        <div className="panel-glass rounded-[2rem] px-8 py-14 text-center sm:px-14">
          <div
            className="flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
          <p className="mt-6 font-sans text-[10px] font-medium uppercase tracking-[0.45em] text-gold">
            Reserve your moment
          </p>
          <h2 className="mt-5 text-4xl leading-[1.1] sm:text-5xl">
            Let&apos;s create your most{" "}
            <span className="italic text-gold">beautiful</span> look yet
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-primary-foreground/70">
            Appointments are limited each day so every guest receives unhurried,
            dedicated attention. Message us to plan yours.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonAnchor
              href={waLink(
                `Hello ${site.shortName}! I'd like to ask about your services.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:border-gold hover:bg-transparent hover:text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </ButtonAnchor>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

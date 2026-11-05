import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { site } from "@/config/site";
import {
  serviceCategories,
  servicesVerificationNote,
} from "@/data/services";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { FadeImage } from "@/components/ui/FadeImage";
import { ButtonAnchor } from "@/components/ui/PremiumButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/config/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${site.name}` },
      {
        name: "description",
        content:
          "Bridal and party makeup, nail extensions and art, eyelash extensions, hair styling, colour and treatments, plus curated beauty services at The Colour Palette by Gunjan.",
      },
      { property: "og:title", content: `Services — ${site.name}` },
      {
        property: "og:description",
        content:
          "Five crafts, one signature finish: makeup, nails, lashes, hair and beauty services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="The menu of artistry"
        description="Five crafts, each finished to the same signature standard. Explore what the studio offers."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 flex items-start gap-3 rounded-xl border border-dashed border-gold/60 bg-gold-soft/30 p-5">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
            <p className="font-sans text-xs leading-relaxed text-muted-foreground">
              {servicesVerificationNote}
            </p>
          </Reveal>

          <div className="space-y-24">
            {serviceCategories.map((c, i) => {
              const reversed = i % 2 === 1;
              return (
                <article
                  key={c.id}
                  id={c.id}
                  className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20"
                >
                  <Reveal
                    className={cn("relative", reversed && "lg:order-2")}
                  >
                    <FadeImage
                      src={c.image}
                      alt={c.imageAlt}
                      className="relative aspect-[4/5] w-full rounded-3xl"
                      href={site.instagram}
                    />
                  </Reveal>

                  <div className={cn(reversed && "lg:order-1")}>
                    <Reveal>
                      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
                        {String(i + 1).padStart(2, "0")} — {c.name}
                      </p>
                      <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
                        {c.name}
                      </h2>
                      <p className="mt-4 font-display text-xl italic text-muted-foreground">
                        {c.tagline}
                      </p>
                      <div
                        className="gold-rule mt-6 h-px w-24"
                        aria-hidden="true"
                      />
                    </Reveal>
                    <ul className="mt-8 space-y-4">
                      {c.services.map((s, j) => (
                        <Reveal
                          key={s.name}
                          as="li"
                          delay={0.05 * j}
                          className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_16px_40px_-24px_var(--color-gold)]"
                        >
                          <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-gold-deep">
                            {s.name}
                          </h3>
                          <p className="mt-1.5 font-sans text-sm leading-relaxed text-muted-foreground">
                            {s.description}
                          </p>
                        </Reveal>
                      ))}
                    </ul>
                    <Reveal
                      delay={0.15}
                      className="mt-8 flex flex-wrap gap-4"
                    >
                      <ButtonAnchor
                        href={waLink(
                          `Hello ${site.shortName}! I'd like to ask about your ${c.name.toLowerCase()} services.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="md"
                      >
                        <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                        Ask on WhatsApp
                      </ButtonAnchor>
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

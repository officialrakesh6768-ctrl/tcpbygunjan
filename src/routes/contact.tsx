import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonAnchor } from "@/components/ui/PremiumButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      {
        name: "description",
        content: `Get in touch with ${site.name} — WhatsApp, Instagram and studio details. Book your beauty appointment today.`,
      },
      { property: "og:title", content: `Contact — ${site.name}` },
      {
        property: "og:description",
        content: "Reach the studio on WhatsApp or Instagram, or send a booking enquiry.",
      },
    ],
  }),
  component: ContactPage,
});

const contactPlaceholderNote =
  "Contact details shown are placeholders — the studio's phone number, email, address and hours will be confirmed here.";

function ContactPage() {
  const mapsUrl = site.contact.mapsUrl.trim();

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        description="The fastest way to reach the studio is WhatsApp — we usually reply within the day."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl rounded-xl border border-dashed border-gold/60 bg-gold-soft/30 p-5 text-center">
            <p className="font-sans text-xs italic leading-relaxed text-muted-foreground">
              {contactPlaceholderNote}
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/60">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blush text-blush-deep">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl">Call the studio</h2>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                {site.contact.phoneDisplay}
              </p>
              <div className="mt-6 flex flex-col items-center gap-3">
                <ButtonAnchor
                  href={`tel:${site.contact.phoneDisplay.replace(/[^+\d]/g, "")}`}
                  variant="outline"
                  size="sm"
                >
                  Call now
                </ButtonAnchor>
                <ButtonAnchor
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  size="sm"
                >
                  <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </ButtonAnchor>
              </div>
            </Reveal>

            <Reveal
              delay={0.08}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blush text-blush-deep">
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl">Instagram</h2>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                @thecolourpalettebygunjan
              </p>
              <div className="mt-6">
                <ButtonAnchor
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  Follow the studio
                </ButtonAnchor>
              </div>
            </Reveal>

            <Reveal
              delay={0.16}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blush text-blush-deep">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl">Email</h2>
              <p className="mt-2 break-words font-sans text-sm text-muted-foreground">
                {site.contact.email}
              </p>
              <div className="mt-6">
                <ButtonAnchor
                  href={`mailto:${site.contact.email}`}
                  variant="outline"
                  size="sm"
                >
                  Write to us
                </ButtonAnchor>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                <div>
                  <h2 className="text-2xl">Find the studio</h2>
                  <p className="mt-2 font-sans text-base font-medium leading-relaxed text-foreground">
                    {site.contact.address}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                <div>
                  <h2 className="text-2xl">Opening hours</h2>
                  <ul className="mt-2 space-y-1.5 font-sans text-sm text-muted-foreground">
                    {site.contact.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6">
                        <span>{h.days}</span>
                        <span className="text-foreground/80">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="min-h-[320px] overflow-hidden rounded-2xl border border-border bg-champagne">
              {mapsUrl ? (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 p-8 text-center transition-colors hover:bg-gold-soft/30 focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-ring"
                >
                  <MapPin className="h-10 w-10 text-gold-deep" aria-hidden="true" />
                  <h2 className="text-2xl">Visit the studio</h2>
                  <span className="font-sans text-sm text-muted-foreground underline underline-offset-4">
                    Open location in Google Maps
                  </span>
                </a>
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 p-8 text-center">
                  <MapPin className="h-10 w-10 text-gold-deep" aria-hidden="true" />
                  <h2 className="text-2xl">Map coming soon</h2>
                  <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
                    The interactive Google Maps preview will appear here once
                    the studio address is confirmed.
                  </p>
                </div>
              )}
            </Reveal>
          </div>

          <Reveal className="mt-16 text-center" delay={0.1}>
            <SectionHeading
              eyebrow="Ready when you are"
              title="Get in touch"
              description="Send us a WhatsApp enquiry in under a minute."
            />
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonAnchor
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
              >
                <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                WhatsApp us
              </ButtonAnchor>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

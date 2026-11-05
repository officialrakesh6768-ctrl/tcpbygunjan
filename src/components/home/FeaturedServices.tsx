import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { serviceCategories } from "@/data/services";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FadeImage } from "@/components/ui/FadeImage";

export function FeaturedServices() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Five crafts, one signature finish"
          description="Every appointment is tailored — from a bridal transformation to the quiet luxury of a perfect set of nails."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((c, i) => (
            <Reveal
              key={c.id}
              as="article"
              delay={0.06 * i}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <div className="group block">
                <div className="editorial-frame relative rounded-2xl shadow-luxe">
                  <FadeImage
                    src={c.image}
                    alt={c.imageAlt}
                    className="aspect-[4/5] w-full"
                    href={site.instagram}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[oklch(0.2_0.02_60_/_78%)] via-[oklch(0.2_0.02_60_/_12%)] to-transparent"
                    aria-hidden="true"
                  />
                  {/* Gold hairline ring that appears on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 transition-all duration-500 group-hover:ring-gold/60"
                    aria-hidden="true"
                  />
                  <Link
                    to="/services"
                    hash={c.id}
                    className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6"
                    aria-label={`Explore ${c.name} services`}
                  >
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-white/60">
                        0{i + 1}
                      </p>
                      <h3 className="mt-1 text-4xl text-white">{c.name}</h3>
                      <p className="mt-1.5 max-w-[26ch] font-sans text-xs leading-relaxed text-white/75">
                        {c.tagline}
                      </p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal as="article" delay={0.3}>
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-gold/30 bg-wash p-8">
              <span
                className="mb-5 block h-2 w-2 rotate-45 bg-gold"
                aria-hidden="true"
              />
              <p className="font-display text-3xl italic text-gold-deep">
                Not sure where to begin?
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                Tell us the occasion and we'll design the appointment around
                you — makeup, nails, lashes and hair in one seamless visit.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

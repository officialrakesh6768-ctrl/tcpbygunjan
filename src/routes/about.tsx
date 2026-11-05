import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Flower2, Palette } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";
import { site } from "@/config/site";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FadeImage } from "@/components/ui/FadeImage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${site.founder} — ${site.name}` },
      {
        name: "description",
        content: `The story and beauty philosophy behind ${site.name} — a boutique studio for makeup, nails, lashes, hair and beauty services.`,
      },
      { property: "og:title", content: `About ${site.founder} — ${site.name}` },
      {
        property: "og:description",
        content:
          "The story and philosophy behind the studio — beauty treated as personal art.",
      },
    ],
  }),
  component: AboutPage,
});

const philosophy = [
  {
    icon: Palette,
    title: "Beauty is personal art",
    text: "No two faces — or moments — are alike. Every look begins with you: your features, your style, your story.",
  },
  {
    icon: Sparkles,
    title: "Enhance, never mask",
    text: "The goal is always you at your most radiant — refined and elevated, never unrecognisable.",
  },
  {
    icon: Flower2,
    title: "Calm is part of the craft",
    text: "An unhurried studio, honest advice and a peaceful chair. The experience should feel as good as the result.",
  },
];

const bioPlaceholderNote =
  "This introduction is a design placeholder. Gunjan's professional background, experience and qualifications will be added once confirmed.";

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="The artist behind the palette"
        description={`${site.name} began with a simple belief — beauty should feel like art made for you alone.`}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border border-gold/50 sm:block"
              aria-hidden="true"
            />
            <FadeImage
              src={aboutImg}
              alt="Makeup artist at work in a warm ivory studio"
              className="relative aspect-[4/5] w-full rounded-3xl"
              href={site.instagram}
            />
            <FadeImage
              src={heroImg}
              alt="Soft glam beauty portrait"
              className="absolute -bottom-10 -right-4 hidden w-40 rounded-2xl border-4 border-background shadow-xl sm:block lg:w-52"
              href={site.instagram}
            />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Meet Gunjan"
              title="A lifelong love of colour, texture and transformation"
              align="left"
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted-foreground">
                <p>
                  {site.name} was born from Gunjan's obsession with the
                  finishing details — the perfect shade of nude, the symmetry
                  of a lash fan, the way light moves across a cheekbone. What
                  started as a personal passion became a studio built around
                  one idea: every guest deserves to feel like the most
                  beautiful version of themselves.
                </p>
                <p>
                  Today the studio brings together five crafts — makeup, nails,
                  lashes, hair and beauty care — under one calm, elegant roof.
                  Each appointment is designed individually, so whether it's
                  your wedding morning or a quiet afternoon of self-care, the
                  experience fits you perfectly.
                </p>
              </div>
              <p className="mt-8 rounded-xl border border-dashed border-gold/50 bg-gold-soft/30 p-4 font-sans text-xs italic text-muted-foreground">
                {bioPlaceholderNote}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-wash py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Philosophy"
            title="How we believe beauty should feel"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal
                key={p.title}
                delay={0.08 * i}
                className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blush text-blush-deep">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl">{p.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

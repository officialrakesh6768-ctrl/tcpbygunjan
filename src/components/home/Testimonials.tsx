import { testimonials, testimonialsPlaceholderNote } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="bg-blush/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Kind words"
          title="Loved by our clients"
          description="A glimpse of the experience — in our clients' words."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={0.07 * i}
              as="figure"
              className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 pt-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-luxe"
            >
              <span
                className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border border-gold bg-background"
                aria-hidden="true"
              />
              <span
                className="font-display text-5xl leading-[0.6] text-gold"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mt-5 flex-1 font-sans text-sm leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold-soft font-display text-sm text-gold-deep"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-sans text-sm font-medium">
                    {t.name}
                  </span>
                  <span className="block font-sans text-xs text-muted-foreground">
                    {t.service}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-sans text-xs italic text-muted-foreground">
          {testimonialsPlaceholderNote}
        </p>
      </div>
    </section>
  );
}

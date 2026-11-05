import { Gem, HeartHandshake, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: Gem,
    title: "Detail-obsessed artistry",
    text: "Every stroke, shade and set is finished with a perfectionist's eye — nothing leaves the chair until it's flawless.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised to you",
    text: "Looks are designed around your features, outfit, occasion and comfort — never a template.",
  },
  {
    icon: Sparkles,
    title: "Premium products",
    text: "Trusted, skin-kind professional products chosen for finish and longevity.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-wash py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The difference"
          title="Why clients choose us"
          description="Thoughtful artistry, premium care and a beauty experience designed entirely around you."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={0.07 * i}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-luxe"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-blush text-blush-deep transition-colors duration-500 group-hover:bg-gold-soft group-hover:text-gold-deep">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                  className="font-display text-sm italic tracking-[0.35em] text-gold/60 transition-colors duration-500 group-hover:text-gold-deep"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-2xl leading-snug">{p.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

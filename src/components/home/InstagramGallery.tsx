import { Instagram } from "lucide-react";
import { site } from "@/config/site";
import { galleryItems } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FadeImage } from "@/components/ui/FadeImage";

export function InstagramGallery() {
  const preview = galleryItems.slice(0, 6);
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Follow the studio"
          title="Latest from Instagram"
          description="Behind the brush, fresh sets and new looks — follow along for daily inspiration."
        />
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {preview.map((item, i) => (
            <Reveal key={item.id} delay={0.05 * i}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View on Instagram: ${item.title}`}
                className="group relative block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <FadeImage
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full rounded-xl"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute inset-0 grid place-items-center rounded-xl bg-[oklch(0.2_0.02_60_/_0%)] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:bg-[oklch(0.2_0.02_60_/_45%)] group-hover:ring-gold/60"
                  aria-hidden="true"
                >
                  <Instagram className="h-6 w-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center" delay={0.1}>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-foreground"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @thecolourpalettebygunjan
          </a>
        </Reveal>
      </div>
    </section>
  );
}

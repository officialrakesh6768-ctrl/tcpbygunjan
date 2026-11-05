import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — ${site.name}` },
      {
        name: "description",
        content:
          "A curated gallery of makeup, nails, lashes, hair and beauty work from The Colour Palette by Gunjan.",
      },
      { property: "og:title", content: `Gallery — ${site.name}` },
      {
        property: "og:description",
        content:
          "Browse makeup, nails, lashes, hair and beauty looks from the studio.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="The portfolio"
        description="Filter by craft and tap any image to view it up close."
      />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryGrid />
        </div>
      </section>
    </PageShell>
  );
}

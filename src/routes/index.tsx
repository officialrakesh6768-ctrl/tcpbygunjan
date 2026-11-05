import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/home/Hero";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { ContactCTA } from "@/components/home/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${site.name} — Luxury Makeup, Nails, Lashes & Hair Studio`,
      },
      {
        name: "description",
        content:
          "A boutique beauty studio by Gunjan. Bridal and party makeup, nail art, eyelash extensions, hair styling and curated beauty services. Contact us on WhatsApp.",
      },
      { property: "og:title", content: `${site.name} — Luxury Beauty Studio` },
      {
        property: "og:description",
        content:
          "Makeup, nails, lashes, hair and beauty services in one elegant experience. Contact us today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <FeaturedServices />
      <InstagramGallery />
      <WhyChooseUs />
      <ContactCTA />
    </PageShell>
  );
}

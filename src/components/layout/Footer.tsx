import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";
import logo from "@/assets/logof.png";
import { serviceCategories } from "@/data/services";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
        <div>
          <Link
            to="/"
            aria-label={`${site.name} logo — home`}
            className="mb-5 inline-flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <img src={logo} alt="" className="h-36 w-36 object-contain" />
          </Link>
          <p className="font-display text-2xl leading-tight tracking-[0.08em]">
            THE COLOUR PALETTE
          </p>
          <p className="mt-1 font-sans text-sm font-medium uppercase tracking-[0.25em] text-gold sm:text-base">
            by {site.founder}
          </p>
          <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-primary-foreground/60">
            {site.tagline} A boutique studio for makeup, nails, lashes, hair and
            curated beauty care.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on Instagram`}
              className="rounded-full border border-primary-foreground/20 p-2.5 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="rounded-full border border-primary-foreground/20 p-2.5 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-sans text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {serviceCategories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/services"
                  hash={c.id}
                  className="font-sans text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
            Visit
          </h3>
          <ul className="mt-5 space-y-4 font-sans text-base leading-relaxed text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              <span className="font-medium text-primary-foreground">{site.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              <span>
                {site.contact.phoneDisplay}
                <br />
                +91 83687 06833
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              <span>{site.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-primary-foreground/40">
            Imagery shown is placeholder editorial art, not client work.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import {
  galleryFilters,
  galleryItems,
  galleryPlaceholderNote,
  type GalleryCategory,
} from "@/data/gallery";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { FadeImage } from "@/components/ui/FadeImage";

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter],
  );

  const activeIndex = useMemo(
    () => visible.findIndex((g) => g.id === activeId),
    [visible, activeId],
  );
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  const step = useCallback(
    (dir: 1 | -1) => {
      if (activeIndex < 0 || visible.length === 0) return;
      const next = (activeIndex + dir + visible.length) % visible.length;
      const nextItem = visible[next];
      if (nextItem) setActiveId(nextItem.id);
    },
    [activeIndex, visible],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter gallery by service"
      >
        {galleryFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => {
              setFilter(f.value);
              setActiveId(null);
            }}
            className={cn(
              "rounded-full border px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              filter === f.value
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-transparent text-foreground/70 hover:border-gold hover:text-gold-deep",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open image: ${item.title}`}
                className="group relative block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <FadeImage
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/5] w-full rounded-2xl"
                  imgClassName="group-hover:scale-[1.06] transition-transform duration-700"
                />
                <span
                  className="pointer-events-none absolute inset-0 flex flex-col justify-end rounded-2xl bg-gradient-to-t from-[oklch(0.2_0.02_60_/_70%)] via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-2xl text-white">
                      {item.title}
                    </span>
                    <Expand className="h-4 w-4 text-white" />
                  </span>
                  <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.3em] text-white/70">
                    {item.category}
                  </span>
                </span>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 text-center font-sans text-xs italic text-muted-foreground">
        {galleryPlaceholderNote}
      </p>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[oklch(0.15_0.01_60_/_92%)] p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`Image: ${active.title}`}
            onClick={() => setActiveId(null)}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 rounded-full border border-white/25 p-2.5 text-white transition-colors hover:border-gold hover:text-gold sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/25 p-2.5 text-white transition-colors hover:border-gold hover:text-gold sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/25 p-2.5 text-white transition-colors hover:border-gold hover:text-gold sm:right-8"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.figure
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center">
                <span className="font-display text-2xl text-white">
                  {active.title}
                </span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {active.category}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

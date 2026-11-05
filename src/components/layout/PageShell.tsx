import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Wraps each page: soft page-entry transition + consistent vertical rhythm. */
export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex min-h-screen flex-col", className)}
    >
      {children}
    </motion.main>
  );
}

/** Standard page-top band used on inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="bg-wash pb-14 pt-40 text-center sm:pb-20 sm:pt-48">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="gold-rule h-px w-10" aria-hidden="true" />
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.45em] text-gold-deep">
            {eyebrow}
          </p>
          <span className="gold-rule h-px w-10" aria-hidden="true" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl leading-[1.04] sm:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <span className="gold-rule h-px w-14" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="gold-rule h-px w-14" />
        </motion.div>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </header>
  );
}

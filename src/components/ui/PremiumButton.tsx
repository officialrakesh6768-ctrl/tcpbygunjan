import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_16px_36px_-20px_oklch(0.3_0.03_60_/_0.7)] hover:bg-primary/90 hover:shadow-[0_18px_40px_-16px_var(--color-gold)]",
  gold:
    "btn-sheen bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-white shadow-[0_16px_36px_-14px_var(--color-gold)] hover:brightness-105",
  outline:
    "border border-foreground/20 bg-transparent text-foreground hover:border-gold hover:bg-gold-soft/25 hover:text-gold-deep",
  ghost: "text-foreground hover:text-gold-deep",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[11px]",
  md: "px-7 py-3 text-xs",
  lg: "px-9 py-4 text-xs",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkSpecificProps = Omit<
  ComponentProps<typeof Link>,
  "to" | "className" | "children"
>;

export function ButtonLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & { to: string } & LinkSpecificProps) {
  return (
    <Link to={to} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"a">) {
  return (
    <a href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

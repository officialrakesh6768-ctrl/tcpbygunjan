import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Gold hairline — diamond — hairline ornament under a heading. */
export function GoldOrnament({
  centered,
  className,
}: {
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-7 flex items-center gap-3",
        centered && "justify-center",
        className,
      )}
      aria-hidden="true"
    >
      <span className="gold-rule h-px w-14" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="gold-rule h-px w-14" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.45em] text-gold-deep">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-5xl leading-[1.08] text-foreground sm:text-6xl">
        {title}
      </h2>
      <GoldOrnament centered={centered} />
      {description ? (
        <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

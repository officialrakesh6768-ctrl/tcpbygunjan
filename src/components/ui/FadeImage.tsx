import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  eager?: boolean;
  href?: string;
};

/**
 * Image with a soft champagne placeholder and a gentle fade-in on load.
 * Keep `eager` for above-the-fold (hero) images only.
 * Handles images that are already complete on mount (cached/instant loads),
 * where React's onLoad would otherwise never fire.
 */
export function FadeImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  eager = false,
  href,
}: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  const image = (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={cn(
        "h-full w-full object-cover transition-opacity duration-700",
        loaded ? "opacity-100" : "opacity-0",
        imgClassName,
      )}
    />
  );

  const content = (
    <div className={cn("relative overflow-hidden bg-champagne", className)}>
      {image}
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

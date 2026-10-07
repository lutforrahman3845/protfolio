import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

/* A colour plate: the one place the site's ink-on-paper palette gives way to
   a project's own colour. Mockups are shot on white, so `mix-blend-multiply`
   lets the tint show through the white while the device keeps its shading. */
export function Plate({
  tint,
  image,
  alt,
  sizes,
  preload,
  className,
  imageClassName,
  children,
}: {
  tint: string;
  image: StaticImageData;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl bg-(--plate)", className)}
      style={{ "--plate": tint } as React.CSSProperties}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={cn("object-contain mix-blend-multiply", imageClassName)}
      />
      {children}
    </div>
  );
}

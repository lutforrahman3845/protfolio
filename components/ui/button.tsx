import Link from "next/link";
import { cn } from "@/lib/utils";

/* The one solid button on the site: ink fill, paper text. `lg` is for hero
   placements, `md` for in-form actions. */
const SIZES = {
  md: "px-7 py-3.5 text-sm font-semibold",
  lg: "px-7 py-3.5 text-base font-medium",
} as const;

type Size = keyof typeof SIZES;

export function buttonClasses(size: Size = "md", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2.5 rounded-xl bg-foreground font-poppins text-background transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-60",
    SIZES[size],
    className
  );
}

export function Button({
  size,
  className,
  ...props
}: React.ComponentProps<"button"> & { size?: Size }) {
  return <button className={buttonClasses(size, className)} {...props} />;
}

export function ButtonLink({
  size,
  className,
  ...props
}: React.ComponentProps<typeof Link> & { size?: Size }) {
  return <Link className={buttonClasses(size, className)} {...props} />;
}

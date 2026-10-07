import { cn } from "@/lib/utils";

/* "* MY STACK" — the asterisk marker that opens every home-page section. */
export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 mb-10 sm:mb-16 text-foreground/70 uppercase tracking-widest text-xl font-semibold",
        className
      )}
    >
      <span className="text-5xl" aria-hidden="true">*</span>
      <h2 className="pb-2">{children}</h2>
    </div>
  );
}

import { cn } from "@/lib/utils";

/* A lighter sheet of paper on the page: surface fill, hairline border. */
export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-foreground/10 bg-surface p-6 sm:p-9",
        className
      )}
      {...props}
    />
  );
}

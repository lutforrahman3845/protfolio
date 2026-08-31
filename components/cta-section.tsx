"use client";

import { usePathname } from "next/navigation";

export function CtaSection() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <section className="w-full px-5 sm:px-6 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="font-poppins text-sm sm:text-base text-foreground/60">
          Have a project in mind?
        </p>

        <a
          href="/contact"
          className="mt-5 sm:mt-7 inline-block rounded-lg hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-foreground/40"
        >
          <h2 className="font-poppins font-bold uppercase tracking-tighter leading-[0.85] text-[clamp(2.75rem,15vw,11rem)] text-foreground">
            Let&apos;s work
          </h2>
        </a>
      </div>
    </section>
  );
}

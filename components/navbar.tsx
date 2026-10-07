"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/projects", label: "Work", note: `${PROJECTS.length} case studies`, match: "/projects" },
  { href: "/#stack", label: "Stack", note: "Tools I build with", match: null },
  { href: "/contact", label: "Contact", note: "Say hello", match: "/contact" },
];

function isActive(pathname: string, match: string | null) {
  return match !== null && (pathname === match || pathname.startsWith(`${match}/`));
}

function Mark() {
  return (
    <Link
      href="/"
      className="flex h-11 items-center gap-3 rounded-md md:self-end focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <span className="text-3xl font-bold italic leading-none tracking-tighter">lr</span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 px-5 backdrop-blur sm:px-6">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between">
          <Mark />

          <nav aria-label="Main" className="hidden self-end md:block">
            <ul className="-mr-5 flex items-end gap-1">
              {LINKS.map(({ href, label, match }) => {
                const active = isActive(pathname, match);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`relative -mb-px flex h-11 items-center rounded-t-xl border px-5 font-poppins text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-foreground ${
                        active
                          ? "border-foreground/10 border-b-background bg-background text-foreground"
                          : "border-transparent text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls="site-index"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="-mr-3 inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>


      <div
        id="site-index"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background px-5  sm:px-6 md:hidden"
      >
        <nav aria-label="Index" className="motion-safe:animate-[index-in_220ms_ease-out]">
          <p className="font-poppins text-sm text-foreground/60">Contents</p>
          <ul className="mt-4 border-t border-foreground/10">
            {[{ href: "/", label: "Home", note: "Start here", match: "/" }, ...LINKS].map(
              ({ href, label, note, match }) => {
                const active = match === "/" ? pathname === "/" : isActive(pathname, match);
                return (
                  <li key={href} className="border-b border-foreground/10">
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="flex items-baseline gap-3 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground"
                    >
                      <span
                        className={`text-5xl font-medium leading-none tracking-tight ${
                          active ? "italic" : ""
                        }`}
                      >
                        {label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mb-1.5 flex-1 border-b-2 border-dotted border-foreground/25"
                      />
                      <span className="font-poppins text-sm text-foreground/60">{note}</span>
                    </Link>
                  </li>
                );
              },
            )}
          </ul>

          <div className="mt-10 space-y-2 font-poppins text-sm">
            <a
              href={`mailto:${SITE.email}`}
              className="block break-all text-foreground underline decoration-foreground/30 underline-offset-4"
            >
              {SITE.email}
            </a>
            <p className="flex items-center gap-2 text-foreground/60">
              <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
              Available for freelance and full-time work
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

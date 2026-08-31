import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-3xl font-bold italic tracking-tighter">lr</span>
        <span className="hidden md:flex flex-col text-xs text-foreground/70 border-l border-foreground/20 pl-2 ml-2">
          <span>Lutfor Rahman</span>
          <span>Software Engineer + Full-stack Web</span>
        </span>
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/#stack" className="hover:text-foreground/80 transition-colors">
          Stack
        </Link>
        <Link href="/contact" className="hover:text-foreground/80 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}

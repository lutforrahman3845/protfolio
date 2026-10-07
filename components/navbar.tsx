import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full px-5 sm:px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold italic tracking-tighter">lr</span>
          <span className="hidden md:flex flex-col font-poppins text-xs text-foreground/70 border-l border-foreground/20 pl-2 ml-2">
            <span>Lutfor Rahman</span>
            <span>Software Engineer + Full-stack Web</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 font-poppins text-sm font-medium text-foreground/70">
          <Link href="/projects" className="hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="/#stack" className="hover:text-foreground transition-colors">
            Stack
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

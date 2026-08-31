import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold italic tracking-tighter">apk</span>
        <div className="hidden md:flex flex-col text-xs text-foreground/70 border-l border-foreground/20 pl-2 ml-2">
          <span>Ashwin Pradeep Kumar</span>
          <span>Website Designer + No-code Developer</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#projects" className="hover:text-foreground/80 transition-colors">
            Projects
          </Link>
          <Link href="#services" className="hover:text-foreground/80 transition-colors">
            Services
          </Link>
          <Link href="#testimonials" className="hover:text-foreground/80 transition-colors">
            Testimonials
          </Link>
          <Link href="#about" className="hover:text-foreground/80 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

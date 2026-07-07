import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-foreground relative overflow-hidden py-24 px-4 border-t border-foreground/5">
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-foreground/5 pointer-events-none select-none tracking-tighter w-full text-center">
        LUTFOR
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-sm">
            Scaling Start-ups for Growth.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">/Quick links</h3>
            <div className="flex flex-wrap gap-3 max-w-[250px]">
              {["Home", "About Me", "Services", "Works", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:scale-105 transition-transform"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">/Contact</h3>
            <a href="mailto:Mejed@Templyo.io" className="text-lg hover:underline underline-offset-4">
              Mejed@Templyo.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

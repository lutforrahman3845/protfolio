export function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-center bg-grid px-4 py-14 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6 z-10">

        {/* Typography Block */}
        <div className="flex flex-col items-center w-full">
          <h1 className="text-[clamp(2.75rem,6vw,6.5rem)] leading-[0.9] font-medium tracking-tighter uppercase mb-4 w-full">
            <span className="text-foreground block">Software</span>
            <span className="text-foreground/20 block">Engineer</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-normal text-foreground/90 max-w-2xl leading-snug tracking-tight">
            Crafting digital experiences with <br className="hidden md:block" />
            <span className="italic font-light text-foreground/60">purpose and precision.</span>
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-base text-foreground/60 max-w-xl leading-relaxed font-poppins">
          I bridge the gap between design and engineering to build scalable, high-performing web applications — focused on seamless UX, performance, and real business value.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="mailto:hey@ashpdeep.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-background bg-foreground rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl overflow-hidden font-poppins"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative flex items-center gap-2">
              Let's build something extraordinary
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

      </div>

      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[65vh] bg-foreground/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>

      {/* Subtle fade out at the bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-0"></div>
    </section>
  );
}
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-center bg-grid px-5 sm:px-6 py-14 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-start text-left z-10">

        {/* Meta line — framed as a source comment, in the engineer's utility face */}
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/me.png"
            alt="Lutfor Rahman"
            width={36}
            height={36}
            className="size-9 rounded-full object-cover ring-1 ring-foreground/10"
          />
          <p className="font-mono text-xs sm:text-sm text-foreground/45 font-semibold tracking-tight">
            Lutfor Rahman — Software Engineer
            <span
              className="inline-block ml-0.5 w-[0.55em] h-[1.1em] translate-y-[0.18em] bg-foreground/60"
              style={{ animation: "caret-blink 1.1s step-end infinite" }}
              aria-hidden="true"
            />
          </p>
        </div>

        {/* Headline — serif display, used with restraint */}
        <h1 className="text-[clamp(2.25rem,7vw,6rem)] leading-[0.98] sm:leading-[0.95] font-medium tracking-tight text-foreground">
          Your idea deserves
          <br />
          more than <span className="italic font-light text-foreground/80">just a website.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-foreground/60 max-w-xl leading-relaxed font-poppins">
          I help founders and businesses go digital — understanding the idea,
          shaping it into a real product, and building the experience that brings
          in customers and revenue.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full sm:w-auto">
          <a
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-base font-medium text-background bg-foreground rounded-xl hover:opacity-90 active:scale-[0.98] transition-all font-poppins"
          >
            Let&apos;s work together
          </a>

          <a
            href="#projects"
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-base font-medium text-foreground/70 hover:text-foreground transition-colors font-poppins"
          >
            View my work
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Signature — editor-style status line, carrying real scannable facts */}
        <div className="mt-12 sm:mt-16 w-full max-w-2xl font-mono text-[0.7rem] sm:text-[0.8rem] text-foreground/55">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 border-t border-foreground/10 pt-4">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              available for work
            </span>
            <span className="text-foreground/25">·</span>
            <span>remote / worldwide</span>
            <span className="text-foreground/25">·</span>
            <span>full-stack · web apps</span>
          </div>
        </div>

      </div>

      {/* Subtle fade out at the bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-background to-transparent pointer-events-none z-0"></div>
    </section>
  );
}

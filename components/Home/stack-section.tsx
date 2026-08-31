import StackIcon, { type IconName } from "tech-stack-icons";

type StackItem = { name: string; slug: IconName };

const STACK: { category: string; items: StackItem[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", slug: "js" },
      { name: "TypeScript", slug: "typescript" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "Redux", slug: "redux" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "GSAP", slug: "gsap" },
      { name: "Framer Motion", slug: "framer" },
      { name: "Sass", slug: "sass" },
      { name: "Bootstrap", slug: "bootstrap5" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", slug: "nodejs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Express.js", slug: "expressjs" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "aws" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Claude", slug: "claude" },
      { name: "Antigravity", slug: "antigravity" },
      { name: "Cursor", slug: "cursor" },
      { name: "Gemini", slug: "gemini" },
      { name: "ChatGPT", slug: "openai" },
      { name: "GitHub Copilot", slug: "copilotgithub" },
    ],
  },
];

/* Full-color logo, in the variant drawn for light backgrounds — the only
   background this site has. */
function TechIcon({ slug, label }: { slug: IconName; label: string }) {
  return (
    <span
      className="inline-flex w-7 h-7 shrink-0"
      aria-hidden="true"
      title={label}
    >
      <StackIcon name={slug} variant="light" className="w-full h-full" />
    </span>
  );
}

export function StackSection() {
  return (
    <section className="w-full py-10 px-5 sm:px-6 bg-foreground/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-10 sm:mb-16 text-foreground/70 uppercase tracking-widest text-xl font-semibold">
          <p className="text-5xl">*</p>
          <p className="pb-2">MY STACK</p>
        </div>

        <div className="flex flex-col space-y-6">
          {STACK.map((group, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr]   border-b border-foreground/10 last:border-0 last:pb-0 pb-6"
            >
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter text-foreground/80">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2.5 bg-background/90 px-3.5 py-2 sm:px-4 rounded-lg hover:bg-foreground/10 transition-colors"
                  >
                    <TechIcon slug={item.slug} label={item.name} />
                    <span className="text-foreground/80 font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { 
  Code2, 
  Database, 
  Wrench, 
  TerminalSquare
} from "lucide-react";

const STACK = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Tailwind CSS", "GSAP", "Framer Motion", "Sass", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: <TerminalSquare className="w-6 h-6" />,
    items: ["Node.js", "NestJS", "Express.js"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"]
  },
  {
    category: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    items: ["Git", "Docker", "AWS"]
  }
];

export function StackSection() {
  return (
    <section className="w-full py-24 px-4 bg-foreground/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-16 text-foreground/70 uppercase tracking-widest text-sm font-semibold">
          <span className="text-xl">*</span> MY STACK
        </div>

        <div className="flex flex-col gap-16">
          {STACK.map((group, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 border-b border-foreground/10 pb-16 last:border-0 last:pb-0">
              <h3 className="text-4xl font-bold uppercase tracking-tighter text-foreground/80">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-4 gap-y-6">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3 bg-background/50 px-4 py-2 rounded-lg hover:bg-foreground/10 transition-colors">
                    <span className="text-foreground/80 font-medium">{item}</span>
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

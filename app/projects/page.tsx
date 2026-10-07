import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectLinks } from "@/components/projects/project-links";
import { PROJECTS, type Project } from "@/lib/projects";

const description =
  "Products I've designed and built end to end — what each one does, how it's made, and where to see it running.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Projects — Lutfor Rahman, Full-Stack Software Engineer",
    description,
  },
};

function ProjectRow({ project, preload }: { project: Project; preload: boolean }) {
  const facts = [
    { term: "Year", value: project.year },
    { term: "Type", value: project.kind },
    { term: "Built with", value: project.stack.join(", ") },
  ];

  return (
    <li className="grid gap-6 border-t border-foreground/10 py-8 sm:py-10 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)_15rem] lg:gap-10">
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="group relative block aspect-4/3 overflow-hidden rounded-xl bg-(--plate)"
        style={{ "--plate": project.theme.tint } as React.CSSProperties}
      >
        <Image
          src={project.cover.image}
          alt=""
          fill
          preload={preload}
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 100vw"
          className="object-contain p-5 mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
        />
      </Link>

      <div className="min-w-0">
        <p className="mb-2 font-poppins text-sm text-foreground/60 md:hidden">
          {project.kind}, {project.year}
        </p>
        <h2
          className="text-5xl font-medium leading-none tracking-tight text-(--deep) sm:text-6xl"
          style={{ "--deep": project.theme.deep } as React.CSSProperties}
        >
          {project.name}
        </h2>
        <p className="mt-4 max-w-xl font-poppins text-base leading-relaxed text-foreground/70 sm:text-lg">
          {project.summary}
        </p>
        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>

      <dl className="hidden grid-cols-2 gap-x-6 gap-y-4 md:col-span-2 md:grid lg:col-span-1 lg:grid-cols-1 lg:content-start">
        {facts.map(({ term, value }) => (
          <div key={term} className={term === "Built with" ? "col-span-2 lg:col-span-1" : undefined}>
            <dt className="font-poppins text-sm text-foreground/60">{term}</dt>
            <dd className="mt-0.5 font-poppins text-sm leading-snug text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </li>
  );
}

export default function ProjectsPage() {
  return (
    <main className="w-full px-5 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-poppins font-bold uppercase tracking-tighter leading-[0.9] text-[clamp(2.5rem,9vw,5.5rem)]">
          Projects
        </h1>
        <p className="mt-3 max-w-xl font-poppins text-base text-foreground/60 sm:text-lg">
          {description}
        </p>

        <ul className="mt-10 border-b border-foreground/10 sm:mt-14">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.slug} project={project} preload={i === 0} />
          ))}
        </ul>
      </div>
    </main>
  );
}

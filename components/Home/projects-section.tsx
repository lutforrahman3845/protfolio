"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ProjectLinks } from "@/components/projects/project-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS, type Project } from "@/lib/projects";

/* The work as a stack of tabbed sheets, each in its project's own colour.
   Sheets behind the front one peek out by PEEK px; pulling a tab brings
   that sheet forward. Tabs and sheets share one stacking context, so a
   tab sits on its own sheet's top edge at the same depth. */
const PEEK = 16;
const TAB_H = 44;
const TOP = (PROJECTS.length - 1) * PEEK + TAB_H;

function depthOf(index: number, active: number) {
  if (index === active) return 0;
  // Behind the front sheet, keep the list order: earlier projects sit nearer.
  const behind = PROJECTS.map((_, i) => i).filter((i) => i !== active);
  return behind.indexOf(index) + 1;
}

function Sheet({
  project,
  depth,
  preload,
}: {
  project: Project;
  depth: number;
  preload: boolean;
}) {
  const front = depth === 0;

  return (
    <div
      id={front ? "project-sheet" : undefined}
      role={front ? "tabpanel" : undefined}
      aria-labelledby={front ? `project-tab-${project.slug}` : undefined}
      aria-hidden={!front}
      inert={!front}
      className="col-start-1 row-start-1 overflow-hidden rounded-2xl rounded-tl-none border border-foreground/10 bg-(--plate) transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none"
      style={
        {
          "--plate": project.theme.tint,
          zIndex: PROJECTS.length - depth,
          transform: `translateY(${-depth * PEEK}px)`,
        } as React.CSSProperties
      }
    >
      <div
        className={`grid h-full transition-opacity duration-300 motion-reduce:transition-none md:min-h-[30rem] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] ${
          front ? "opacity-100 delay-150" : "opacity-0"
        }`}
      >
        <div className="order-2 flex flex-col p-6 sm:p-9 md:order-none">
          <p className="font-poppins text-sm text-foreground/70">
            {project.kind}, {project.year}
          </p>
          <h3
            className="mt-3 text-[clamp(3rem,7vw,5.75rem)] font-medium leading-[0.9] tracking-tight text-(--deep)"
            style={{ "--deep": project.theme.deep } as React.CSSProperties}
          >
            {project.name}
          </h3>
          <p className="mt-5 max-w-sm font-poppins text-base leading-relaxed text-foreground/75 md:mt-auto md:pt-8">
            {project.summary}
          </p>
          <div className="mt-4">
            <ProjectLinks project={project} />
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="group relative order-1 block aspect-4/3 md:order-none md:aspect-auto"
        >
          <Image
            src={project.cover.image}
            alt=""
            fill
            preload={preload}
            sizes="(min-width: 1152px) 660px, (min-width: 768px) 58vw, 100vw"
            className="object-contain p-6 mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none sm:p-10"
          />
        </Link>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: PROJECTS.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (keys[event.key] + PROJECTS.length) % PROJECTS.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="projects" className="w-full scroll-mt-6 px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 sm:mb-8">
          <SectionHeading className="mb-0 sm:mb-0">Selected work</SectionHeading>
          <Link
            href="/projects"
            className="pb-3 font-poppins text-sm font-medium text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            All projects
          </Link>
        </div>

        <div className="relative" style={{ paddingTop: TOP }}>
          <div className="grid">
            {PROJECTS.map((project, i) => (
              <Sheet
                key={project.slug}
                project={project}
                depth={depthOf(i, active)}
                preload={i === 0}
              />
            ))}
          </div>

          {/* Folder tabs: after the sheets in the DOM so each tab covers its
              sheet's top border and the two read as one piece of paper. */}
          <div role="tablist" aria-label="Projects" className="absolute inset-x-0 top-0">
            {PROJECTS.map((project, i) => {
              const depth = depthOf(i, active);
              const selected = depth === 0;
              return (
                <button
                  key={project.slug}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  id={`project-tab-${project.slug}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="project-sheet"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`absolute flex cursor-pointer items-center rounded-t-xl border border-b-0 border-foreground/10 bg-(--plate) px-5 text-lg font-medium tracking-tight transition-[transform,color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-foreground motion-reduce:transition-none sm:px-6 sm:text-xl ${
                    selected ? "text-(--deep)" : "text-foreground/55 hover:text-foreground"
                  }`}
                  style={
                    {
                      "--plate": project.theme.tint,
                      "--deep": project.theme.deep,
                      zIndex: PROJECTS.length - depth,
                      height: TAB_H + 1,
                      top: TOP - TAB_H,
                      left: `calc(${i} * (min(11rem, 40%) + 0.5rem))`,
                      width: "min(11rem, 40%)",
                      transform: `translateY(${-depth * PEEK}px)`,
                    } as React.CSSProperties
                  }
                >
                  {project.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

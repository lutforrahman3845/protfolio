import Link from "next/link";
import type { Project } from "@/lib/projects";

const linkClasses =
  "font-poppins text-sm font-medium underline decoration-foreground/30 underline-offset-[6px] transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:text-base";

/* The two ways into a project: the write-up, and the thing itself. */
export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      <Link href={`/projects/${project.slug}`} className={linkClasses}>
        Read the case study
      </Link>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          Visit the live site
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plate } from "@/components/projects/plate";
import { PROJECTS, getProject, nextProject, type Figure, type Project } from "@/lib/projects";
import { SITE, absoluteUrl } from "@/lib/site";
import { jsonLdScript } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  const title = `${project.name} case study`;
  const image = {
    url: project.cover.image.src,
    width: project.cover.image.width,
    height: project.cover.image.height,
    alt: project.cover.alt,
  };

  return {
    title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: `${title} — ${SITE.name}`,
      description: project.summary,
      images: [image],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

/* Left: a sticky heading. Right: the content. Stacks below lg. */
function Chapter({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-foreground/10 pt-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12 lg:pt-10">
      <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:sticky lg:top-8 lg:self-start">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-2xl space-y-5 font-poppins text-base leading-relaxed text-foreground/75 sm:text-lg">
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

function ProjectFigure({ figure, tint }: { figure: Figure; tint: string }) {
  const sizes = "(min-width: 1152px) 1152px, 100vw";

  return (
    <figure>
      {figure.kind === "plate" && (
        <Plate
          tint={tint}
          image={figure.image}
          alt={figure.alt}
          sizes={sizes}
          className="aspect-4/3 sm:aspect-16/10"
          imageClassName="p-6 sm:p-12"
        />
      )}

      {figure.kind === "screen" && (
        <Image
          src={figure.image}
          alt={figure.alt}
          sizes={sizes}
          placeholder="blur"
          className="h-auto w-full rounded-2xl border border-foreground/10"
        />
      )}

      {figure.kind === "scroll" && (
        <div
          tabIndex={0}
          role="region"
          aria-label={`${figure.caption} Scrollable.`}
          className="custom-scrollbar mx-auto h-[min(42rem,75vh)] max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-foreground/10 bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <Image
            src={figure.image}
            alt={figure.alt}
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full"
          />
        </div>
      )}

      <figcaption
        className={`mt-3 font-poppins text-sm text-foreground/60 ${figure.kind === "scroll" ? "mx-auto max-w-3xl" : ""}`}
      >
        {figure.caption}
      </figcaption>
    </figure>
  );
}

function Facts({ project }: { project: Project }) {
  const facts = [
    { term: "Role", value: project.role },
    { term: "Timeline", value: project.timeline },
    { term: "Type", value: project.kind },
    { term: "Built with", value: project.stack.join(", ") },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-foreground/10 pt-6 lg:grid-cols-4">
      {facts.map(({ term, value }) => (
        <div key={term} className={term === "Built with" ? "col-span-2 lg:col-span-1" : undefined}>
          <dt className="font-poppins text-sm text-foreground/60">{term}</dt>
          <dd className="mt-1 font-poppins text-base leading-snug text-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const next = nextProject(project.slug);
  const url = absoluteUrl(`/projects/${project.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url,
    image: absoluteUrl(project.cover.image.src),
    dateCreated: project.year,
    creator: { "@id": `${SITE.url}/#person` },
    keywords: project.stack.join(", "),
    ...(project.live ? { sameAs: project.live } : {}),
  };

  return (
    <main className="w-full px-5 py-6 sm:px-6 sm:py-10">
      <article className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="font-poppins text-sm text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          All projects
        </Link>

        <header className="mt-8 sm:mt-12">
          <h1
            className="text-[clamp(4rem,16vw,12rem)] font-medium leading-[0.82] tracking-tight text-(--deep)"
            style={{ "--deep": project.theme.deep } as React.CSSProperties}
          >
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl font-poppins text-lg leading-relaxed text-foreground/75 sm:mt-8 sm:text-xl">
            {project.intro}
          </p>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-poppins text-base font-medium underline decoration-foreground/30 underline-offset-[6px] transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              Visit the live site
            </a>
          )}
          <div className="mt-10">
            <Facts project={project} />
          </div>
        </header>

        <Plate
          tint={project.theme.tint}
          image={project.cover.image}
          alt={project.cover.alt}
          sizes="(min-width: 1152px) 1152px, 100vw"
          preload
          className="mt-10 h-[clamp(20rem,62vw,44rem)] sm:mt-14"
          imageClassName="p-6 sm:p-12"
        />

        <div className="mt-16 flex flex-col gap-16 sm:mt-24 sm:gap-24">
          <Chapter title="The problem">
            <Prose paragraphs={project.problem} />
          </Chapter>

          <Chapter title="What I built">
            <p className="max-w-2xl font-poppins text-base leading-relaxed text-foreground/75 sm:text-lg">
              {project.built.intro}
            </p>
            <ul className="mt-6 max-w-2xl border-t border-foreground/10 font-poppins text-base">
              {project.built.items.map((item) => (
                <li key={item} className="border-b border-foreground/10 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </Chapter>

          <ProjectFigure figure={project.figures[0]} tint={project.theme.tint} />

          <Chapter title="Decisions that mattered">
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {project.decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="text-xl font-medium leading-snug tracking-tight sm:text-2xl">{d.title}</h3>
                  <p className="mt-3 font-poppins text-base leading-relaxed text-foreground/70">{d.body}</p>
                </div>
              ))}
            </div>
          </Chapter>

          {project.figures.slice(1).map((figure) => (
            <ProjectFigure key={figure.image.src} figure={figure} tint={project.theme.tint} />
          ))}

          <Chapter title="Palette">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {project.palette.map((c) => (
                <li key={c.hex}>
                  <div
                    className="h-20 rounded-lg border border-foreground/10 bg-(--swatch)"
                    style={{ "--swatch": c.hex } as React.CSSProperties}
                  />
                  <p className="mt-2 font-poppins text-sm text-foreground">{c.name}</p>
                  <p className="font-poppins text-sm text-foreground/60 uppercase tabular-nums">{c.hex}</p>
                </li>
              ))}
            </ul>
          </Chapter>

          <Chapter title="Where it stands">
            <Prose paragraphs={project.status} />
          </Chapter>
        </div>

        {next.slug !== project.slug && (
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-20 grid overflow-hidden rounded-2xl bg-(--plate) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:mt-28 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
            style={{ "--plate": next.theme.tint } as React.CSSProperties}
          >
            <div className="flex flex-col justify-between gap-6 p-6 sm:p-10">
              <p className="font-poppins text-sm text-foreground/70">Next case study</p>
              <div>
                <p
                  className="text-[clamp(3rem,9vw,6rem)] font-medium leading-[0.85] tracking-tight text-(--deep)"
                  style={{ "--deep": next.theme.deep } as React.CSSProperties}
                >
                  {next.name}
                </p>
                <p className="mt-4 max-w-sm font-poppins text-base text-foreground/70">{next.summary}</p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80">
              <Image
                src={next.cover.image}
                alt=""
                fill
                sizes="(min-width: 768px) 576px, 100vw"
                className="object-contain p-6 mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
              />
            </div>
          </Link>
        )}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
    </main>
  );
}

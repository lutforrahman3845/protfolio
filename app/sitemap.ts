import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/contact"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/projects"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...PROJECTS.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.9,
    })),
  ];
}

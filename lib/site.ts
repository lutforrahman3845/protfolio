/**
 * Every absolute URL on the site is derived from here: canonical tags, the
 * sitemap, robots.txt, structured data and social share images. Moving to a new
 * domain is a one-line change to `url`.
 */
export const SITE = {
  url: "https://www.lutforrahman.dev",
  name: "Lutfor Rahman",
  jobTitle: "Software Engineer",
  email: "lutforrahman.dev.bd@gmail.com",
  locale: "en_US",
  location: {
    city: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
  },
  /* Profiles Google can use to reconcile this site with the same person
     elsewhere — the `sameAs` edges of the Person graph. */
  profiles: [
    "https://github.com/lutforrahman3845",
    "https://www.linkedin.com/in/lutfor-rahman-dev/",
    "https://x.com/lutf0rRahman",
    "https://www.facebook.com/mohammed.lutfor.315/",
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Full-stack web development",
  ],
} as const;

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}

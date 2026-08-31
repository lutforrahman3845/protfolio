import { SITE, absoluteUrl } from "@/lib/site";

/**
 * One Person node and one WebSite node, linked by @id so search engines read
 * them as the same entity rather than two unrelated things.
 *
 * Everything here must also be visible on the page — Google treats structured
 * data that describes content a visitor cannot see as spam.
 */
export function siteJsonLd() {
  const personId = `${SITE.url}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: SITE.name,
        url: SITE.url,
        image: absoluteUrl("/icon.png"),
        jobTitle: SITE.jobTitle,
        email: `mailto:${SITE.email}`,
        description:
          "Full-stack software engineer building scalable web applications with Next.js, React, Node.js and PostgreSQL.",
        knowsAbout: [...SITE.skills],
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressCountry: SITE.location.countryCode,
        },
        sameAs: [...SITE.profiles],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: `${SITE.name} — ${SITE.jobTitle}`,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
    ],
  };
}

/** Serialize for a <script type="application/ld+json"> tag, escaping `<`
    so a stray HTML tag in the data can never break out of the script. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\u003c");
}

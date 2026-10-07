import type { StaticImageData } from "next/image";

import balkoCover from "@/assets/projects/balko/cover.webp";
import balkoDashboard from "@/assets/projects/balko/dashboard.webp";
import balkoScreens from "@/assets/projects/balko/screens.webp";
import sailorCover from "@/assets/projects/sailor/cover.webp";
import sailorDestinations from "@/assets/projects/sailor/destinations.webp";
import sailorHomeFull from "@/assets/projects/sailor/home-full.webp";
import sailorMobile from "@/assets/projects/sailor/mobile.webp";
import sailorScene from "@/assets/projects/sailor/scene.webp";
import sailorTablet from "@/assets/projects/sailor/tablet.webp";

/**
 * A figure in a case study.
 * - `plate`  — a device mockup on a white ground, multiplied onto the
 *              project's tint so the white disappears.
 * - `screen` — a flat image (screenshot or composite) with a hairline frame.
 * - `scroll` — a full-page screenshot in a frame you scroll inside.
 */
export type Figure = {
  kind: "plate" | "screen" | "scroll";
  image: StaticImageData;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  /** One sentence for the home page and meta description. */
  summary: string;
  /** What kind of thing it is, in a few words. */
  kind: string;
  year: string;
  timeline: string;
  role: string;
  stack: string[];
  live?: string;
  /** The project's own brand colours: `tint` grounds its plates, `deep` sets its name. */
  theme: { tint: string; deep: string };
  palette: { name: string; hex: string }[];
  cover: { image: StaticImageData; alt: string };
  intro: string;
  problem: string[];
  built: { intro: string; items: string[] };
  decisions: { title: string; body: string }[];
  figures: Figure[];
  status: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "balko",
    name: "Balko",
    summary:
      "A CRM and project-management dashboard: 35 screens wired to a mock API that behaves like a real backend.",
    kind: "CRM and project dashboard",
    year: "2026",
    timeline: "January – August 2026",
    role: "Solo build: interface, front end and mock API",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Redux Toolkit & RTK Query",
      "TanStack Table",
      "React Hook Form & Zod",
      "Recharts",
    ],
    live: "https://balko-xi.vercel.app",
    theme: { tint: "#efd9c9", deep: "#231f20" },
    palette: [
      { name: "Balko orange", hex: "#f36e26" },
      { name: "Ink", hex: "#231f20" },
      { name: "Cream", hex: "#f9f3e2" },
    ],
    cover: {
      image: balkoCover,
      alt: "Balko's overview dashboard on an iPad with a keyboard: contact, deal and pipeline stats above a deals chart.",
    },
    intro:
      "Balko is the admin layer every SaaS team ends up building before they get to their actual product — finished, so a team only has to bring the backend and the idea.",
    problem: [
      "Tables, filters, forms, related records, a sidebar, a dashboard: every team rebuilds this layer, and none of it is what sets their product apart. It quietly eats the first weeks of a project.",
      "Plenty of dashboards solve the look and stop there. The screens are pictures — data hard-coded into components, nothing a developer can connect to a real API without rewriting half of it.",
      "I wanted a dashboard where the hard part was already done: screens that talk to an API the way a real app does, so swapping in a backend is mechanical work rather than a rebuild.",
    ],
    built: {
      intro:
        "Nine business areas with full create, read, update and delete, around a shell with light and dark themes and a ⌘K command palette.",
      items: [
        "Overview, executive and operations dashboards",
        "Tasks as a drag-and-drop Kanban board and as a table",
        "Contacts, companies and projects with their own create and edit pages",
        "Employees, teams, and document folders",
        "Calendar, chat and analytics",
        "Configuration for departments, roles, company types and document types",
        "Six sign-in and account screens, a landing page and pricing",
        "Excel export from list views",
      ],
    },
    decisions: [
      {
        title: "Mock data that behaves like a database",
        body: "The 16 entities link to each other by ID, the way foreign keys and join tables do. A project points at its manager, teams, department, company and contact — so the data maps straight onto SQL tables when a real database arrives.",
      },
      {
        title: "A real HTTP boundary from day one",
        body: "Components never import mock data. They call 27 Next.js route handlers through RTK Query, and every list comes back paginated with the same shape. Pointing one environment variable at a real API moves the app over — one area at a time, if you like.",
      },
      {
        title: "Lists that refresh themselves",
        body: "Creating, editing or deleting a record marks the cached lists as stale, so they refetch on their own. There is no hand-written refresh code anywhere, and the Redux store holds nothing but the API cache.",
      },
      {
        title: "One path for every feature",
        body: "Each area follows the same five steps — type, mock data, route, query, screen — and draws on 16 shared building blocks: a data table with loading and empty states, filters, search, sorting, pagination, confirm dialogs and file upload. A developer who learns one area has learned them all.",
      },
    ],
    figures: [
      {
        kind: "screen",
        image: balkoDashboard,
        alt: "Balko's overview dashboard: five stat tiles, a project progress chart, a task status ring, an activity feed, upcoming tasks, recent projects, a calendar and documents.",
        caption:
          "The overview dashboard puts projects, tasks, workload and activity on one screen.",
      },
      {
        kind: "screen",
        image: balkoScreens,
        alt: "A collage of Balko screens in light and dark themes: dashboards, project and task tables, a week calendar, analytics, notifications, companies and a task detail panel.",
        caption:
          "Every screen ships in light and dark — tables, calendar, analytics, notifications and task details.",
      },
    ],
    status: [
      "Version 1.0 is complete: 35 screens, 27 API routes and 16 linked entities, built over 123 commits.",
      "Its README shows a developer how the mock entities map onto database tables, ready for a real backend.",
    ],
  },
  {
    slug: "sailor",
    name: "Sailor",
    summary:
      "A luxury yacht charter website: nine pages, sample data shaped like a database, and bookings checked on the server.",
    kind: "Yacht charter website",
    year: "2026",
    timeline: "August 2026",
    role: "Solo build: rebuild, design refinement and front end",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Server Actions",
      "Embla Carousel",
    ],
    live: "https://sailor-drab.vercel.app",
    theme: { tint: "#c5dfdd", deep: "#254769" },
    palette: [
      { name: "Sea teal", hex: "#22a5b3" },
      { name: "Harbour navy", hex: "#254769" },
      { name: "Mist", hex: "#5b758e" },
      { name: "Night water", hex: "#10283e" },
    ],
    cover: {
      image: sailorCover,
      alt: "Sailor's home page on a desktop display: a yacht at sunset under the headline “Your private all-inclusive yacht vacation begins here”.",
    },
    intro:
      "Sailor turns a single static landing page into a complete charter website that a yacht company — or the agency building for one — can connect to real boats and real bookings.",
    problem: [
      "Sailor began as one landing page: HTML, with Tailwind, DaisyUI and a slider loaded from a CDN. It looked the part, but there was nothing behind it — no yacht pages, no booking, nowhere for a charter business to grow.",
      "Luxury travel sells on calm and confidence. The site had to feel unhurried and expensive while still answering the practical questions fast: which boat, how many guests, how much per day.",
    ],
    built: {
      intro:
        "Nine pages, filled with sample content: five yachts, seven destinations, four journal posts and five guest reviews.",
      items: [
        "A home page with a booking search bar, featured yachts, a destinations slider and guest reviews",
        "A fleet page and a page for each yacht, with specs, gallery, price and a booking form",
        "Destinations, services and an about page",
        "A journal with full articles",
        "A contact page whose form, like booking, is handled on the server",
      ],
    },
    decisions: [
      {
        title: "Data first, then pages",
        body: "Before any page, I defined eight tables — yachts, images, destinations, services, reviews, posts, bookings and messages — with IDs and foreign keys like a SQL schema. Pages read only through a set of async query functions, so a real database replaces the sample data without touching the interface.",
      },
      {
        title: "Bookings checked on the server",
        body: "Booking and contact forms submit through Server Actions that check the email, make sure check-out comes after check-in, and refuse more guests than the chosen yacht takes.",
      },
      {
        title: "Server by default",
        body: "Only eight components run in the browser: the carousels, forms, video modal, header and scroll reveal. Every yacht and journal page is generated ahead of time, and unknown addresses fall through to a proper 404.",
      },
      {
        title: "Motion without a motion library",
        body: "Sections ease in as they scroll into view using the browser's own IntersectionObserver, and hero photos drift with a slow zoom. No animation dependency, and all of it stops for visitors who ask for reduced motion.",
      },
    ],
    figures: [
      {
        kind: "scroll",
        image: sailorHomeFull,
        alt: "The full Sailor home page from hero to footer: about, yacht series, destinations, services, seasonal offer, journal, reviews and newsletter.",
        caption: "The whole home page, top to bottom. Scroll inside the frame.",
      },
      {
        kind: "plate",
        image: sailorMobile,
        alt: "Two phones showing Sailor: the hero with stacked buttons, and a yacht card for Serenity Seeker at $499 per day.",
        caption:
          "On phones the hero stacks and each yacht gets the full width — price, guests and beds stay visible.",
      },
      {
        kind: "screen",
        image: sailorDestinations,
        alt: "Sailor's destinations page: a grid of photographs of the Caribbean, the Amalfi Coast, the French Riviera and more.",
        caption: "Destinations sell the trip before the boat.",
      },
      {
        kind: "plate",
        image: sailorTablet,
        alt: "Sailor's home page on an iPad with keyboard: hero, about section and photographs of yachts.",
        caption: "The same layout holds on a tablet, with the about section's photos side by side.",
      },
      {
        kind: "screen",
        image: sailorScene,
        alt: "Sailor across a laptop, phone, tablet and printed pages: the hero, yacht series, destinations, a journal article, reviews and footer.",
        caption: "The full set of pages, from fleet to journal.",
      },
    ],
    status: [
      "Sailor is live on Vercel with sample yachts, destinations and journal posts.",
      "The query layer is ready for a real database and booking backend — connecting one is the next step.",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** The project after this one, wrapping round — for the "next case study" link. */
export function nextProject(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}

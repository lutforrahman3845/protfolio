# lutforrahman.dev

Personal portfolio of Lutfor Rahman — full-stack software engineer. Built with
Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in GMAIL_APP_PASSWORD
npm run dev
```

Open http://localhost:3000.

| Script          | What it does              |
| --------------- | ------------------------- |
| `npm run dev`   | Development server        |
| `npm run build` | Production build          |
| `npm run start` | Serve the production build |
| `npm run lint`  | ESLint                    |

## Environment

The contact form sends mail through Gmail SMTP (Nodemailer) from a Server
Action in `app/contact/actions.ts`.

| Variable             | Value                                                                 |
| -------------------- | --------------------------------------------------------------------- |
| `GMAIL_USER`         | The Gmail address that sends the message                              |
| `GMAIL_APP_PASSWORD` | A 16-character [App Password](https://myaccount.google.com/apppasswords) (needs 2-Step Verification) |

Set the same variables in your host's dashboard when deploying.

## Project layout

```
app/                 routes, metadata, robots.ts, sitemap.ts, globals.css (design tokens)
  contact/           contact page + Server Action that sends the email
components/
  Home/              home-page sections (hero, stack)
  contact/           contact form
  ui/                shared primitives: Button, Card, SectionHeading
lib/
  site.ts            single source of truth: domain, name, email, profiles, skills
  structured-data.ts JSON-LD (Person + WebSite)
```

## Design system

Ink on paper: two colors (`background` #EEEDE8, `foreground` #171717) plus a
`surface` for cards, with every grey expressed as `foreground` at an opacity.
Fraunces for display, Poppins for UI and reading text, JetBrains Mono for
metadata. Tokens live in `app/globals.css`; reuse the primitives in
`components/ui/` instead of copying class strings.

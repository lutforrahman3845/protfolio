import type { Metadata } from "next";
import { Globe, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/brand-icons";

export const metadata: Metadata = {
  title: "Contact — Lutfor Rahman",
  description:
    "Tell me about your project — timeline, scope, and what success looks like. Available for freelance and full-time work, remote worldwide.",
};

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/lutforrahman3845", Icon: GithubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/lutfor-rahman-dev/", Icon: LinkedinIcon },
  { name: "X", href: "https://x.com/lutf0rRahman", Icon: XIcon },
  { name: "Facebook", href: "https://www.facebook.com/mohammed.lutfor.315/", Icon: FacebookIcon },
];

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="text-foreground/70">{icon}</span>
      <h2 className="mt-4 font-poppins text-sm font-bold uppercase tracking-wide">
        {label}
      </h2>
      <div className="mt-1.5 font-poppins text-sm text-foreground/55">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="w-full px-5 sm:px-6 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-poppins font-bold uppercase tracking-tighter leading-[0.9] text-[clamp(2.5rem,9vw,5.5rem)]">
          Contact me
        </h1>
        <p className="mt-3 font-poppins text-base sm:text-lg text-foreground/60 max-w-xl">
          Tell me what you&apos;re building and where it&apos;s stuck. I read
          every message and reply within a day.
        </p>

        <div className="mt-3 sm:mt-5 grid gap-5 lg:grid-cols-[minmax(0,20rem)_1fr] items-start">
          <aside className="rounded-2xl border border-foreground/10 bg-surface p-7 sm:p-8 flex flex-col gap-8">
            <Detail icon={<MapPin className="h-6 w-6" />} label="Based in">
              Dhaka, Bangladesh — working remote, worldwide.
            </Detail>

            <Detail icon={<Mail className="h-6 w-6" />} label="Email me">
              <a
                href="mailto:lutforrahman.dev.bd@gmail.com"
                className="hover:text-foreground transition-colors break-all"
              >
                lutforrahman.dev.bd@gmail.com
              </a>
            </Detail>

            <Detail icon={<Globe className="h-6 w-6" />} label="Availability">
              Open to freelance projects and full-time roles.
            </Detail>

            <div>
              <h2 className="font-poppins text-sm font-bold uppercase tracking-wide">
                Socials
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {SOCIALS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-foreground/15 text-foreground/70 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}

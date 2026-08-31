"use client";

import { Mail, User } from "lucide-react";

const INBOX = "lutforrahman.dev.bd@gmail.com";

const fieldClasses =
  "w-full rounded-lg border border-foreground/20 bg-white px-4 py-3.5 pr-11 text-foreground placeholder:text-foreground/35 outline-none transition-colors focus:border-foreground/60 focus-visible:ring-2 focus-visible:ring-foreground/15";

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 font-poppins text-xs uppercase tracking-wider text-foreground/60"
    >
      {children}
    </label>
  );
}

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const subject = String(data.get("subject"));
    const message = String(data.get("message"));

    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="rounded-2xl border border-foreground/10 bg-surface p-6 sm:p-9">
      <form onSubmit={handleSubmit} className="font-poppins">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={fieldClasses}
              />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={fieldClasses}
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Label htmlFor="subject">Subject</Label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            className={fieldClasses}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="message">Your message</Label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about the project, the timeline, and what success looks like."
            className={`${fieldClasses} resize-y pr-4`}
          />
        </div>

        <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Send message
            <Mail className="h-4 w-4" />
          </button>

          <p className="text-xs text-foreground/50">
            Opens your email app with the message ready to send.
          </p>
        </div>
      </form>
    </div>
  );
}

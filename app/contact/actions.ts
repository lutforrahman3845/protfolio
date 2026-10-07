"use server";

import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fields?: Record<"name" | "email" | "subject" | "message", string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Gmail SMTP with an App Password — the message is sent from and to the site
   owner's inbox, with the visitor set as Reply-To so "Reply" goes to them. */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function field(data: FormData, key: string, max: number) {
  return String(data.get(key) ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactMessage(
  _prev: ContactState,
  data: FormData
): Promise<ContactState> {
  /* Honeypot: hidden from people, filled in by bots. Pretend it worked. */
  if (field(data, "company", 200)) {
    return { status: "success", message: "Thanks — your message is on its way." };
  }

  const name = field(data, "name", 100);
  const email = field(data, "email", 200);
  const subject = field(data, "subject", 200);
  const message = field(data, "message", 5000);
  const fields = { name, email, subject, message };

  if (!name || !subject || !message || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please fill in every field with a valid email.", fields };
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not set.");
    return {
      status: "error",
      message: `Sending is unavailable right now — please email ${SITE.email} directly.`,
      fields,
    };
  }

  try {
    await transporter.sendMail({
      from: `"${SITE.name} — Portfolio" <${process.env.GMAIL_USER}>`,
      to: SITE.email,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `${message}\n\n—\n${name}\n${email}`,
      html: `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>
<hr />
<p>${escapeHtml(name)}<br /><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
    });
  } catch (error) {
    console.error("Contact form: failed to send", error);
    return {
      status: "error",
      message: `Something went wrong — please try again or email ${SITE.email}.`,
      fields,
    };
  }

  return { status: "success", message: "Thanks — I'll get back to you within a day." };
}

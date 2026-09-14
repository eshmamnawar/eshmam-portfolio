"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Copy, Check } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const EMAIL = "eshmam2016@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/eshmamnawar",
    icon: Github,
    description: "View my projects and contributions",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eshmam-nawar-447016217/",
    icon: Linkedin,
    description: "Connect with me professionally",
  },
  {
    name: "Email",
    url: `mailto:${EMAIL}`,
    icon: Mail,
    description: EMAIL,
  },
];

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [copied, setCopied] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That doesn't look like a valid email";
    if (form.message.trim().length < 10)
      next.message = "Please write at least 10 characters";
    return next;
  };

  // No backend here — this hands a pre-filled draft to the visitor's own
  // mail client, which keeps the site fully static.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n--\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const field =
    "w-full min-w-0 block neu-input rounded-2xl px-5 py-3.5 text-sm placeholder:text-ink-faint";

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-page">
        <SectionHeading
          eyebrow="Say hello"
          title="Get In Touch"
          subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
        />

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-7 lg:gap-9 items-start min-w-0">
          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 min-w-0"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const external = !link.url.startsWith("mailto:");
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="neu-card p-5 sm:p-6 flex items-center gap-4 sm:gap-5 group min-w-0"
                >
                  <div className="w-[52px] h-[52px] shrink-0 rounded-2xl neu-inset grid place-items-center text-accent">
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-ink font-semibold text-sm mb-0.5">
                      {link.name}
                    </h3>
                    <p className="text-ink-muted text-xs truncate">
                      {link.description}
                    </p>
                  </div>
                </a>
              );
            })}

            <button
              onClick={copyEmail}
              className="w-full neu-btn rounded-2xl flex items-center justify-center gap-2.5 px-6 py-4 text-[13px] font-medium"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? "Email copied!" : "Copy email address"}</span>
            </button>
          </motion.div>

          {/* Message composer */}
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6 }}
            className="neu-card p-7 sm:p-9 min-w-0"
          >
            <h3 className="text-lg font-semibold text-ink mb-1.5">
              Send me a message
            </h3>
            <p className="text-xs text-ink-faint mb-7">
              This opens a pre-filled draft in your own mail app.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-ink-muted mb-2.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
                {errors.name && (
                  <p className="text-xs mt-2" style={{ color: "var(--error)" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-ink-muted mb-2.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={field}
                />
                {errors.email && (
                  <p className="text-xs mt-2" style={{ color: "var(--error)" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-ink-muted mb-2.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${field} resize-none`}
                />
                {errors.message && (
                  <p className="text-xs mt-2" style={{ color: "var(--error)" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full neu-primary rounded-2xl flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold"
              >
                <Send size={16} />
                <span>Compose message</span>
              </button>
            </form>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 text-center"
        >
          <div className="neu-inset-sm h-[6px] w-36 rounded-full mx-auto mb-8" />
          <p className="text-ink-muted text-sm">
            © {new Date().getFullYear()} Eshmam Nawar. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-ink-faint">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import DeliveryLoop from "./DeliveryLoop";

const roles = [
  "Project Manager",
  "Technical Lead",
  "Software Developer",
  "AI Enthusiast",
];
const EMAIL = "eshmam2016@gmail.com";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const current = roles[currentRole];

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20"
    >
      <div className="container-page w-full">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full neu-inset-sm text-xs text-ink-muted mb-7"
            >
              <span className="w-2 h-2 rounded-full gradient-ramp animate-pulse" />
              Project Manager &amp; Technical Lead @ Limitless Technologies
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight leading-[1.05] mb-5 text-ink"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Eshmam <span className="text-gradient">Nawar</span>
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl md:text-2xl mb-6 h-9 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <span className="text-ink-muted">I&apos;m a </span>
              <span className="text-accent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-[1.05rem] text-ink-muted max-w-xl mx-auto lg:mx-0 mb-5 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              I turn ideas into{" "}
              <span className="text-ink font-semibold">
                well-defined, scalable products
              </span>
              , working where product strategy, business goals, and technical
              architecture meet.
            </motion.p>

            <motion.p
              className="text-xs sm:text-sm text-ink-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              Software Development graduate of Swinburne University of
              Technology · Former Software Engineering Resident at Headstarter
              AI
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start gap-3 mt-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              {[
                { icon: Github, url: "https://github.com/eshmamnawar", label: "GitHub" },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/in/eshmam-nawar-447016217/",
                  label: "LinkedIn",
                },
                { icon: Mail, url: `mailto:${EMAIL}`, label: "Email" },
              ].map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target={url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-12 h-12 rounded-full neu-btn grid place-items-center"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — layered neumorphic medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <DeliveryLoop />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="w-12 h-12 rounded-full neu-btn grid place-items-center animate-bounce"
          >
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

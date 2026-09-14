"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="text-center mb-14 sm:mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full neu-inset-sm text-[12px] tracking-[0.2em] uppercase text-ink-muted mb-5">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight px-4 leading-[1.15] pb-1 text-gradient">
        {title}
      </h2>
      <div className="gradient-rule w-28 sm:w-36 mx-auto mt-5" />
      {subtitle && (
        <p className="text-ink-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

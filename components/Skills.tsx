"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Server,
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Cluster = {
  group: string;
  icon: LucideIcon;
  /** Position along the accent ramp, so each card takes a different hue */
  hue: string;
  items: string[];
};

const toolbox: Cluster[] = [
  {
    group: "Frontend",
    icon: MonitorSmartphone,
    hue: "var(--accent)",
    items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    group: "Backend",
    icon: Server,
    hue: "var(--accent-3)",
    items: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    group: "Languages",
    icon: Code2,
    hue: "var(--accent)",
    items: ["Python", "JavaScript", "TypeScript", "C#"],
  },
  {
    group: "Database",
    icon: Database,
    hue: "var(--accent-3)",
    items: ["SQL", "PostgreSQL"],
  },
  {
    group: "AI / ML",
    icon: BrainCircuit,
    hue: "var(--accent-2)",
    items: ["Machine Learning"],
  },
  {
    group: "Tools",
    icon: Wrench,
    hue: "var(--accent-2)",
    items: ["Git", "GitHub"],
  },
];

const totalCount = toolbox.reduce((n, c) => n + c.items.length, 0);

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {toolbox.map((cluster, ci) => {
            const Icon = cluster.icon;
            return (
              <motion.article
                key={cluster.group}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className="group neu-card p-6 sm:p-7 flex flex-col"
              >
                {/* Header: icon well, title, count */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl neu-inset grid place-items-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ color: cluster.hue }}
                  >
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-ink leading-tight">
                      {cluster.group}
                    </h3>
                    <span className="text-[12px] text-ink-faint tabular-nums">
                      {cluster.items.length}{" "}
                      {cluster.items.length === 1 ? "tool" : "tools"}
                    </span>
                  </div>
                </div>

                {/* Accent rule picks up that card's hue */}
                <div
                  className="h-[3px] w-full rounded-full mb-6 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, ${cluster.hue}, transparent)`,
                  }}
                />

                <div className="flex flex-wrap gap-2.5">
                  {cluster.items.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="px-3.5 py-2 rounded-xl neu-raised-sm text-ink-muted text-[12.5px] font-medium cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[12px] text-ink-faint mt-8 tabular-nums"
        >
          {totalCount} technologies across {toolbox.length} disciplines
        </motion.p>
      </div>
    </section>
  );
}

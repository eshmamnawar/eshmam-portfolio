"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink, Star, FolderGit2 } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "AI Customer Support",
    description:
      "An intelligent customer support system powered by AI, providing automated responses and solutions.",
    tech: ["JavaScript", "AI/ML", "React"],
    github: "https://github.com/eshmamnawar/ai_customer_support",
    demo: null,
    featured: true,
  },
  {
    title: "AI Answer Engine",
    description:
      "A sophisticated answer engine leveraging AI to provide accurate and contextual responses.",
    tech: ["Python", "Jupyter Notebook", "AI/ML"],
    github: "https://github.com/eshmamnawar/ai-answer-engine",
    demo: null,
    featured: true,
  },
  {
    title: "Flashcard SaaS",
    description:
      "A Software-as-a-Service platform for creating and managing digital flashcards for learning.",
    tech: ["JavaScript", "React", "SaaS"],
    github: "https://github.com/eshmamnawar/flashcard_saas",
    demo: null,
    featured: false,
  },
  {
    title: "AWE-Electronics",
    description:
      "An e-commerce platform for electronics products built as part of SWE30003-A3 assignment.",
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/eshmamnawar/AWE-Electronics-SWE30003-A3",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // Build the filter list from the project data so it can never drift.
  const tags = useMemo(() => {
    const all = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all).sort()];
  }, []);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I've built"
          title="Featured Projects"
          subtitle="A collection of projects showcasing my skills in software development, AI, and web technologies."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-5 min-h-[44px] rounded-xl text-[13px] font-medium inline-flex items-center justify-center ${
                filter === tag ? "neu-btn neu-btn-active" : "neu-btn"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45 }}
                className="neu-card p-7 sm:p-8 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl neu-inset grid place-items-center text-accent shrink-0">
                    <FolderGit2 size={19} />
                  </div>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full neu-inset-sm text-[12px] text-accent font-medium">
                      <Star size={11} />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3">
                  {project.title}
                </h3>
                <p className="text-ink-muted mb-6 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full neu-inset-sm text-ink-muted text-[12px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-btn rounded-xl flex items-center justify-center gap-2 px-5 min-h-[44px] text-[13px] font-medium"
                  >
                    <Github size={15} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-primary rounded-xl flex items-center justify-center gap-2 px-5 min-h-[44px] text-[13px] font-medium"
                    >
                      <ExternalLink size={15} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="text-center text-ink-muted text-sm py-12">
            No projects tagged &ldquo;{filter}&rdquo; yet.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/eshmamnawar"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn rounded-2xl inline-flex items-center gap-2.5 px-8 py-4 text-sm font-medium"
          >
            <Github size={17} />
            <span>View all projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

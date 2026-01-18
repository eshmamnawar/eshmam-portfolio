"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4 tracking-tight px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-xs sm:text-sm font-light px-4">
            A collection of projects showcasing my skills in software development,
            AI, and web technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass p-5 sm:p-6 rounded-lg hover:border-cyan-500/20 transition-all duration-300 ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              {project.featured && (
                <span className="inline-block px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-xs mb-3 sm:mb-4 border border-cyan-500/20 font-light">
                  Featured
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3 tracking-wide">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 text-gray-400 rounded-md text-xs border border-white/10 font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-minimal rounded-md flex items-center justify-center gap-2 text-xs w-full sm:w-auto"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary rounded-md flex items-center justify-center gap-2 text-xs w-full sm:w-auto"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/eshmamnawar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-md inline-flex items-center gap-2"
          >
            <Github size={18} />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


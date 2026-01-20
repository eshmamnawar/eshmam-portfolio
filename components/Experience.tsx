"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "SWE Resident",
    company: "Headstarter AI",
    location: "Remote",
    period: "Former",
    description: [
      "Worked on AI-driven innovations and software engineering projects",
      "Collaborated with a team of developers on cutting-edge AI solutions",
      "Contributed to open-source projects and best practices",
    ],
    type: "Fellow & Resident",
  },
  {
    title: "Software Development Graduate",
    company: "Swinburne University of Technology",
    location: "Melbourne, Australia",
    period: "December 2025",
    description: [
      "Completed Bachelor's degree in Software Development",
      "Specialized in modern web technologies, AI, and software architecture",
      "Built multiple projects and contributed to the developer community",
    ],
    type: "Education",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
              Experience
            </span>
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-6 sm:p-8 rounded-lg hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <Briefcase className="text-cyan-400 flex-shrink-0" size={16} />
                    <h3 className="text-lg sm:text-xl font-light text-white tracking-wide">
                      {exp.title}
                    </h3>
                  </div>
                  <h4 className="text-base sm:text-lg text-cyan-400 mb-2 font-light">{exp.company}</h4>
                </div>
                <div className="flex flex-row md:flex-col gap-3 md:gap-2 text-xs text-gray-500 font-light">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} />
                    <span className="break-words">{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <span className="px-2.5 sm:px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-xs border border-purple-500/20 font-light">
                  {exp.type}
                </span>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm font-light">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


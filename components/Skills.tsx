"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 72, color: "from-purple-400 to-purple-600" },
  { name: "JavaScript", level: 68, color: "from-cyan-400 to-cyan-600" },
  { name: "Python", level: 65, color: "from-cyan-400 to-purple-500" },
  { name: "Tailwind CSS", level: 70, color: "from-cyan-400 to-cyan-600" },
  { name: "React", level: 60, color: "from-cyan-400 to-purple-500" },
  { name: "Node.js", level: 58, color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", level: 55, color: "from-purple-400 to-purple-600" },
  { name: "TypeScript", level: 52, color: "from-cyan-400 to-cyan-600" },
];

const technologies = [
  "React", "Next.js", "Node.js", "Python", "JavaScript", "TypeScript",
  "HTML/CSS", "Tailwind CSS", "Git", "GitHub", "REST APIs", "AI/ML"
];

export default function Skills() {
  return (
    <section
      id="skills"
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -4,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group glass p-5 sm:p-6 rounded-lg border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default"
            >
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <motion.span 
                  className="text-white font-light text-xs sm:text-sm tracking-wide group-hover:text-cyan-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {skill.name}
                </motion.span>
                <motion.span 
                  className="text-gray-500 text-xs font-light group-hover:text-gray-400 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1 sm:h-1.5 overflow-hidden">
                <motion.div
                  className={`h-1 sm:h-1.5 rounded-full bg-gradient-to-r ${skill.color} relative`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-6 sm:p-8 rounded-lg"
        >
          <h3 className="text-lg sm:text-xl font-light mb-4 sm:mb-6 text-center text-cyan-400 tracking-wide px-4">
            Tech Toolbox
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center px-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 2,
                  transition: { duration: 0.2 }
                }}
                className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-cyan-500/30 rounded-md text-gray-400 hover:text-cyan-400 text-xs font-light transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


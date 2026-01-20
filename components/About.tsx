"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
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
              About Me
            </span>
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              Hi, I'm <span className="text-cyan-400 font-normal">Eshmam Nawar</span>, a
              Software Development graduate from{" "}
              <span className="text-purple-400 font-normal">
                Swinburne University of Technology
              </span>{" "}
              with a passion for crafting efficient, elegant digital solutions and
              exploring the frontiers of <span className="text-cyan-400">artificial intelligence</span>.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              As an aspiring <span className="text-cyan-400 font-normal">AI engineer</span>, I'm dedicated to building dependable and impactful intelligent systems that amplify human potential while ensuring inclusivity and accessibility for all.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              During my time as a <span className="text-cyan-400">Fellow & Resident at SWE Headstarter AI</span>, I contributed to AI-driven innovations that push the boundaries of what's possible. I bring expertise in modern web technologies and a strong focus on <span className="text-cyan-400">practical AI applications</span>, automation, and clean development architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="glass p-5 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-light mb-3 sm:mb-4 text-cyan-400 tracking-wide">
                Education
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <h4 className="font-normal text-white text-sm">
                    Swinburne University of Technology
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-light">Bachelor of Software Development</p>
                  <p className="text-gray-500 text-xs sm:text-sm font-light">Graduated: December 2025</p>
                  <p className="text-xs text-gray-600 font-light">Melbourne, Australia</p>
                </div>
              </div>
            </div>

            <div className="glass p-5 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-light mb-3 sm:mb-4 text-purple-400 tracking-wide">
                Current Focus
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm font-light">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Pursuing full-stack development expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Advancing toward AI engineering specialization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Building clean, scalable architectures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Contributing to open-source projects
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


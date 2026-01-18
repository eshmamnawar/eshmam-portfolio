"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "AI Enthusiast",
  "Problem Solver",
];

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-tight px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-glow">
              Eshmam Nawar
            </span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 h-10 sm:h-12 md:h-14 font-light px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-gray-400">I'm a </span>
            <span className="text-cyan-400 font-normal">
              {displayText}
              <span className="animate-pulse text-cyan-500">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Undergraduate student at Swinburne University of Technology | Major
            Software Development | Former SWE Resident at Headstarter AI
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/eshmamnawar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-minimal rounded-md flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eshmam-nawar-447016217/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-minimal rounded-md flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 text-sm"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="btn-primary rounded-md flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 text-sm"
            >
              <Mail size={18} />
              <span>Contact</span>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#about"
              className="animate-bounce text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


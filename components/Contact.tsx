"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/eshmamnawar",
    icon: Github,
    color: "from-gray-400 to-gray-600",
    description: "View my projects and contributions",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eshmam-nawar-447016217/",
    icon: Linkedin,
    color: "from-blue-400 to-blue-600",
    description: "Connect with me professionally",
  },
  {
    name: "Email",
    url: "mailto:eshmam2016@gmail.com",
    icon: Mail,
    color: "from-cyan-400 to-cyan-600",
    description: "eshmam2016@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm font-light px-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Improved card grid layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col items-center text-center p-6 sm:p-8 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon container */}
                  <div className={`relative mb-4 sm:mb-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${link.color} text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon size={24} className="sm:w-7 sm:h-7" />
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 w-full">
                    <h3 className="text-white font-light text-lg sm:text-xl tracking-wide mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {link.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-light group-hover:text-gray-400 transition-colors duration-300 leading-relaxed break-words">
                      {link.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />
                </motion.a>
              );
            })}
          </motion.div>
          
          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center px-4"
          >
            <a
              href="mailto:eshmam2016@gmail.com"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/50 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105 font-light text-xs sm:text-sm tracking-wide relative overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all duration-300" />
              <Send size={16} className="sm:w-[18px] sm:h-[18px] relative z-10" />
              <span className="relative z-10">Send Me a Message</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-gray-600 text-sm font-light"
        >
          <p>© {new Date().getFullYear()} Eshmam Nawar. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}


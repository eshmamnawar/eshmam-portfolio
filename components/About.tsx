"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    qualification: "Bachelor of Software Development",
    institution: "Swinburne University of Technology",
    tags: ["Graduated Dec 2025", "Melbourne, AU"],
  },
  {
    qualification: "Higher Secondary Certificate (HSC)",
    institution: "Milestone School and College",
    tags: ["GPA 5.00 / 5.00", "Session 2018-2019"],
  },
  {
    qualification: "Secondary School Certificate (SSC)",
    institution: "Milestone School and College",
    tags: ["GPA 5.00 / 5.00", "Session 2016-2017"],
  },
];

const interests = [
  "AI-powered products",
  "Intelligent systems",
  "Scalable software",
  "Technology-driven businesses",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-page">
        <SectionHeading eyebrow="Who I am" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-7 lg:gap-9 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6 }}
            className="neu-card p-7 sm:p-9 space-y-5"
          >
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Hi, I&apos;m <span className="text-accent font-semibold">Eshmam Nawar</span>, a{" "}
              <span className="text-ink font-semibold">
                Software Development graduate from Swinburne University of
                Technology
              </span>{" "}
              and currently working as a{" "}
              <span className="text-accent font-semibold">
                Project Manager &amp; Technical Lead at Limitless Technologies
              </span>
              .
            </p>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              I work at the intersection of{" "}
              <span className="text-ink font-semibold">
                product, business, and technology
              </span>
              , helping transform ideas into well-defined and scalable digital
              products. My work spans product strategy, MVP planning, software
              architecture, technical decision-making, vendor management,
              security considerations, and translating business requirements
              into clear technical direction.
            </p>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Previously, as a{" "}
              <span className="text-ink font-semibold">
                Fellow &amp; Software Engineering Resident at Headstarter AI
              </span>
              , I worked on AI and full-stack projects that strengthened my
              experience in{" "}
              <span className="text-accent font-medium">
                applied AI, automation, modern software development, and
                building practical technology solutions
              </span>
              .
            </p>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              With a foundation in software development and a growing focus on{" "}
              <span className="text-accent font-semibold">AI engineering</span>, I
              enjoy understanding both how products should work and how the
              technology behind them should be designed. I&apos;m particularly
              interested in{" "}
              <span className="text-ink font-semibold">
                AI-powered products, intelligent systems, scalable software, and
                technology-driven businesses
              </span>
              .
            </p>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              My long-term goal is to combine{" "}
              <span className="text-accent font-semibold">
                technical depth, product thinking, and leadership
              </span>{" "}
              to build and lead impactful technology products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="neu-card p-7 sm:p-8">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl neu-inset grid place-items-center text-accent shrink-0">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-base font-semibold text-ink">
                  Current Role
                </h3>
              </div>
              <h4 className="font-semibold text-ink text-sm mb-1">
                Limitless Technologies
              </h4>
              <p className="text-ink-muted text-sm">
                Project Manager &amp; Technical Lead
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 rounded-full neu-inset-sm text-[12px] text-ink-muted">
                  Product strategy
                </span>
                <span className="px-3 py-1.5 rounded-full neu-inset-sm text-[12px] text-ink-muted">
                  Software architecture
                </span>
                <span className="px-3 py-1.5 rounded-full neu-inset-sm text-[12px] text-ink-muted">
                  Technical direction
                </span>
              </div>
            </div>

            <div className="neu-card p-7 sm:p-8">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl neu-inset grid place-items-center text-accent shrink-0">
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-base font-semibold text-ink">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((item, i) => (
                  <div
                    key={item.qualification}
                    className={i > 0 ? "pt-5 border-t border-[var(--shadow-dark)]" : ""}
                  >
                    <h4 className="font-semibold text-ink text-sm mb-1">
                      {item.qualification}
                    </h4>
                    <p className="text-ink-muted text-sm">{item.institution}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full neu-inset-sm text-[12px] text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="neu-card p-7 sm:p-8">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl neu-inset grid place-items-center text-accent shrink-0">
                  <Target size={18} />
                </div>
                <h3 className="text-base font-semibold text-ink">
                  Particularly Interested In
                </h3>
              </div>
              <ul className="space-y-3">
                {interests.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Rocket,
  Route,
  ClipboardList,
  Users,
  FileCode2,
  ShieldAlert,
  Scale,
  GitMerge,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Contribution = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

// Verbatim responsibilities, each given a short label so the grid stays
// scannable while the full statement remains readable underneath.
const limitlessContributions: Contribution[] = [
  {
    icon: Route,
    label: "End-to-end delivery",
    detail:
      "Lead projects from initial planning and requirements through development, delivery, and handoff.",
  },
  {
    icon: ClipboardList,
    label: "Scope & acceptance criteria",
    detail:
      "Define project scope, deliverables, priorities, dependencies, and acceptance criteria with business and technical stakeholders.",
  },
  {
    icon: Users,
    label: "Engineering partners",
    detail:
      "Coordinate external engineering partners, ensuring requirements, timelines, technical expectations, and quality standards remain aligned.",
  },
  {
    icon: FileCode2,
    label: "Specs & statements of work",
    detail:
      "Translate business objectives into clear technical specifications, Statements of Work, milestones, and actionable development requirements.",
  },
  {
    icon: ShieldAlert,
    label: "Risk management",
    detail:
      "Identify and manage project risks across technology, security, compliance, vendors, contracts, cost, and delivery.",
  },
  {
    icon: Scale,
    label: "Vendor evaluation",
    detail:
      "Evaluate vendor proposals, estimates, and scope changes to prevent ambiguity, unnecessary cost, and vendor lock-in.",
  },
  {
    icon: GitMerge,
    label: "Decision facilitation",
    detail:
      "Facilitate decisions between leadership and engineering when business priorities, technical constraints, budgets, and timelines conflict.",
  },
  {
    icon: Settings2,
    label: "Infrastructure & operations",
    detail:
      "Build the company's internal infrastructure and tooling for collaboration, design, and operational workflows, and plan for company expansion.",
  },
];

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  icon: LucideIcon;
  description?: string[];
  contributions?: Contribution[];
  type: string;
  current?: boolean;
};

const experiences: Experience[] = [
  {
    title: "Project Manager & Technical Lead",
    company: "Limitless Technologies Inc.",
    location: "United States",
    period: "Present",
    icon: Rocket,
    contributions: limitlessContributions,
    type: "Fintech Startup",
    current: true,
  },
  {
    title: "SWE Resident",
    company: "Headstarter AI",
    location: "Remote",
    period: "Former",
    icon: Briefcase,
    description: [
      "Worked on AI-driven innovations and software engineering projects",
      "Collaborated with a team of developers on cutting-edge AI solutions",
      "Contributed to open-source projects and best practices",
    ],
    type: "Fellow & Resident",
  },
  {
    title: "Bachelor of Computer Science",
    company: "Swinburne University of Technology",
    location: "Melbourne, Australia",
    period: "December 2025",
    icon: GraduationCap,
    description: [
      "Completed a Bachelor of Computer Science, majoring in Software Development",
      "Specialized in modern web technologies, AI, and software architecture",
      "Built multiple projects and contributed to the developer community",
    ],
    type: "Education",
  },
];

function ContributionGrid({ items }: { items: Contribution[] }) {
  return (
    <div className="mt-2">
      <div className="flex items-center gap-3 mb-6">
        <h5 className="text-[12px] tracking-[0.18em] uppercase text-ink-faint">
          Key Responsibilities
        </h5>
        <span className="h-px flex-grow bg-[var(--shadow-dark)]" />
        <span className="px-2.5 py-1 rounded-full neu-inset-sm text-[12px] text-ink-faint tabular-nums">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group relative neu-raised-sm rounded-2xl p-5 transition-shadow duration-300"
            >
              <span className="absolute top-4 right-4 text-[12px] font-semibold tabular-nums text-ink-faint opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-10 h-10 rounded-xl neu-inset grid place-items-center text-accent mb-4">
                <Icon size={16} />
              </div>

              <h6 className="text-[13px] font-semibold text-ink mb-2 pr-7 group-hover:text-accent transition-colors duration-300">
                {item.label}
              </h6>
              <p className="text-[12.5px] leading-relaxed text-ink-muted">
                {item.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-page">
        <SectionHeading eyebrow="Where I've been" title="Experience" />

        <div className="relative">
          <div className="hidden md:block absolute left-[27px] top-3 bottom-3 w-[6px] rounded-full neu-inset-sm overflow-hidden">
            <div className="w-full h-full gradient-ramp opacity-45" />
          </div>

          <div className="space-y-7">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className="relative md:pl-[86px]"
                >
                  <div className="hidden md:grid absolute left-0 top-6 w-[60px] h-[60px] rounded-full neu-raised place-items-center text-accent">
                    <Icon size={20} />
                  </div>

                  <div className="neu-card p-7 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                      <div className="flex-1">
                        <div className="md:hidden w-11 h-11 rounded-2xl neu-inset grid place-items-center text-accent mb-4">
                          <Icon size={17} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-ink mb-1.5">
                          {exp.title}
                        </h3>
                        <h4 className="text-sm sm:text-base text-accent font-medium">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-wrap md:flex-col gap-2">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-[12px] text-ink-muted whitespace-nowrap">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-[12px] text-ink-muted whitespace-nowrap">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 mb-6">
                      <span className="inline-block px-4 py-1.5 rounded-full neu-raised-sm text-[12px] text-accent font-medium">
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-sm text-[12px] text-ink-muted font-medium">
                          <span className="w-1.5 h-1.5 rounded-full gradient-ramp animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    {exp.contributions ? (
                      <ContributionGrid items={exp.contributions} />
                    ) : (
                      <ul className="space-y-3">
                        {exp.description?.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

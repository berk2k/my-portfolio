"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer (Part-time, Remote)",
    company: "Nullware Digital | Bournemouth, UK",
    date: "Jan 2026 – Present",
    details: [
      "Leading the backend development for a greenfield product, establishing API contracts and core system architecture.",
      "Designing and implementing a modular authentication engine to standardize security across new services.",
      "Working closely with the founder on system design, focusing on data modeling and scalable deployment strategies."
    ],
    tags: ["Node.js", "Redis", "System Design", "API Architecture"],
  },
  {
    role: "Software Engineer (Self-Employed)",
    company: "",
    date: "July 2025 – December 2025",
    details: [
      "Designed a multi-tenant API and database architecture with strict tenant isolation, focusing on scalability and operational readiness for a deployable MVP.",
      "Enhanced system observability by implementing OpenTelemetry-based tracing and structured logging, significantly accelerating root-cause analysis and debugging processes.",
      "Built CI/CD pipelines using GitHub Actions and Docker-based deployments to support rapid iteration and reliable releases.",
    ],
    tags: ["SaaS", "Multi-Tenancy", "Observability", "Docker", "CI/CD"],
  },
  {
    role: "Data Engineer (Internship)",
    company: "VakifBank T.A.O · Istanbul, Turkey",
    date: "July 2023 – August 2023",
    details: [
      "Analyzed and cleansed multi-source datasets using Oracle SQL to improve data quality and reliability before data warehouse ingestion.",
      "Supported ETL workflows using Informatica, Python, and Apache Spark to ensure accurate and consistent data integration.",
    ],
    tags: ["SQL", "ETL", "Informatica", "Data Engineering"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* 🔹 Radial spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-white mb-14 text-center"
        >
          Experience
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative border-l border-neutral-800">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="ml-6 mb-12 relative"
            >
              {/* DOT (Education ile aynı renk) */}
              <span className="absolute -left-3 top-2 w-3 h-3 rounded-full bg-indigo-400"></span>

              {/* CARD */}
              <div className="bg-neutral-950 rounded-2xl p-6 hover:bg-neutral-800 transition shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-base md:text-lg font-medium text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-500">{exp.date}</span>
                </div>

                {exp.company && (
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                )}

                <ul className="mt-3 space-y-1 text-gray-400 text-sm">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full 
                                 bg-neutral-800 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

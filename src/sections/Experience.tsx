"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer, Self-Employed",
    company: "Pre-launch SaaS",
    date: "July 2025 – Present",
    details: [
      "Building multi-tenant SaaS solutions with ASP.NET Core, React as part of a small team.",
      "Designing system, database, and API architecture, with a focus on scalable, secure, multi-tenant design.",
      "Built technical infrastructure: CI/CD pipelines (GitHub Actions → Cloud services), Docker.",
      "Implemented observability (structured logs, request tracing, health checks) as cross-cutting pipelines",
    ],
    tags: ["SaaS", "Multi-Tenant Architecture", "Docker", "CI/CD", "Cloud"],
  },
  {
    role: "Data Engineer Intern",
    company: "Vakifbank T.A.O, Istanbul, Turkey",
    date: "July 2023 – August 2023",
    details: [
      " Analyzed and cleansed multi-source datasets using Oracle SQL to improve data quality and reliability before loading into the data warehouse.",
      "Supported ETL processes using Informatica, Python, Apache Spark contributing to accurate data integration.",
    ],
    tags: ["SQL", "ETL", "Informatica", "Agile/Scrum"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative pt-12 pb-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* 🔹 Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative border-l border-gray-700">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 ml-6 relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-4 ring-neutral-900"></span>

              {/* Card */}
              <div className="bg-neutral-950 rounded-xl p-8 shadow-md hover:shadow-xl hover:bg-neutral-900/80 transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="px-3 py-1 bg-neutral-800 text-gray-200 text-sm rounded-lg">
                    {exp.date}
                  </span>
                </div>

                <p className="text-indigo-400 font-medium">{exp.company}</p>

                <ul className="mt-4 space-y-2 text-gray-200">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-indigo-400">➜</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full"
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

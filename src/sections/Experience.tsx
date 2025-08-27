"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer & Startup Co-founder",
    company: "Pre-launch SaaS Startup",
    date: "July 2025 – Present",
    details: [
      "Leading a small team in the design and development of a multi-tenant SaaS platform tailored for small businesses.",
      "Designing system, database, and API architecture, with a focus on scalable, secure, multi-tenant design.",
      "Building and automating infrastructure using Docker, cloud deployments, CI/CD pipelines, and monitoring tools.",
      "Developed and published a reusable Mediator-based NuGet package to centralize cross-cutting concerns such as logging, validation, and exception handling.",
    ],
    tags: ["SaaS", "Multi-Tenancy", "Docker", "CI/CD", "Cloud"],
  },
  {
    role: "Data Engineer Intern",
    company: "Vakifbank T.A.O, Istanbul, Turkey",
    date: "July 2023 – August 2023",
    details: [
      "Wrote SQL queries to analyze and cleanse data from multiple sources.",
      "Assisted in building and maintaining ETL processes for the data warehouse using Informatica.",
      "Collaborated within a Scrum team to coordinate daily tasks and project progress.",
    ],
    tags: ["SQL", "ETL", "Informatica", "Agile/Scrum"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
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
              <div className="bg-neutral-800 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  
                  <span className="px-3 py-1 bg-neutral-700 text-gray-200 text-sm rounded-lg">
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

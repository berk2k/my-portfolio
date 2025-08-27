"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    title: "Backend",
    skills: ["C#", ".NET Core", "Node.js", "Express.js", "REST API & Auth"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MSSQL", "Entity Framework Core"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure Cloud", "CI/CD Pipelines", "Cloud-based Deployments"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Containerization",
    skills: ["Docker", "Docker Compose"],
  },
  {
    title: "Architecture & Design",
    skills: [
      "SaaS Application Design",
      "Multi-Tenancy",
      "Domain-Driven Design (DDD)",
      "CQRS",
      "API Gateway & Reverse Proxy",
    ],
  },
  {
    title: "Messaging",
    skills: ["RabbitMQ", "Event-Driven Communication"],
  },
  {
    title: "Software Engineering Practices",
    skills: [
      "Git & Version Control",
      "Clean Code & SOLID Principles",
      "Unit Testing",
      "Design Patterns",
      "Agile / Scrum Workflow",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl shadow-lg p-8 hover:shadow-xl hover:bg-neutral-800 transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <FaArrowRight className="text-indigo-400" size={18} />
                    <span className="text-lg text-gray-200">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

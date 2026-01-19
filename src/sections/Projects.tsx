"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "TranscodeX – Event-Driven Video Transcoding Platform",
    description:
      "A microservices-based system for ingesting, processing, and transcoding video files using asynchronous, event-driven workflows. Designed for scalability and fault isolation.",
    tags: [
      "Node.js",
      "Docker",
      "RabbitMQ",
      "PostgreSQL",
      "Microservices",
      "Backblaze B2",
      "Azure",
      "CI/CD",
    ],
    github: "https://github.com/berk2k/TranscodeX",
  },
  {
    title: "RandevuPortali",
    description:
      "A multi-tenant appointment management system with strict tenant isolation, domain-driven backend design, and observability-first architecture.",
    tags: [
      ".NET",
      "MSSQL",
      "Multi-Tenancy",
      "SaaS Architecture",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    demo: "https://randevuportali-demo.netlify.app/",
    docs: "https://randevuportali-docs.netlify.app/",
  },
  {
    title: "Backpressure-Aware Log Processing Pipeline",
    description:
      "A concurrent log processing pipeline built in Go, designed to handle high-throughput workloads with backpressure control, batching, and graceful shutdown.",
    tags: ["Go", "Concurrency", "Backpressure", "System Design", "Metrics"],
    github: "https://github.com/berk2k/log-processing-pipeline",
  },
  {
    title: "FlowMediator – Lightweight CQRS Mediator",
    description:
      "A lightweight mediator library for .NET with pipeline behaviors, enabling clean separation of concerns and extensible cross-cutting logic.",
    tags: [".NET", "CQRS", "Mediator Pattern", "Open Source", "NuGet"],
    github: "https://github.com/berk2k/FlowMediator",
    nuget: "https://www.nuget.org/packages/FlowMediator",
  },
  {
    title: "Concurrent Systems Programming (C / POSIX)",
    description:
      "A systems programming project focused on concurrency, synchronization, and inter-process communication using POSIX threads and primitives.",
    tags: ["C", "POSIX", "Concurrency", "Multithreading", "IPC"],
    github: "https://github.com/berk2k/c-posix-concurrency",
  },
  {
    title: "Docky Desktop – Docker Management Tool",
    description:
      "A desktop application for managing Docker containers and images, focused on improving local development workflows.",
    tags: [".NET", "WPF", "Docker", "Developer Tooling"],
    github: "https://github.com/berk2k/Docky-Desktop",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* 🔹 Radial spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-white text-center mb-14"
        >
          Selected Projects
        </motion.h2>

        {/* PROJECT LIST */}
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-950 rounded-2xl p-6 
                         hover:bg-neutral-800 transition shadow-lg"
            >
              {/* TITLE + LIVE BADGE */}
              <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                {project.title}
                {project.demo && (
                  <span className="text-xs text-green-400">Live</span>
                )}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full 
                               bg-neutral-800 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                )}

                {project.nuget && (
                  <a
                    href={project.nuget}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    NuGet
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FiExternalLink size={18} />
                    Demo
                  </a>
                )}

                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FiExternalLink size={18} />
                    Docs
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

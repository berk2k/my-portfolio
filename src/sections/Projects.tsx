"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "TranscodeX - Video Transcoding System",
    description:
      "Microservices-based platform that ingests raw video files, transcodes them into multiple formats, and compresses for efficient delivery. Built with Node.js, Docker, PostgreSQL, and Backblaze B2.",
    tags: ["Node.js", "PostgreSQL","Docker", "Microservices", "Backblaze B2", "Azure Cloud", "RabbitMQ", "CI/CD","Api Gateway"],
    github: "https://github.com/berk2k/TranscodeX"

  },
  {
    title: "Docky Desktop - Docker Management App",
    description:
      "A desktop application built with WPF (.NET) for visual management of Docker containers and images.",
    tags: [".NET Core", "WPF", "Docker", "Desktop"],
    github: "https://github.com/berk2k/Docky-Desktop"
 
  },
  {
    title: "VetSoft",
    description:
      "Comprehensive web & mobile app for veterinary clinics, replacing paper-based management and enabling real-time updates for pet owners.",
    tags: ["Python Flask Framework", ".NET Core", "MSSQL", "Mobile", "Azure Cloud"],
    github: "https://github.com/berk2k/VetSoft"
 
  },
  {
    title: "Smart Bed",
    description:
      "Integrated hardware & software solution that monitors patient movements and alerts nurses in real time to abnormal activities.",
    tags: ["IoT", "Healthcare", "Real-time", "Python","Oracle Cloud SQL"],
    github: "https://github.com/berk2k/Smart-Bed",

  },
  {
    title: "Restaurant Ordering System",
    description:
      "Full-stack restaurant ordering platform with automated CI/CD pipelines via GitHub Actions and Render Cloud. Optimized for speed and accuracy.",
    tags: [".NET Core", "CI/CD", "Docker", "Cloud"],
    github: "https://github.com/berk2k/restaurant-project"

  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative pt-12 pb-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* 🔹 Radial spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-[1.2] bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Projects
        </h2>


        
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-950 rounded-xl p-6 shadow-md hover:shadow-xl hover:bg-neutral-900/80 transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition"
                    >
                    <FaGithub size={22} />
                    <span>View on Github</span>
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

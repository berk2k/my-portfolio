"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
                 bg-gradient-to-b from-neutral-950 to-neutral-900
                 text-center overflow-hidden"
    >
      {/* 🔹 Radial spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <motion.div
        className="relative px-6 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          About Me
        </h1>

        {/* SHORT SUMMARY */}
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          Backend & systems-focused software engineer interested in scalable,
          reliable, cloud-native systems and distributed architectures.
        </p>

        {/* MAIN TEXT */}
        <p className="text-gray-400 mt-8 leading-relaxed text-sm md:text-base">
          I design and build backend systems with a systems-oriented mindset,
          focusing on multi-tenant SaaS platforms, event-driven microservices,
          and observability-first architectures.
          <br />
          <br />
          I enjoy working close to system boundaries such as APIs, databases,
          messaging, and infrastructure, and understanding how design decisions
          affect performance, reliability, and maintainability under real-world
          constraints.
        </p>

        {/* FOCUS */}
        <p className="text-gray-500 mt-6 text-sm">
          Backend Systems · Distributed Systems · Cloud Architecture
        </p>

        {/* STACK */}
        <p className="text-gray-600 mt-2 text-sm">
          .NET · Go · Node.js · Docker · Azure · CI/CD · Observability
        </p>

        {/* LINKS */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

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
        <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          About Me
        </h1>

        {/* SHORT SUMMARY */}
        <p className="text-gray-400 mt-4 text-base md:text-lg font-medium">
          Backend & systems-focused software engineer interested in scalable,
          reliable, cloud-native systems and distributed architectures.
        </p>

        {/* MAIN TEXT */}
        <p className="text-gray-400 mt-8 leading-relaxed text-sm md:text-base text-pretty">
          I design and build backend systems with a focus on <strong>reliability and operational excellence</strong>. 
          From architecting multi-tenant SaaS platforms to engineering high-throughput, 
          backpressure-aware data pipelines, I bridge the gap between business requirements 
          and system performance.
          <br />
          <br />
          Beyond enterprise work, I contribute to the ecosystem by developing open-source tooling, 
          such as <strong>FlowMediator</strong>, a .NET library focused on decoupling cross-cutting concerns.
          <br />
          <br />
          I enjoy working close to system boundaries, APIs, database internals, and messaging, and 
          exploring how lower-level constraints (like POSIX concurrency or Go runtime) 
          shape higher-level architecture decisions.
        </p>

        {/* FOCUS - Styled to look like a terminal status bar */}
        <div className="mt-8 py-2 px-4 bg-neutral-900/50 border border-neutral-800 rounded-lg inline-block">
          <p className="text-indigo-400 text-xs md:text-sm font-mono tracking-wider">
            Backend Systems · Distributed Systems · Cloud Architecture
          </p>
        </div>

        {/* STACK */}
        <p className="text-gray-600 mt-4 text-xs font-mono uppercase tracking-[0.2em]">
          .NET · Go · Node.js | Docker · Azure · Redis | Observability
        </p>

        {/* LINKS */}
        <div className="mt-10 flex justify-center gap-8">
          <motion.a
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            href="https://github.com/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors duration-200 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            href="https://www.linkedin.com/in/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors duration-200 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
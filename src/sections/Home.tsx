"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]"></div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* MAIN TITLE */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">
            Berk Polat
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Backend-focused software engineer building{" "}
          <span className="text-indigo-400 font-medium">
            scalable, cloud-native systems
          </span>
          ,{" "}
          <span className="text-indigo-400 font-medium">
            multi-tenant SaaS platforms
          </span>{" "}
          and{" "}
          <span className="text-indigo-400 font-medium">
            event-driven architectures.
          </span>
        </motion.p>

        {/* TAGLINE */}
        <motion.p
          className="text-gray-500 mt-4 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          .NET • Node.js • Docker • Azure • CI/CD • Observability
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          className="mt-10 flex space-x-6 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://github.com/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 hover:bg-gray-800 text-gray-300 font-medium rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition shadow-md shadow-indigo-700/40"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

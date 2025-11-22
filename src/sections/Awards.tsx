"use client";

import { motion } from "framer-motion";

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold leading-snug text-center mb-12 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
        >
          Awards
        </motion.h2>

        {/* Hackathon Award */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-950 rounded-xl p-8 shadow-md hover:shadow-xl hover:bg-neutral-900/80 transition max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            2nd Place – Bornova Municipality’s Resilient City Hackathon
          </h3>
          <p className="text-gray-300 text-sm mb-4">October 2025</p>

          <p className="text-gray-200 leading-relaxed">
            Developed an IoT & AI-based water recovery and household awareness system during a 2-day
            hackathon, digitizing purification workflows for real-time monitoring and energy-efficient pump
            control to improve drought resilience.
          </p>

          <p className="text-gray-200 leading-relaxed mt-6">
            <span className="text-indigo-400">Role:</span> Collaborated in a 7-member team; developed backend
            and AI modules enabling real-time monitoring and anomaly detection in water quality monitoring
            (including wastewater analysis).
          </p>
        </motion.div>

        {/* Scholarship Award */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-950 rounded-xl p-8 shadow-md hover:shadow-xl hover:bg-neutral-900/80 transition max-w-3xl mx-auto mt-12"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            25% Merit Scholarship – Academic Achievement
          </h3>
          <p className="text-gray-300 text-sm mb-4">2023 – 2024 (Senior Year)</p>

          <p className="text-gray-200 leading-relaxed">
            Awarded a <span className="text-indigo-400 font-medium">25% academic merit scholarship</span> for
            strong academic performance during the 3rd year of the Software Engineering program.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

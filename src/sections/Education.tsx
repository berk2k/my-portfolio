"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Sc. in Software Engineering",
    university: "Yaşar University, Turkey",
    date: "2019 – 2024",
    details: ["Graduated with honors, ranked 3rd in the department."],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* 🔹 Radial spotlight background (Skills ile aynı) */}
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
          Education
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative border-l border-neutral-800">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="ml-6 mb-12 relative"
            >
              {/* DOT */}
              <span className="absolute -left-3 top-2 w-3 h-3 rounded-full bg-indigo-400"></span>

              {/* CARD */}
              <div className="bg-neutral-950 rounded-2xl p-6 hover:bg-neutral-800 transition shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-base md:text-lg font-medium text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-500">{edu.date}</span>
                </div>

                <p className="text-gray-400 text-sm">{edu.university}</p>

                <ul className="mt-3 space-y-1 text-gray-400 text-sm">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

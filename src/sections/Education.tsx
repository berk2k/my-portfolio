"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Sc. in Software Engineering",
    university: "Yasar University, Turkey",
    date: "2019 – 2024",
    details: [
      "Graduated with honors, ranked 3rd in the department.",
      
    ]
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative border-l border-gray-700">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 ml-6 relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-4 ring-neutral-950"></span>

              {/* Card */}
              <div className="bg-neutral-900 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <span className="px-3 py-1 bg-neutral-700 text-gray-200 text-sm rounded-lg">
                    {edu.date}
                  </span>
                </div>

                <p className="text-indigo-400 font-medium">{edu.university}</p>

                <ul className="mt-4 space-y-2 text-gray-200">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-indigo-400">➜</span>
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

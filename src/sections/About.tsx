"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Sc. in Software Engineering",
    university: "Yasar University, Turkey",
    date: "2019 – 2024",
    details: ["Graduated with honors, ranked 3rd in the department."],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* 🔹 Background spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold leading-snug text-center mb-12 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed mb-12 text-center max-w-3xl mx-auto"
          >
          I’m a backend-leaning software engineer who builds
          {" "}
          <span className="text-indigo-400 font-medium">
          scalable, cloud-native systems
          </span>
          {" "}using .NET and Node.js. My main focus is designing
          {" "}
          <span className="text-indigo-400 font-medium">
          SaaS architectures, multi-tenant applications, and event-driven microservices
          </span>
          . I enjoy working on products end-to-end, from API design and database modeling to
          containerization, observability, and CI/CD automation.


          <br /><br />
          I also share what I learn through
          {" "}
          <span className="text-indigo-400 font-medium">blog posts</span>, because
          I believe knowledge grows when it’s shared. Beyond technical skills, I value
          {" "}
          <span className="text-indigo-400 font-medium">
          clean code, clarity, and continuous learning
          </span>
          , and I’m always exploring tools that help build better systems.
          </motion.p>

        {/* Education Timeline */}
        <div className="relative border-l border-gray-700 mt-16">
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
              <div className="bg-neutral-950 rounded-xl p-8 shadow-md hover:shadow-xl hover:bg-neutral-900/80 transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <span className="px-3 py-1 bg-neutral-800 text-gray-200 text-sm rounded-lg">
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

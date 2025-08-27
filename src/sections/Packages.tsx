"use client";

import { motion } from "framer-motion";
import { SiNuget } from "react-icons/si";

const packages = [
  {
    title: "Lightweight Mediator NuGet Package",
    description:
      "A lightweight mediator library with pipeline behaviors for .NET 8/9. Ideal for learning CQRS patterns without the complexity of bigger frameworks. Provides request/response messaging and pipeline behaviors like logging and validation with minimal setup.",
    link: "https://www.nuget.org/packages/FlowMediator",
    tags: [".NET", "CQRS", "Mediator", "NuGet"],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative pt-12 pb-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* Background spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-[1.2] bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Packages
        </h2>

        
        <div className="flex justify-center">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-950 rounded-xl p-6 shadow-md hover:shadow-xl hover:bg-neutral-900/80 transition transform hover:-translate-y-2 max-w-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {pkg.title}
              </h3>

              <p className="text-gray-300 mb-4">{pkg.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* NuGet link */}
              <a
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-indigo-400 transition"
              >
                <SiNuget size={22} />
                <span>View on NuGet</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


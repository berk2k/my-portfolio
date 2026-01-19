"use client";

import { motion } from "framer-motion";

const featuredPost = {
  title:
    "Understanding Backpressure and System Behavior Through a Go Log Pipeline",
  description:
    "A deep dive into Go concurrency and system behavior through a custom-built log processing pipeline. Explores backpressure as a system behavior, the limits of auto-scaling, observability-driven debugging, and the complexity of graceful shutdown under load.",
  link: "https://medium.com/@berk2k/what-i-learned-about-backpressure-scaling-and-shutdown-by-building-an-auto-scaling-worker-44d481dc6e42",
};

const posts = [
  {
    title: "CI/CD with Docker: Automating .NET Core API Deployment to the Cloud",
    description:
      "A step-by-step guide to containerizing a .NET Core API, setting up GitHub Actions, and deploying automatically to the cloud.",
    link: "https://medium.com/@berk2k/en-ci-cd-pipeline-with-docker-automating-net-core-api-deployment-to-the-cloud-19b0ed54d2ff",
  },
  {
    title: "Best Practices for Logging in .NET",
    description:
      "Covers structured logging, Serilog usage, and practical logging strategies for maintainable backend systems.",
    link: "https://medium.com/@berk2k/en-comprehensive-guide-to-logging-in-net-applications-8985b494ed3d",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* 🔹 Radial spotlight background */}
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
          Writing
        </motion.h2>

        {/* FEATURED ARTICLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="bg-neutral-950 rounded-2xl p-8 shadow-lg
                       hover:bg-neutral-800 transition"
          >
            <span className="text-xs text-indigo-400 uppercase tracking-wide">
              Featured
            </span>

            <h3 className="mt-2 text-xl md:text-2xl font-medium text-white">
              {featuredPost.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {featuredPost.description}
            </p>

            <a
              href={featuredPost.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-gray-400 hover:text-white transition"
            >
              Read on Medium →
            </a>
          </div>
        </motion.div>

        {/* OTHER ARTICLES */}
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-neutral-950 rounded-2xl p-6 
                         hover:bg-neutral-800 transition shadow-lg"
            >
              <h3 className="text-base md:text-lg font-medium text-white mb-2">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {post.description}
              </p>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Read on Medium →
              </a>
            </motion.div>
          ))}
        </div>

        {/* MORE LINK */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-white transition"
          >
            More articles on Medium →
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "CI/CD with Docker: Automating .NET Core API Deployment to the Cloud",
    description:
      "A step-by-step guide on containerizing a .NET Core API with Docker, setting up GitHub Actions, and deploying automatically to the cloud.",
    link: "https://medium.com/@berk2k/en-ci-cd-pipeline-with-docker-automating-net-core-api-deployment-to-the-cloud-19b0ed54d2ff",
  },
  {
    title: "JWT Authentication & Authorization",
    description:
      "Explaining how JWT works in modern applications and how to implement secure authentication and authorization in your APIs.",
    link: "https://medium.com/@berk2k/part-2-implementing-jwt-authentication-in-asp-net-core-f7c1856551c4",
  },
  {
    title: "Best Practices for Logging in .NET",
    description:
      "A practical guide to logging in .NET applications with Serilog, structured logging, and best practices for maintainable systems.",
    link: "https://medium.com/@berk2k/en-comprehensive-guide-to-logging-in-net-applications-8985b494ed3d",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-center mb-12 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Blog
        </h2>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
              
              <p className="text-gray-300 mt-3 mb-4">{post.description}</p>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 font-medium hover:underline"
              >
                Read on Medium →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

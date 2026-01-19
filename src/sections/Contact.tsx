"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Contact
        </h2>

        <p className="text-gray-400 text-base mb-8">
          Feel free to reach out for collaboration, research, or engineering opportunities.
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://linkedin.com/in/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
    </section>
  );
}

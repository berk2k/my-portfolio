"use client";

import { FaGithub, FaLinkedin} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pb-20 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-8 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Contact
        </h2>

        <p className="text-gray-300 text-lg mb-6">
          Feel free to reach out for collaborations, opportunities, or just to say hi!
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

// src/components/Hero.tsx
import React from "react";
import { summary, quote, contactInfo } from "../data";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="pt-36 pb-20 px-4 bg-primary-dark text-center scroll-mt-20"
      // scroll-mt-20 is still useful if you click the "About" link
    >
      <div className="container mx-auto max-w-4xl">
        {/* Optional: Add your picture here if you have one */}
        {/* <img src="/path/to/your/photo.jpg" alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-accent-orange"/> */}

        <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
          John Developer
        </h1>
        <h2 className="text-2xl text-accent-orange mb-6">
          Senior Software Engineer
        </h2>
        <p className="text-text-muted text-lg italic mb-8">{quote}</p>
        <p className="text-text-light text-left md:text-center leading-relaxed mb-8">
          {summary}
        </p>
        <div className="flex justify-center space-x-6 text-3xl">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-accent-orange transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent-orange transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            className="text-text-muted hover:text-accent-orange transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

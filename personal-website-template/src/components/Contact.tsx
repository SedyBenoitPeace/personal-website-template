// src/components/Contact.tsx
import React from "react";
import { contactInfo, otherInfo } from "../data";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-primary-dark scroll-mt-20">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-text-muted mb-8">
          I'm always open to discussing new opportunities, interesting projects,
          or just connecting with other professionals. Feel free to reach out!
        </p>

        <div className="flex justify-center space-x-6 text-4xl mb-8">
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

        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-block bg-accent-orange text-primary-dark px-6 py-3 rounded font-semibold hover:bg-accent-orange-light transition-colors"
        >
          Send me an Email
        </a>

        {/* Optional: Include 'Other' info */}
        <div className="mt-12 border-t border-secondary-dark pt-8">
          <h3 className="text-xl text-accent-orange-light font-semibold mb-4">
            Beyond Coding
          </h3>
          <p className="text-text-muted">{otherInfo}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

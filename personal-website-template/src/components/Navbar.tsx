// src/components/Navbar.tsx
import React, { useState } from "react";
import { contactInfo } from "../data";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-black/70 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a
              href="#about"
              className="text-accent-orange text-xl font-bold hover:text-accent-orange-light"
            >
              John Developer
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-orange-light text-xl"
            >
              <FaGithub />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-orange-light text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-text-muted hover:text-accent-orange-light text-xl"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-text-muted hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile Social Icons */}
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-4 px-5">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-orange-light text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-orange-light text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-text-muted hover:text-accent-orange-light text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

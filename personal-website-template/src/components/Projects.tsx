// src/components/Projects.tsx
import React from "react";
import { projects, Project, contactInfo } from "../data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-secondary-dark scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl text-center font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="bg-primary-dark p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl text-accent-orange-light font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-4 text-sm">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-light mb-1">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-xs text-text-muted px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-700">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-orange transition duration-300 flex items-center text-sm"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-orange transition duration-300 flex items-center text-sm"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-text-muted mt-10">
          Visit my{" "}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-orange hover:underline"
          >
            GitHub profile
          </a>{" "}
          to see more!
        </p>
      </div>
    </section>
  );
};

export default Projects;

// src/components/Experience.tsx
import React from "react";
import { workExperience, ExperienceItem } from "../data";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 bg-primary-dark scroll-mt-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl text-center font-bold mb-10">
          Work Experience
        </h2>
        <div className="relative border-l-2 border-accent-orange pl-6 space-y-10">
          {/* Timeline Indicator */}
          <div className="absolute w-3 h-3 bg-accent-orange rounded-full -left-[7px] top-0"></div>

          {workExperience.map((job: ExperienceItem, index: number) => (
            <div key={index} className="relative pl-4">
              {/* Timeline Dot for each item */}
              <div className="absolute w-3 h-3 bg-accent-orange rounded-full -left-[31px] top-1 border-2 border-primary-dark"></div>

              <p className="text-sm text-text-muted mb-1">
                {job.dates} | {job.location}
              </p>
              <h3 className="text-xl text-accent-orange-light font-semibold mb-1">
                {job.title}
              </h3>
              <h4 className="text-lg text-text-light font-medium mb-2">
                {job.company}
              </h4>
              <ul className="list-disc list-inside text-text-muted space-y-1">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

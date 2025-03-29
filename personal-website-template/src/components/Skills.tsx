// src/components/Skills.tsx
import React from "react";
import { skillCategories, SkillCategory } from "../data";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-secondary-dark scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl text-center font-bold mb-10">
          Core Competencies & Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="bg-primary-dark p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl text-accent-orange-light font-semibold mb-4 border-b border-accent-orange pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center text-text-light"
                  >
                    {skill.icon && (
                      <skill.icon className="mr-2 text-accent-orange text-lg" />
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Optional: Display Core Competencies List */}
        {/* <div className="mt-12 bg-primary-dark p-6 rounded-lg shadow-lg">
             <h3 className="text-xl text-accent-orange-light font-semibold mb-4">General Competencies</h3>
             <ul className="list-disc list-inside text-text-light space-y-1">
                 {coreCompetencies.map(comp => <li key={comp}>{comp}</li>)}
             </ul>
         </div> */}
      </div>
    </section>
  );
};

export default Skills;

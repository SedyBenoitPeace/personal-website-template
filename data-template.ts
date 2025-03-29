// src/data.ts
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa"; // Example icons
import {
  SiTypescript,
  SiDotnet,
  SiCsharp,
  SiJavascript,
  SiAngular,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiApachekafka,
} from "react-icons/si"; // More specific icons

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  // phone?: string; // Add if you want, but maybe not public
}

export interface Skill {
  name: string;
  icon?: React.ElementType; // Use React Icons
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  dates: string;
  description: string[]; // Bullet points
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string; // Optional link to live demo
}

export const contactInfo: ContactInfo = {
  email: "john.developer@example.com",
  linkedin: "https://www.linkedin.com/in/johndeveloper/",
  github: "https://github.com/johndeveloper",
};

export const summary =
  "Experienced Full Stack Engineer with expertise in web development and cloud infrastructure. Passionate about creating efficient and user-friendly applications that solve real-world problems. Skilled in microservices architecture, technical documentation, and feature design. Continuously expanding technical knowledge through personal projects and exploration of emerging technologies.";

export const quote = `"Code is like humor. When you have to explain it, it's bad."`;

export const coreCompetencies: string[] = [
  "Full Stack Development",
  "Microservices Architecture",
  "Infrastructure Design & Management",
  "Technical Documentation & Communication",
  "Feature Design & Implementation",
  "Engineering Leadership & Mentorship",
  "User Experience Considerations",
  "Cross-functional Collaboration",
  "Delivery-focused Problem Solving",
  "Stakeholder Management",
  "Agile Methodologies & Project Execution",
];

// Simplified Skills - map your resume skills here
export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    skills: [
      { name: "React", icon: FaReact },
      { name: "NextJS", icon: FaReact }, // Placeholder, adjust icon
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS/SCSS", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "jQuery", icon: SiJavascript }, // Placeholder
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: ".NET / C#", icon: SiDotnet },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "NestJS", icon: FaNodeJs }, // Placeholder
      { name: "REST API", icon: FaDatabase }, // Placeholder
      { name: "gRPC", icon: FaDatabase }, // Placeholder
      { name: "Microservices", icon: FaAws }, // Placeholder
      { name: "Kafka", icon: SiApachekafka },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "CosmosDB", icon: FaDatabase }, // Placeholder
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: FaAws }, // Placeholder
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "CI/CD", icon: FaGitAlt }, // Placeholder
      { name: "Azure DevOps", icon: FaGitAlt }, // Placeholder
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Agile/Scrum/Kanban", icon: FaReact }, // Placeholder
      { name: "TDD", icon: FaReact }, // Placeholder
      { name: "Flutter (Learning)", icon: FaReact }, // Placeholder
      { name: "Salesforce Com. Cloud", icon: FaReact }, // Placeholder
    ],
  },
];

export const workExperience: ExperienceItem[] = [
  {
    company: "Tech Solutions Inc.",
    title: "Senior Full Stack Engineer",
    location: "Remote",
    dates: "Jan 2022 - Present",
    description: [
      "Led development of key features for major e-commerce platform",
      "Improved checkout experience resulting in 15% conversion rate increase",
      "Built scalable microservices using Node.js and Kafka",
      "Mentored junior developers and conducted technical interviews",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Optimized database queries resulting in 30% performance improvement"
    ],
  },
  {
    company: "FitTech Systems",
    title: "Software Engineer",
    location: "Boston, MA",
    dates: "Jun 2020 - Dec 2021",
    description: [
      "Reduced API response time by 30% through codebase optimization",
      "Improved mobile app UX with services summarizing user fitness data",
      "Migrated legacy services to modern architecture",
      "Developed new training formats and dedicated services",
    ],
  },
  {
    company: "Digital Retail Group",
    title: "Full Stack Developer",
    location: "Chicago, IL",
    dates: "Mar 2018 - May 2020",
    description: [
      "Led greenfield Web App project using .NET Core & Angular",
      "Developed features for eCommerce platform",
      "Implemented secure payment processing system",
      "Redesigned search functionality improving UX",
      "Provided on-call support during peak sales periods",
    ],
  },
  {
    company: "HealthTech Solutions",
    title: "Software Developer",
    location: "Seattle, WA",
    dates: "Jul 2016 - Feb 2018",
    description: [
      "Developed and maintained features for healthcare management web application",
      "Created responsive interfaces for both desktop and mobile platforms",
      "Collaborated with UX designers to improve user experience",
    ],
  },
  {
    company: "Innova Systems",
    title: "Junior Developer",
    location: "Portland, OR",
    dates: "Jan 2015 - Jun 2016",
    description: [
      "Developed healthcare management web application for clinics",
      "Worked directly with clients to understand requirements",
      "Integrated with external healthcare APIs to streamline workflows",
      "Participated in migration of legacy systems to modern technologies",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, and payment processing capabilities. Includes admin dashboard and analytics.",
    technologies: ["React", "TypeScript", "NodeJS", "MongoDB"],
    githubUrl: "https://github.com/johndeveloper/ecommerce-platform",
    liveUrl: "https://example-ecommerce.com", // Optional
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    technologies: [".NET", "C#", "Azure", "SQL Server"],
    githubUrl: "https://github.com/johndeveloper/task-management",
  },
  {
    title: "Community Mapping Project",
    description:
      "A web application that allows citizens to report community issues directly onto a map. Features include issue tracking, status updates, and integration with local government systems.",
    technologies: ["Leaflet.js", "React", "Express", "MongoDB"],
    githubUrl: "https://github.com/johndeveloper/community-mapper",
  },
];

export const education = [
  {
    institution: "University of Technology",
    degree: "Master's Degree",
    field: "Computer Science",
    dates: "Sep 2013 - Jun 2015",
  },
  {
    institution: "State University",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    dates: "Sep 2009 - Jun 2013",
    notes:
      "Thesis: Web-based GIS Application for Community Issue Reporting",
  },
];

export const otherInfo =
  "Outside of coding, I enjoy hiking, photography, and playing guitar. I also love exploring new technologies and contributing to open source projects in my free time.";
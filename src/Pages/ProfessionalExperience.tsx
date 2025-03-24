"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

// Define the type for a work experience item
interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

// Sample data - replace with your actual experience
const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Web Developer Intern",
    company: "Monal Tech",
    location: "Kathmandu",
    startDate: "Nov 2025",
    endDate: "Present",
    description:
      "Working on the front-end development of a yet undisclosed product",
    responsibilities: [
      "Implemented responsive designs using HTML, CSS, and JavaScript",
      "Developed and maintained reusable UI components using Next.js and Tailwind CSS",
      "Fixed bugs and improved application performance across different devices",
      "Created RESTful API integrations for data fetching and user authentication",
      "Participated in daily stand-up meetings and sprint planning sessions",
      "Collaborated with team lead to implement perfect interfaces",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Git",
    ],
  },
];

const ProfessionalExperience = () => {
  const [expandedId, setExpandedId] = useState<string | null>("exp1");
  const isInView = useIntersectionObserver("experienceSection", {
    threshold: 0.1,
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experienceSection"
      className="py-20 px-4 md:px-8 lg:px-16 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-text/80 max-w-2xl mx-auto">
            My journey in the tech industry, showcasing the roles and projects
            that have shaped my skills and expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - now positioned to go through the circles */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary z-0"></div>

          {/* Experience items */}
          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE_DATA.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline circle with line passing through */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 z-10">
                  <div className="w-full h-full rounded-full border-2 border-primary bg-background"></div>
                </div>

                {/* Content container with alternating layout */}
                <div className="flex flex-col md:flex-row items-start pt-14 md:pt-0">
                  {/* Left side (for even indexes) or empty space (for odd indexes) */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      index % 2 === 0 ? "" : "order-2"
                    }`}
                  >
                    {index % 2 === 0 && (
                      <div className="pr-12">
                        <div
                          className={`bg-tertiary rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                            expandedId === experience.id
                              ? "transform hover:-translate-y-1"
                              : "hover:shadow-lg"
                          }`}
                        >
                          {/* Card content for left side */}
                          <div
                            className="p-6 cursor-pointer"
                            onClick={() => toggleExpand(experience.id)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-bold text-text mb-2">
                                  {experience.role}
                                </h3>
                                <p className="text-text/90 mb-1">
                                  {experience.company} • {experience.location}
                                </p>
                                <p className="text-text/70 text-sm">
                                  {experience.startDate} - {experience.endDate}
                                </p>
                              </div>
                              <button
                                className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors"
                                aria-label={
                                  expandedId === experience.id
                                    ? "Collapse details"
                                    : "Expand details"
                                }
                              >
                                {expandedId === experience.id ? (
                                  <FaChevronUp />
                                ) : (
                                  <FaChevronDown />
                                )}
                              </button>
                            </div>

                            {/* Expanded content */}
                            {expandedId === experience.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4"
                              >
                                <p className="text-text/80 mb-4">
                                  {experience.description}
                                </p>

                                <h4 className="font-semibold text-text mb-2">
                                  Key Responsibilities:
                                </h4>
                                <ul className="list-disc pl-5 mb-4 space-y-1">
                                  {experience.responsibilities.map(
                                    (item, i) => (
                                      <li key={i} className="text-text/80">
                                        {item}
                                      </li>
                                    )
                                  )}
                                </ul>

                                <h4 className="font-semibold text-text mb-2">
                                  Technologies Used:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side (for odd indexes) or empty space (for even indexes) */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 1 ? "" : "md:order-2"
                    }`}
                  >
                    {(index % 2 === 1 || window.innerWidth < 768) && (
                      <div className="md:pl-12">
                        <div
                          className={`bg-tertiary rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                            expandedId === experience.id
                              ? "transform hover:-translate-y-1"
                              : "hover:shadow-lg"
                          }`}
                        >
                          {/* Card content for right side */}
                          <div
                            className="p-6 cursor-pointer"
                            onClick={() => toggleExpand(experience.id)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-bold text-text mb-2">
                                  {experience.role}
                                </h3>
                                <p className="text-text/90 mb-1">
                                  {experience.company} • {experience.location}
                                </p>
                                <p className="text-text/70 text-sm">
                                  {experience.startDate} - {experience.endDate}
                                </p>
                              </div>
                              <button
                                className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors"
                                aria-label={
                                  expandedId === experience.id
                                    ? "Collapse details"
                                    : "Expand details"
                                }
                              >
                                {expandedId === experience.id ? (
                                  <FaChevronUp />
                                ) : (
                                  <FaChevronDown />
                                )}
                              </button>
                            </div>

                            {/* Expanded content */}
                            {expandedId === experience.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4"
                              >
                                <p className="text-text/80 mb-4">
                                  {experience.description}
                                </p>

                                <h4 className="font-semibold text-text mb-2">
                                  Key Responsibilities:
                                </h4>
                                <ul className="list-disc pl-5 mb-4 space-y-1">
                                  {experience.responsibilities.map(
                                    (item, i) => (
                                      <li key={i} className="text-text/80">
                                        {item}
                                      </li>
                                    )
                                  )}
                                </ul>

                                <h4 className="font-semibold text-text mb-2">
                                  Technologies Used:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalExperience;

import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { FaNodeJs, FaDatabase, FaDocker, FaPython, FaRobot, FaGithub } from "react-icons/fa";
import "../styles/projects.css";

const projectItems = [
  {
    title: "Todoo App",
    period: "Project Overview",
    description:
      "Developed a robust task management platform utilizing Node.js, Express, and PostgreSQL, with streamlined containerized deployment via Docker.",
    icons: [
      <FaNodeJs className="tech-icon" key="nodejs" />,
      <FaDatabase className="tech-icon" key="postgres" />,
      <FaDocker className="tech-icon" key="docker" />
    ],
    githubUrl: "https://github.com/spawnnscode/todoo-app"
  },
  {
    title: "AI Chatbot vs Rule-Based Chatbot",
    period: "Bachelor Thesis Project",
    description:
      "Conducted an in-depth comparative study evaluating an AI-powered chatbot—integrating OpenAI's ChatGPT-4 API—against a traditional rule-based system, implemented using Python and Flask.",
    icons: [
      <FaPython className="tech-icon" key="python" />,
      <FaRobot className="tech-icon" key="robot" />
    ],
    githubUrl: "https://github.com/spawnnscode/ai-chatbot-vs-rule-based"
  }
];

const Projects = () => {
  return (
    <section className="experience-section" id="projects">
      <h2 className="experience-header">Projects</h2>
      <div className="timeline">
        {projectItems.map((item, index) => (
          <motion.div
            key={index}
            className="experience-item project-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="project-header">
              <h3 className="role-title">
                {item.icons} {item.title}
              </h3>
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-icon" />
              </a>
            </div>
            <p><strong>{item.period}</strong></p>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

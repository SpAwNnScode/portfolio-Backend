import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";

// Icons
import {
  FaCode,
  FaDatabase,
  FaDocker,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaUser,
  FaEnvelope,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import { SiCsharp, SiExpress, SiPostgresql } from "react-icons/si";

// Images
import uninowLogo from "../images/uninow-logo.png";
import todooScreenshot from "../images/todo.png";

// Styles
import "../styles/home.css";

function Home() {
  // Highlighted Experience
  const experienceHighlight = {
    title: "Werkstudent Software Entwickler @ UniNow GmbH",
    period: "Mar 2024 – Present, Magdeburg",
    logo: uninowLogo,
    points: [
      "Developing and optimizing web-scraping solutions using Node.js, Puppeteer, and Cheerio.",
      "Extracting and analyzing university data with efficient server-side HTML parsing and browser automation.",
    ],
    icons: [
      <FaLaptopCode className="tech-icon" key="laptop" />,
      <FaServer className="tech-icon" key="server" />,
      <FaNodeJs className="tech-icon" key="nodejs" />,
    ],
  };

  // Highlighted Project
  const projectHighlight = {
    title: "Todoo App",
    period: "Project Overview",
    description:
      "Developed a robust task management platform utilizing Node.js, Express, and PostgreSQL, with streamlined containerized deployment via Docker.",
    icons: [
      <FaNodeJs className="tech-icon" key="nodejs" />,
      <FaDatabase className="tech-icon" key="postgres" />,
      <FaDocker className="tech-icon" key="docker" />,
    ],
    githubUrl: "https://github.com/spawnnscode/todoo-app",
    screenshot: todooScreenshot,
  };

  // Skills grouped into categories
  const categories = [
    {
      name: "Programming Languages",
      skills: [
        { icon: <FaCode />, name: "JavaScript", color: "#f0db4f" },
        { icon: <SiCsharp />, name: "C#", color: "#f0ff" },
        { icon: <FaJava />, name: "Java", color: "#5382a1" },
      ],
    },
    {
      name: "Backend & DevOps",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
        { icon: <SiExpress />, name: "Express.js", color: "#404d59" },
        { icon: <FaDocker />, name: "Docker", color: "#2496ed" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
        { icon: <FaDatabase />, name: "MongoDB", color: "#4db33d" },
      ],
    },
    {
      name: "Version Control",
      skills: [
        { icon: <FaGitAlt />, name: "Git", color: "#f54d27" },
        { icon: <FaGithub />, name: "GitHub", color: "#ffffff" },
      ],
    },
  ];

  return (
    <section className="home">
      <div className="hero-content">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="gradient-text">Hi, I'm Ahmad Kanaan</h1>
          <p className="tagline">
            Engineering Informatics Student & Full-Stack Developer
          </p>
          <p className="description">
            in training with a strong passion for building scalable server
            solutions using modern web technologies and cloud infrastructure.
            Dedicated to continuous learning and innovative problem-solving, I
            strive to merge academic insights with practical challenges to
            deliver impactful and efficient solutions.
          </p>
        </motion.div>

        {/* About & Contact Cards */}
        <div className="about-contact-container">
          {/* About Me Card */}
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaUser className="card-icon" />
            <h2 className="card-title">About Me</h2>
            <p className="card-description">
              a student residing in Germany and pursuing a degree in Engineering
              Informatics at Otto-von-Guericke University Magdeburg, I am deeply
              passionate about software development. I actively seek
              opportunities to apply and expand my knowledge through hands-on
              projects and continuous learning. Eager to contribute to
              innovative solutions, I am enthusiastic about joining a dynamic
              team where I can further develop my skills and make meaningful
              contributions.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FaEnvelope className="card-icon" />
            <h2 className="card-title">Get in Touch</h2>
            <p className="card-description">
              Have a question or want to work together on a project?
            </p>
            <Link to="/contact" className="contact-button">
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Experience Card (Horizontal, Deep Blue Gradient) */}
        <motion.div
          className="experience-card-alt"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo on the left */}
          <div className="experience-image">
            <img src={experienceHighlight.logo} alt="UniNow Logo" />
          </div>

          {/* Info on the right */}
          <div className="experience-info">
            <h3 className="experience-title">{experienceHighlight.title}</h3>
            <div className="experience-icons">
              {experienceHighlight.icons.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
            <p className="experience-period">
              <strong>{experienceHighlight.period}</strong>
            </p>
            <ul className="experience-list-alt">
              {experienceHighlight.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <Link to="/experience" className="experience-viewmore">
              View More
            </Link>
          </div>
        </motion.div>

        {/* Project Card (Horizontal, Blueish Gradient) */}
        <motion.div
          className="project-card-alt"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="project-image">
            <img src={projectHighlight.screenshot} alt="Todoo App Screenshot" />
          </div>

          <div className="project-info">
            <h3 className="project-title">{projectHighlight.title}</h3>
            <p className="project-period">
              <strong>{projectHighlight.period}</strong>
            </p>
            <p className="project-description">
              {projectHighlight.description}
            </p>

            <div className="project-icons">
              {projectHighlight.icons.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>

            <a
              href={projectHighlight.githubUrl}
              className="github-link-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Additional Button for Projects Page */}
        <div className="projects-button-container">
          <Link to="/projects" className="projects-viewmore">
            View Projects
          </Link>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="category-section"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="category-name">{category.name}</h2>
              <div className="skill-cards">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

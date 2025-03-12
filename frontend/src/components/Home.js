import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom"; // or your routing library
import { 
  FaCode, FaDatabase, FaDocker, FaJava, 
  FaNodeJs, FaGitAlt, FaGithub, 
  FaUser, FaEnvelope
} from "react-icons/fa";
import { SiCsharp, SiExpress, SiPostgresql } from "react-icons/si";
import "../styles/home.css";

function Home() {
  // Group skills into categories
  const categories = [
    {
      name: "Programming Languages",
      skills: [
        { icon: <FaCode />, name: "JavaScript", color: "#f0db4f" },
        { icon: <SiCsharp />, name: "C#", color: "#f0ff" },
        { icon: <FaJava />, name: "Java", color: "#5382a1" }
      ]
    },
    {
      name: "Backend & DevOps",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
        { icon: <SiExpress />, name: "Express.js", color: "#404d59" },
        { icon: <FaDocker />, name: "Docker", color: "#2496ed" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
        { icon: <FaDatabase />, name: "MongoDB", color: "#4db33d" }
      ]
    },
    {
      name: "Version Control",
      skills: [
        { icon: <FaGitAlt />, name: "Git", color: "#f54d27" },
        { icon: <FaGithub />, name: "GitHub", color: "#ffffff" },
        // { icon: <FaBitbucket />, name: "Bitbucket", color: "#2684ff" }
      ]
    }
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
          <h1 className="gradient-text">Hi, I'm Lorem ipsum</h1>
          <p className="tagline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet dictum nunc, et hendrerit nisi placerat vitae. Nulla facilisi. Quisque condimentum urna et libero cursus, non aliquet enim eleifend. Aenean ac orci sit amet leo dictum tincidunt. In ullamcorper libero et odio auctor, non suscipit augue sollicitudin. Cras ac auctor nisl. Maecenas tincidunt orci ut dolor condimentum, ac hendrerit ligula faucibus.
          </p>
        </motion.div>

        {/* 
          NEW: About & Contact Cards 
          Placed side-by-side, matching the style of your skill cards.
        */}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet dictum nunc, et hendrerit nisi placerat vitae. Nulla facilisi. Quisque condimentum urna et libero cursus, non aliquet enim eleifend. Aenean ac orci sit amet leo dictum tincidunt. In ullamcorper libero et odio auctor, non suscipit augue sollicitudin. Cras ac auctor nisl. Maecenas tincidunt orci ut dolor condimentum, ac hendrerit ligula faucibus.            </p>
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
            {/* Link to /contact (adjust as needed for your router) */}
            <Link to="/contact" className="contact-button">
              Contact Me
            </Link>
          </motion.div>
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

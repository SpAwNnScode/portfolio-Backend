import React from "react";
import { motion } from 'framer-motion/dist/framer-motion';
import { FaLaptopCode, FaServer, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

import "../styles/experience.css";
import uninowLogo from "../images/uninow-logo.png";
import ecklebeLogo from "../images/ecklebe-logo.png"; 

const Experience = () => {
  const experienceItems = [
    {
      title: "Unterstützung der IT-Abteilung @ Dr. Ecklebe GmbH",
      period: "Oct 2023 – Jan 2024, Magdeburg",
      logo: ecklebeLogo, 
      points: [
        "Implemented a company application using the MAUI framework with C# and XAML.",
        "Set up structured release processes for updating Grafana in an IIoT solution with Docker.",
        "Handled deployment, testing, and comprehensive documentation to ensure smooth operations."
      ],
      icons: [<FaDocker className="tech-icon" key="docker" />,
        <FaServer className="tech-icon" key="server" />,
        <SiCsharp className="tech-icon" key="server" />
      ]
    },
    {
      title: "Werkstudent Software Entwickler @ UniNow",
      period: "Mar 2024 – Present, Magdeburg",
      logo: uninowLogo, 
      points: [
        "Developing and optimizing web-scraping solutions using Node.js, Puppeteer, and Cheerio.",
        "Extracting and analyzing university data with efficient server-side HTML parsing and browser automation.",
        "Creating detailed technical documentation for maintenance and further development."
      ],
      icons: [<FaLaptopCode className="tech-icon" key="laptop" />,
         <FaServer className="tech-icon" key="server" />,
        <FaNodeJs className="tech-icon" key="nodejs" />]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-header">Professional Journey</h2>
      
      <div className="timeline">
        {experienceItems.map((item, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img 
              src={item.logo} 
              alt="Company logo" 
              className="company-logo" 
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Failed to load logo:', item.logo);
              }}
            />
            
            <h3 className="role-title">
              {item.icons}
              {item.title}
            </h3>
            
            <p><strong>{item.period}</strong></p>
            
            <ul className="experience-list">
              {item.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + index * 0.3 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

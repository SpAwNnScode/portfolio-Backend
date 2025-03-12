import React, { useState } from "react";
import { motion } from 'framer-motion/dist/framer-motion';
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus("❌ Failed to send message. Please try again later.");
        }
      })
      .catch(() => {
        setLoading(false);
        setStatus("⚠️ An error occurred. Please try againasdasd.");
      });
  };

  return (
    <motion.section className="contact-page">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Send me a message!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required />
          </label>

          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="send-button" disabled={loading}>
            {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
          </motion.button>
        </form>

        {status && <p className="status-message">{status}</p>}

        <p className="direct-email">
          <FaEnvelope /> Or email me directly at <a href="mailto:spawn159753@gmail.com">spawn159753@gmail.com</a>
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Contact;

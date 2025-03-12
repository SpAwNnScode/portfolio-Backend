const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const morgan = require("morgan");
const winston = require("winston");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined")); 

// Configure Winston Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "server.log" }),
  ],
});

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

// Verify transporter configuration
transporter.verify((error) => {
  if (error) {
    logger.error("Transporter verification failed:", error);
  } else {
    logger.info("Server is ready to send emails");
  }
});

// API endpoint for contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  logger.info(`Received contact request from: ${name} <${email}>`);

  // Define email content
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.DESTINATION_EMAIL,
    subject: `New message from ${name}`,
    text: `You have a new contact request.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  // Send email via nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error("Error sending mail:", error);
      return res.status(500).json({ success: false, error: "Failed to send message." });
    }
    logger.info(`Email sent successfully: ${info.response}`);
    res.status(200).json({ success: true, message: "Message sent successfully." });
  });
});


app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

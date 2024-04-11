const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

// Function to send notifications via email
exports.sendNotificationMail = async (req, res) => {
  const { name, email, title, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTHUSER,
        pass: process.env.AUTHPASS,
      },
    });
    const mailOptions = {
      from: process.env.AUTHUSER,
      to: email,
      subject: title,
      html: `<h1>Hi ${name}</h1><p>${message}</p>`,
    };
    let info = await transporter.sendMail(mailOptions);
    res.send("Email sent: " + info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in sending email");
  }
};

// Example Admin function
exports.listAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


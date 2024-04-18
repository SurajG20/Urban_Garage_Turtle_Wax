const Admin = require("../models/Admin.js");
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
exports.AdminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Try to find the admin by username
    const admin = await Admin.findOne({ username: username });

    if (!admin) {
      // If no admin is found with the given username
      return res.status(404).json({
        isAuthenticated: false,
        isAdmin: false,
        message: "Admin not found",
      });
    }
    // if Admin presend then compare the password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      // If the passwords do not match
      return res.status(401).json({
        isAuthenticated: false,
        isAdmin: false,
        message: "Invalid credentials",
      });
    }

    // If the password matches, send back a success response
    res.json({
      isAuthenticated: true,
      isAdmin: true, // Since the user is authenticated as an admin
      message: "Admin authentication successful",
      admin: {
        id: admin._id,
        username: admin.username,
      },
    });
  } catch (error) {
    console.error("Server error: ", error);
    res.status(500).json({ error: "Server error" });
  }
};

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
    const admin = await Admin.findOne({ username: username,password:password });

    if (!admin) {
      // If no admin is found with the given username
      return res.status(404).json({
        isAuthenticated: false,
        isAdmin: false,
        message: "Admin not found",
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


exports.updatePassword = async (req, res) => {
  const { username, password, newpassword } = req.body;
  // console.log(req.body);

  try {
    const admin = await Admin.findOne({ username: username,password:password });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    admin.password = newpassword;
    await admin.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Server error" });
  }
};

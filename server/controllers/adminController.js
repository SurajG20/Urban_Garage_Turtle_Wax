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
  console.log("List all admins");
  try {
    const admins = await Admin.find();
    if (admins.length > 0) {
      // Map through the admins to extract the IDs
      const adminIDs = admins.map((admin) => admin._id);
      res.json({
        isAdmin: true, // Indicate that admins exist
        adminIDs: adminIDs, // Send the list of admin IDs
        admins: admins, // Optionally send full admin details
      });
    } else {
      // No admins found in the database
      res.json({
        isAdmin: false, // Indicate that no admins exist
        adminIDs: [], // No admin IDs to send
        message: "No admins found",
      });
    }
  } catch (error) {
    console.error("Server error: ", error);
    res.status(500).json({ error: "Server error" });
  }
};



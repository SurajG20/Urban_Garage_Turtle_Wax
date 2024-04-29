const express = require("express");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin"); // Ensure path correctness

const router = express.Router();
const adminController = require("../controllers/Admin.js");

// Assuming you have a GET method in your controller
router.post("/", adminController.AdminLogin);
router.post("/sendmail", adminController.sendNotificationMail);

// change password
// POST route to update password
router.post("/update-password", async (req, res) => {
  const { username, password, newpassword } = req.body;

  console.log(req.body)

  try {
    // Find the admin by username and current password
    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res
        .status(404)
        .json({ message: "Incorrect current password or username" });
    }

    // Directly update the password in the database (not recommended)
    admin.password = newpassword;
    await admin.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;

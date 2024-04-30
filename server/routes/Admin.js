const express = require("express");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin"); // Ensure path correctness

const router = express.Router();
const adminController = require("../controllers/Admin.js");

// Assuming you have a GET method in your controller
router.post("/", adminController.AdminLogin);
router.post("/sendmail", adminController.sendNotificationMail);




module.exports = router;

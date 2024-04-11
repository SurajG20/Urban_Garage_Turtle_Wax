const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Assuming you have a GET method in your controller
router.get("/", adminController.listAllAdmins);
router.post("/sendmail", adminController.sendNotificationMail);

module.exports = router;



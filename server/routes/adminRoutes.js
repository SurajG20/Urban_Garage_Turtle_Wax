const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.listAllAdmins);
router.post("/sendmail", adminController.sendNotificationMail);

module.exports = router;

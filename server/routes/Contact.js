const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/Contact.js");

// Route to get all products
router.get("/", contactControllers.allcontactUsers);

router.post("/", contactControllers.addContactFormUser);

module.exports = router;
const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/Service.js");

// Route to get all products
router.get("/", serviceController.allServiceUsers);

router.post("/", serviceController.addServiceUser);

module.exports = router;

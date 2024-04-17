const express = require("express");
const router = express.Router();
const sellCarController = require("../controllers/sellCarController.js");

// Route to get all products
router.get("/", sellCarController.allSellCarUsers);

router.post("/", sellCarController.addSellCarUser);

module.exports = router;

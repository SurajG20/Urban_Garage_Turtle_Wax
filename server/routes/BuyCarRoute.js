const express = require("express");
const router = express.Router();
const buyCarController = require("../controllers/BuyCarController.js");


// Route to get all products
router.get("/", buyCarController.allBuyCarUsers);

router.post("/", buyCarController.addBuyCarUser);

module.exports = router;

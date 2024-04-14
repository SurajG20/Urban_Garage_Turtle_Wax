const express = require("express");
const router = express.Router();
const buyCarController = require("../controllers/buyCarController");


// Route to get all products
router.get("/", buyCarController.allBuyCarUsers);

router.post("/", buyCarController.addBuyCarUser);

module.exports = router;

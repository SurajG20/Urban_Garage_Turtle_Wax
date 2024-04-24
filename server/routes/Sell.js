const express = require("express");
const router = express.Router();
const sellCarController = require("../controllers/SellCar.js");

// Route to get all products
router.get("/", sellCarController.allSellCarUsers);

router.post("/", sellCarController.addSellCarUser);

router.delete("/:id", sellCarController.deleteSellCarUser);

module.exports = router;

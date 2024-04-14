const BuyCar = require("../models/productModel");

exports.allBuyCarUsers = async (req, res) => {
  try {
    const allBuyCarsUsers = await BuyCar.find();
    res.json(allBuyCarsUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


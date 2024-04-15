const BuyCar = require("../models/BuyModel.js");

exports.allBuyCarUsers = async (req, res) => {
  try {
    const allBuyCarsUsers = await BuyCar.find();
    res.json(allBuyCarsUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addBuyCarUser = async (req, res) => {
  console.log(req.body);
  try {
    const buyCarUser = new BuyCar({
      ...req.body,
    });
    await buyCarUser.save();
    res.json({ message: "User added successfully", user: buyCarUser });
  } catch (error) {
    console.error("Failed to add user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

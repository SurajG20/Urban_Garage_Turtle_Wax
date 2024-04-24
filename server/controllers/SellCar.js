const SellCar = require("../models/Sell.js");

exports.allSellCarUsers = async (req, res) => {
  try {
    const allBuyCarsUsers = await SellCar.find();

    res.json(allBuyCarsUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addSellCarUser = async (req, res) => {
 
  try {
    const buyCarUser = new SellCar({
      ...req.body,
    });
    await buyCarUser.save();
    res.json({ message: "User added successfully", user: buyCarUser });
  } catch (error) {
    console.error("Failed to add user:", error);
    res.status(500).json({ error: "Server error" });
  }
};


exports.deleteSellCarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SellCar.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({ error: "Server error" });
  }
};
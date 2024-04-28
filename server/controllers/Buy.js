const BuyCar = require("../models/Buy.js");

exports.allBuyCarUsers = async (req, res) => {
  try {
    const allBuyCarsUsers = await BuyCar.find();
    res.json(allBuyCarsUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addBuyCarUser = async (req, res) => {
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

// In controllers/Buy.js

exports.deleteBuyCarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await BuyCar.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const sellCar = require("../model/sellModel");

exports.allSellCarUsers = async (req, res) => {
  try {
    const allBuyCarsUsers = await sellCar.find();
    console.log(allBuyCarsUsers);
    res.json(allBuyCarsUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addSellCarUser = async (req, res) => {
  console.log(req.body);
  try {
    const buyCarUser = new sellCar({
      ...req.body,
    });
    await buyCarUser.save();
    res.json({ message: "User added successfully", user: buyCarUser });
  } catch (error) {
    console.error("Failed to add user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

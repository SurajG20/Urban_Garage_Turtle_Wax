const Service = require("../models/Service.js");

exports.allServiceUsers = async (req, res) => {
  try {
    const allServiceUsers = await Service.find();
    res.json(allServiceUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addServiceUser = async (req, res) => {
  try {
    const serviceUser = new Service(req.body);
    await serviceUser.save();
    res.json({ message: "User added successfully", user: serviceUser });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

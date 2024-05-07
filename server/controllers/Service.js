const Service = require("../models/Service.js");

exports.allServiceUsers = async (req, res) => {
  try {
    const allServiceUsers = await Service.find();
    res.json(allServiceUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// Add Server File 
exports.addServiceUser = async (req, res) => {
  try {
    const serviceUser = new Service(req.body);
    await serviceUser.save();
    res.json({ message: "User added successfully", user: serviceUser });
  } catch (error) {
    console.error("Failed to add service user:", error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

exports.deleteServiceUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Service.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Service user not found" });
    }
    res.json({ message: "Service user deleted successfully" });
  } catch (error) {
    console.error("Failed to delete service user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

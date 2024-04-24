const ContactForm = require("../models/Contact.js");

exports.allcontactUsers = async (req, res) => {
  try {
    const allcontactUsers = await ContactForm.find();
    res.json(allcontactUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addContactFormUser = async (req, res) => {
  console.log(req.body);
  try {
    const addContactFormUser = new ContactForm({
      ...req.body,
    });
    await addContactFormUser.save();
    res.json({ message: "User added successfully", ContactUsers: addContactFormUser });
  } catch (error) {
    console.error("Failed to add user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteContactFormUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await ContactForm.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

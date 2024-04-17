const ContactForm = require("../models/contactUsModel.js");

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
    const addContactFormUser = new BuyCar({
      ...req.body,
    });
    await addContactFormUser.save();
    res.json({ message: "User added successfully", user: buyCarUser });
  } catch (error) {
    console.error("Failed to add user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

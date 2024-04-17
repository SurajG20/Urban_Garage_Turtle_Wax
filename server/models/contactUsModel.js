const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  query: { type: String, required: true },
  message: { type: String, required: true },
 
});

const ContactForm = mongoose.model("BuyCar", contactusSchema);
module.exports = ContactForm;

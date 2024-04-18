const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  queryType: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactForm = mongoose.model("contactForm", contactusSchema);
module.exports = ContactForm;

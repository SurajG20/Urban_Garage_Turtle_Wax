const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String},
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  queryType: { type: String},
  message: { type: String, required: true },
});

const ContactForm = mongoose.model("contacts", contactSchema);
module.exports = ContactForm;

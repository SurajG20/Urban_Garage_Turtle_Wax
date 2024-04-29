const mongoose = require("mongoose");

const productCustomerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  name: { type: String, required: true },
  modelNumber: { type: String, required: true },
  price: { type: String, required: true },
});

const ProductCustomer = mongoose.model(
  "ProductCustomer",
  productCustomerSchema
);
module.exports = ProductCustomer;

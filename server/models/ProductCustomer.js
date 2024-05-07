const mongoose = require("mongoose");

const productCustomerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  name: { type: String},
  modelNumber: { type: String},
  price: { type: String},
});

const ProductCustomer = mongoose.model(
  "ProductCustomer",
  productCustomerSchema
);
module.exports = ProductCustomer;

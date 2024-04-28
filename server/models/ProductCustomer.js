const mongoose = require("mongoose");

const productCustomerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  productName: { type: String, required: true },
  productModel: { type: String, required: true },
  productPrice: { type: String, required: true },
 
});

const ProductCustomer = mongoose.model(
  "ProductCustomer",
  productCustomerSchema
);
module.exports = ProductCustomer;

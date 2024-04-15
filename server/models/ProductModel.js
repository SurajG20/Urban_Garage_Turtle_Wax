const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  modelyear: { type: String, required: true },
  owner: { type: String, required: true },
  reg: { type: String, required: true },
  kms: { type: String, required: true },
  fuel: { type: String, required: true },
  colour: { type: String, required: true },
  insurance: { type: String, required: true },
  img: [{ type: String, required: true }],

});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
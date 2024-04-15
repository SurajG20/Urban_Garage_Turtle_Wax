const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String},
  price: { type: String},
  make: { type: String},
  model: { type: String},
  modelyear: { type: String},
  owner: { type: String},
  reg: { type: String},
  kms: { type: String},
  fuel: { type: String},
  colour: { type: String},
  insurance: { type: String},
  img: [{ type: String}],

});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
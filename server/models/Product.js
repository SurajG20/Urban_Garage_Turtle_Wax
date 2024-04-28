const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  model: { type: String, required: true },
  desc: { type: String, required: true },
  img: [{ type: String, required: true }],
  thumbnail: { type: String },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
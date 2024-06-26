const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  modelNumber: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  img: [{ type: String, required: true }],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

const BuyCar = require("../models/productModel");

exports.listAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    // Create a new product instance and save it to the database
    const product = new Product({
      ...req.body,
      img: req.file ? req.file.path : "default.jpg", // Include the file path if uploaded
    });
    await product.save();
    res.json({ message: "Product added successfully", product: product });
  } catch (error) {
    console.error("Failed to add product:", error);
    res.status(500).json({ error: "Server error" });
  }
};

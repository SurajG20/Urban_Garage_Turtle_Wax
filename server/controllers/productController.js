const Product = require("../models/productModel");

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
    const product = new Product({
      ...req.body,
      img: req.file.path, // Image URL from Cloudinary
    });
    await product.save();
    res.json({ message: "Product added successfully", product: product });
  } catch (error) {
    console.error("Failed to add product:", error);
    res.status(500).json({ error: "Server error" });
  }
};


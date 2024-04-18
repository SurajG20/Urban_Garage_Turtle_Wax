const Product = require("../models/Product");

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
    if (!req.files || req.files.length === 0) {
      throw new Error("No files uploaded.");
    }

    const urls = req.files.map((file) => file.path);

    const product = new Product({
      ...req.body,
      img: urls,
    });
    await product.save();
    res.json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Failed to add product:", error);
    res.status(500).json({ error: "Server error" });
  }
};



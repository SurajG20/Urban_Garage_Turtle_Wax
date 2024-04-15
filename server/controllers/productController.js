const Product = require("../models/productModel");

exports.listAllProducts = async (req, res) => {
  console.log("listAllProducts", req.body);
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addProduct = async (req, res) => {
  console.log("addProduct", req.body);
  try {
    const urls = [];
    req.files.forEach((file) => {
      urls.push(file.path); // Assuming multer-cloudinary automatically handles uploads
    });

    const product = new Product({
      ...req.body,
      img: urls, // Store all image URLs in the 'img' field
    });

    await product.save();
    res.json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Failed to add product:", error);
    res.status(500).json({ error: "Server error" });
  }
};



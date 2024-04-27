const Product = require("../models/Product");

exports.listAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Server error" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { files, body } = req;
    if (!files || !files.thumbnail || !files.images) {
      return res
        .status(400)
        .json({ message: "Thumbnail and images are required" });
    }

    const thumbnailUrl = files.thumbnail[0].path;
    const imageUrls = files.images.map((file) => file.path);

    const product = new Product({
      ...body,
      img: imageUrls,
      thumbnail: thumbnailUrl,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Failed to add product:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

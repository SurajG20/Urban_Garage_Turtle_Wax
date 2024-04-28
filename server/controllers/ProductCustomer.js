const ProductCustomer = require("../models/ProductCustomer.js");

exports.allProductCustomers = async (req, res) => {
  try {
    const allProductCustomer = await ProductCustomer.find();
    res.json(allProductCustomer);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addProductCustomer = async (req, res) => {
//   console.log(req.body);
  try {
    const productCustomer = new ProductCustomer({
      ...req.body,
    });
    await productCustomer.save();
    res.json({ message: "User added successfully", Customer: productCustomer });
  } catch (error) {
    console.error("Failed to add user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// In controllers/Buy.js

exports.deleteProductCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await ProductCustomer.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "Customers not found" });
    }

    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

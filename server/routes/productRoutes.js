const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

const multer = require("multer");
const path = require("path");

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Route to get all products
router.get("/", productController.listAllProducts);

// Route to add a new product
router.post(
  "/addProduct",
  upload.single("productImage"),
  productController.addProduct
);
module.exports = router;

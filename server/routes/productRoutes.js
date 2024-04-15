// File: routes/productRoutes.js
const express = require("express");
const router = express.Router();
const parser = require("../cloudinaryConfig");
const {
  addProduct,
  listAllProducts,
} = require("../controllers/productController");

router.post("/add-product", parser.array("images"), addProduct);
router.get("/", listAllProducts);

module.exports = router;

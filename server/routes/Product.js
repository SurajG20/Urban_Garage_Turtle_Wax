// File: routes/productRoutes.js
const express = require("express");
const router = express.Router();
const parser = require("../cloudinaryConfig.js");

const product =require("../controllers/Product.js")

router.post(
  "/",
  parser.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 8 },
  ]),
  product.addProduct
);

router.get("/", product.listAllProducts);
router.delete("/:id", product.deleteProduct);

module.exports = router;

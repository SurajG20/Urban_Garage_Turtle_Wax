// File: routes/productRoutes.js
const express = require("express");
const router = express.Router();
const parser = require("../cloudinaryConfig.js");

const product =require("../controllers/Product.js")

router.post("/", parser.array("images"), addProduct);
router.get("/", listAllProducts);

module.exports = router;

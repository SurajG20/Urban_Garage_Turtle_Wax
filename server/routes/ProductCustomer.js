const express = require("express");
const router = express.Router();
const productCustomer= require("../controllers/ProductCustomer.js");

// Route to get all products
router.get("/", productCustomer.allProductCustomers);

router.post("/", productCustomer.addProductCustomer);

router.delete("/:id", productCustomer.deleteProductCustomer);

module.exports = router;

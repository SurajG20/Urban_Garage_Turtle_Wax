// File: routes/productRoutes.js
const express = require("express");
const router = express.Router();
const parser = require("../cloudinaryConfig.js");

const car = require("../controllers/Car.js");

router.post(
  "/",
  parser.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 8 },
  ]),
  car.addCar
);

router.get("/", car.listAllCars);
router.delete("/:id", car.deleteCar);

module.exports = router;

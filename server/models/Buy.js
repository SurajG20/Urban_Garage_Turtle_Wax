const mongoose = require("mongoose");

const buyCarSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  carBrand: { type: String, required: true },
  modelYear: { type: String, required: true },
  fuelType: { type: String, required: true },
  budget: { type: String, required: true },
});

const BuyCar = mongoose.model("BuyCar", buyCarSchema);
module.exports = BuyCar;

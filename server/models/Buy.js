const mongoose = require("mongoose");

const buyCarSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  carBrand: { type: String},
  modelYear: { type: String},
  fuelType: { type: String},
  budget: { type: String},
});

const BuyCar = mongoose.model("BuyCar", buyCarSchema);
module.exports = BuyCar;

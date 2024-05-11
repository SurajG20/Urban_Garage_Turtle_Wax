const mongoose = require("mongoose");

const sellCarSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  modelYear: { type: String },
  ownerType: { type: String },
  kilometersDriven: { type: String },
  carName: { type: String },
  fuelType: { type: String },
  regNumber: { type: String },
  // address: { type: String},
});

const SellCar = mongoose.model("SellCar", sellCarSchema);
module.exports = SellCar;

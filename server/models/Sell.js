const mongoose = require("mongoose");

const sellCarSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  modelYear: { type: String, required: true },
  ownerType: { type: String, required: true },
  kilometersDriven: { type: String, required: true },
  carName: { type: String, required: true },
  fuelType: { type: String, required: true },
  regCity: { type: String, required: true },
  address: { type: String, required: true },
});

const SellCar = mongoose.model("SellCar", sellCarSchema);
module.exports = SellCar;

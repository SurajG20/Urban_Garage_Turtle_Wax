const mongoose = require("mongoose");

const sellCarSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNmber: { type: String, required: true },
  ownerType: { type: String, required: true },
  modelYear: { type: String, required: true },
  carBrand: { type: String, required: true },
  fuelType: { type: String, required: true },
  regCity: { type: String, required: true },
  address: { type: String, required: true },
});

const sellCar = mongoose.model("BuyCar", sellCarSchema);
module.exports = sellCar;

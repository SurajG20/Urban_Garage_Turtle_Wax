const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  carName: { type: String, required: true },
  carBrand: { type: String, required: true },
  cityName: { type: String, required: true },
  stateName: { type: String, required: true },
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;

const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  carName: { type: String },
  carBrand: { type: String },
  cityName: { type: String },
  stateName: { type: String },
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;

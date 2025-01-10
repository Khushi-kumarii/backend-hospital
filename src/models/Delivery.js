const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true }, 
  deliveryDate: { type: Date, required: true },
  status: { type: String, default: "Pending" }, 
});

module.exports = mongoose.model("Delivery", deliverySchema);

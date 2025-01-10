const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  diseases: { type: [String] }, 
  allergies: { type: [String] }, 
  roomNumber: { type: String, required: true },
  bedNumber: { type: String, required: true },
  floorNumber: { type: String, required: true },
  contactInfo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  dietChart: {
    morning: { type: String }, // Morning diet
    evening: { type: String }, // Evening diet
    night: { type: String }, // Night diet
    specialInstructions: { type: String }, 
  },
  condition: { type: String, required: true }, 
  dietChartReference: { type: mongoose.Schema.Types.ObjectId, ref: "DietChart" },
  admissionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", patientSchema);

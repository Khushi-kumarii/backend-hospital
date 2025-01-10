const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true }, 
  mealPlan: [
    {
      day: { type: String, required: true }, 
      meals: [{ type: String, required: true }], 
    },
  ],
});

module.exports = mongoose.model("DietChart", dietChartSchema);

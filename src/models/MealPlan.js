const mongoose = require("mongoose");

const mealPlanSchema = new mongoose.Schema({
  mealName: {
    type: String,
    required: true,
  },
  mealType: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  prepInstructions: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MealPlan = mongoose.model("MealPlan", mealPlanSchema);

module.exports = MealPlan;

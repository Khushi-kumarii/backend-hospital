const MealPlan = require("../models/MealPlan");

const createMealPlan = async (req, res) => {
  try {
    const { mealName, mealType, ingredients, prepInstructions } = req.body;

    // Validate input data
    if (!mealName || !mealType || !ingredients || !prepInstructions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new meal plan entry
    const newMealPlan = new MealPlan({
      mealName,
      mealType,
      ingredients,
      prepInstructions,
      createdAt: new Date(),
    });

    await newMealPlan.save();

    res.status(201).json({ message: "Meal Plan created successfully", newMealPlan });
  } catch (error) {
    console.error("Error creating meal plan:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { createMealPlan };

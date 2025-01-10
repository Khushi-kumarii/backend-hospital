const express = require("express");
const router = express.Router();
const { createMealPlan } = require("../controllers/mealPlanController");

router.post("/", createMealPlan);

module.exports = router;

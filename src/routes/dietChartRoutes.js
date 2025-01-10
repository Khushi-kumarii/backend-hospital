const express = require("express");
const DietChart = require("../models/DietChart");

const router = express.Router();

// Get all diet charts
router.get("/", async (req, res) => {
  try {
    const dietCharts = await DietChart.find().populate("patient");
    res.json(dietCharts);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Create new diet chart
router.post("/", async (req, res) => {
  try {
    const newDietChart = new DietChart(req.body);
    await newDietChart.save();
    res.status(201).json(newDietChart);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

module.exports = router;

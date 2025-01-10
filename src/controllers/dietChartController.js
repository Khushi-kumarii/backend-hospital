const DietChart = require("../models/DietChart");

const getDietCharts = async (req, res) => {
  try {
    const dietCharts = await DietChart.find();
    res.json(dietCharts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addDietChart = async (req, res) => {
  const dietChart = new DietChart(req.body);
  try {
    const newDietChart = await dietChart.save();
    res.status(201).json(newDietChart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateDietChart = async (req, res) => {
  try {
    const dietChart = await DietChart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(dietChart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteDietChart = async (req, res) => {
  try {
    const dietChart = await DietChart.findByIdAndDelete(req.params.id);
    res.json({ message: "Diet chart deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getDietCharts, addDietChart, updateDietChart, deleteDietChart };

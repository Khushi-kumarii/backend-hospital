const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().populate("patient");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Create a new task
router.post("/", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

module.exports = router;

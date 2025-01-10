const express = require("express");
const Delivery = require("../models/Delivery");

const router = express.Router();

// Get all deliveries
router.get("/", async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate("patient");
    res.json(deliveries);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Create a new delivery
router.post("/", async (req, res) => {
  try {
    const newDelivery = new Delivery(req.body);
    await newDelivery.save();
    res.status(201).json(newDelivery);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

module.exports = router;

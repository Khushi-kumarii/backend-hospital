const express = require("express");
const Patient = require("../models/Patient");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, age, gender, condition } = req.body;

    if (!name || !age || !gender || !condition) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newPatient = new Patient({ name, age, gender, condition });
    await newPatient.save();

    res.status(201).json(newPatient); 
  } catch (error) {
    console.error("Error while adding patient:", error); 
    res.status(500).json({ message: "Server error while adding patient" }); 
  }
});

module.exports = router;

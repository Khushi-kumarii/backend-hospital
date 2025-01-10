const Patient = require("../models/Patient");

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPatient = async (req, res) => {
  const patient = new Patient(req.body);
  try {
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getPatients, addPatient, updatePatient, deletePatient };

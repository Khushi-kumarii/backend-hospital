const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  assignedTo: { type: String, required: true }, 
  status: { type: String, default: "Assigned" }, 
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true }, 
  taskDate: { type: Date, required: true },
});

module.exports = mongoose.model("Task", taskSchema);

const Delivery = require("../models/Delivery");

const markDeliveryComplete = async (req, res) => {
  try {
    const delivery = await Delivery.findByIdAndUpdate(req.params.deliveryId, { status: "Completed" }, { new: true });
    res.json(delivery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { markDeliveryComplete, getDeliveries };

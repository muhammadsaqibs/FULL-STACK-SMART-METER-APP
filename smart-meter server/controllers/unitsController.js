const Unit = require('../models/Unit');

// @desc Add new units
exports.addUnits = async (req, res) => {
  try {
    const { meterNumber, cnic, unitsUsed } = req.body;
    const newUnit = new Unit({ meterNumber, cnic, unitsUsed });
    await newUnit.save();
    res.status(201).json(newUnit);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get units for a user
exports.getUnitsByMeter = async (req, res) => {
  try {
    const { meterNumber } = req.params;
    const records = await Unit.find({ meterNumber }).sort({ dateRecorded: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

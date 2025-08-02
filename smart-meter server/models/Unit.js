const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
  meterNumber: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  unitsUsed: {
    type: Number,
    required: true,
  },
  dateRecorded: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Unit', UnitSchema);

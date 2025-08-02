const express = require('express');
const router = express.Router();
const { addUnits, getUnitsByMeter } = require('../controllers/unitsController');

router.post('/add', addUnits);
router.get('/:meterNumber', getUnitsByMeter);

module.exports = router;

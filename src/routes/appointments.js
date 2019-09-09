const express = require('express');
const router = express.Router();

// Require controller modules.
const appointment_controller = require('../controllers/appointmentController');

// GET Appointment list for given Practitioner id, between date range
router.get('/search', appointment_controller.search);

module.exports = router;

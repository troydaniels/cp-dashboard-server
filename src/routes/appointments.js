const express = require('express');
const router = express.Router();

// Require controller modules.
const appointment_controller = require('../controllers/appointmentController');

// Retrieve Appointment list for a given practitioner_id, between start_date and end_date
router.post('/', appointment_controller.index);

module.exports = router;

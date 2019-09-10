const express = require('express');
const router = express.Router();

// Require controller modules.
const appointment_controller = require('../controllers/appointmentController');

// GET Appointment list for given practitioner_id
router.get('/', appointment_controller.index);

module.exports = router;

const express = require('express');
const router = express.Router();

// Require controller modules.
const practitioner_controller = require('../controllers/practitionerController');

// GET Practitioners list.
router.get('/', practitioner_controller.index);

module.exports = router;

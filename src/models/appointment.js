const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        id: Number,
        date: Date,
        client_name: String,
        appointment_type: String,
        duration: Number,
        revenue: Number,
        cost: Number,
        practitioner_id: Number
    },
);

module.exports = mongoose.model('Appointment', appointmentSchema, 'appointments');

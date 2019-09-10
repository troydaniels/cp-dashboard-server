const Appointment = require('../models/appointment');

// GET Appointment list for a given practitioner_id
exports.index = async (req, res) => {
    const { practitioner_id } = req.body;
    const appointments = await Appointment.find({practitioner_id}).exec();
    res.send(appointments);
};

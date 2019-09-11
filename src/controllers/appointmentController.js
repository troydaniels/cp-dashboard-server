const Appointment = require('../models/appointment');

// Retrieve Appointment list for a given practitioner_id, between start_date and end_date
exports.index = async (req, res) => {
    const { practitioner_id, start_date = new Date(0), end_date = new Date() } = req.body;
    // Mongoose doesn't like the $gte, $lte date filtering, likely because of it's format in the original JSON
    const appointments = await Appointment.find({practitioner_id: practitioner_id}).exec();

    const filteredAppointments = [];
    appointments.forEach(appointment => {
        const { date } = appointment;

        if(date >= new Date(start_date) && date <= new Date(end_date)) {
            filteredAppointments.push(appointment);
        }
    });

    res.send(filteredAppointments);
};

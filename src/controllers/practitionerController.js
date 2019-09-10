const Practitioner = require('../models/practitioner');

// GET Practitioner list
exports.index = async (req, res) => {
    const practitioners = await Practitioner.find().exec();
    res.send(practitioners);
};

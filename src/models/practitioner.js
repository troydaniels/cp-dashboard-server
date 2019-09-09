const mongoose = require("mongoose");

const practitionerSchema = new mongoose.Schema({
    "_id": mongoose.Schema.ObjectId,
    "id": Number,
    "name": String
});

module.exports = mongoose.model('Practitioner', practitionerSchema);

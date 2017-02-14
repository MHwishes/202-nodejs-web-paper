const mongoose = require('mongoose');

const homeworkSchema = mongoose.Schema({
    makerId: String
});

module.exports = mongoose.model('Homework', homeworkSchema);
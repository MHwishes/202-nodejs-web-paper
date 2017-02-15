const mongoose = require('mongoose');

const paperSchema = mongoose.Schema({
    makerId: String
});

module.exports = mongoose.model('Paper', paperSchema);
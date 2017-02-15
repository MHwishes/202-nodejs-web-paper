const mongoose = require('mongoose');

const paperShema = mongoose.Schema({
    makerId: String
});

module.exports = mongoose.model('Paper', paperShema);
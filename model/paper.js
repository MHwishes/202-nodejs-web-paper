const mongoose = require('mongoose');

const paperShema = mongoose.Schema({
    paperId: String,
    makerId: String
});

module.exports = mongoose.model('Paper', paperShema);
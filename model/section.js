const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
    type: String,
    homeworks: [{
        homework: {
            type: mongoose.Schema.ObjectId,
            ref: "Homework"
        }
    }],
    section: {
        type: mongoose.Schema.ObjectId,
        ref: "Paper"
    }
});

module.exports = mongoose.model("Section", sectionSchema);
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    registerationNumber: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        default: "A"
    },
    subjects: [String]
});

const student = mongoose.model('student', studentSchema);

module.exports = student;
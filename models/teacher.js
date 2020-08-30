const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
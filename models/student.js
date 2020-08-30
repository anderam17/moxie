const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    homeroomTeacher: {
        type: String,
        required: true
    },
    detentionStatus: {
        type: Boolean,
        required: true
    },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
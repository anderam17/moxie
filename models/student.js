const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    homeroom_teacher: {
        type: String,
        required: true
    },
    detention_status: {
        type: Boolean,
        required: true
    },
    teacherId: {
        type: String,
        required: true
    }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
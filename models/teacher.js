const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
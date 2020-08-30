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
    //! double check that's how you do it
    // teacher: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Teacher',
    //     required: true
    // },
    // Mongoose has a feature called 'populate'
    // db.Student.find(...).populate('teacher')
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
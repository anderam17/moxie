const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

//!CHANGE NAME FROM REACTREADINGLIST
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const studentSeed = [
  {
    firstName: "Ashley",
    lastName: "Bernal",
    grade: 8,
    homeroomTeacher: "Anderson",
    detentionStatus: false
  },
  {
    firstName: "Aaliyah",
    lastName: "Kelly",
    grade: 7,
    homeroomTeacher: "Cortes",
    detentionStatus: false
  },
  {
    firstName: "Celine",
    lastName: "Olmos",
    grade: 6,
    homeroomTeacher: "Lytle",
    detentionStatus: false
  },
];

const teacherSeed = [
    {
      firstName: "Allana",
      lastName: "Anderson",
      subject: "Math",
      students: [],
    },
    {
        firstName: "Maia",
        lastName: "Holmes",
        subject: "Science",
        students: [],
      },
      {
        firstName: "Anthony",
        lastName: "Cortes",
        subject: "History",
        students: [],
      },
      {
        firstName: "Darren",
        lastName: "Blackman",
        subject: "Tech",
        students: [],
      },
      {
        firstName: "Sam",
        lastName: "Casanova",
        subject: "Reading",
        students: [],
      },
      {
        firstName: "Marc",
        lastName: "Lytle",
        subject: "Writing",
        students: [],
      },
  ];

db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

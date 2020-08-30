const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

//!CHANGE NAME FROM REACTREADINGLIST
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/schooldb"
);

const studentSeed = [
  {
    first_name: "Ashley",
    last_name: "Bernal",
    grade: 8,
    homeroom_teacher: "Anderson",
    detention_status: false
  },
  {
    first_name: "Aaliyah",
    last_name: "Kelly",
    grade: 7,
    homeroom_teacher: "Cortes",
    detention_status: false
  },
  {
    first_name: "Celine",
    last_name: "Olmos",
    grade: 6,
    homeroom_teacher: "Lytle",
    detention_status: false
  },
];

const teacherSeed = [
    {
      first_name: "Allana",
      last_name: "Anderson",
      subject: "Math",
    },
    {
        first_name: "Maia",
        last_name: "Holmes",
        subject: "Science",

      },
      {
        first_name: "Anthony",
        last_name: "Cortes",
        subject: "History",

      },
      {
        first_name: "Darren",
        last_name: "Blackman",
        subject: "Tech",

      },
      {
        first_name: "Sam",
        last_name: "Casanova",
        subject: "Reading",

      },
      {
        first_name: "Marc",
        last_name: "Lytle",
        subject: "Writing",

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

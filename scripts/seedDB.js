const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/schooldb"
);

const studentSeed = [
  {
    first_name: "Ruhn",
    last_name: "Dannan",
    grade: 6,
    detention_status: false,
    grades: [{math: [10,20,30,40]}, {science: [70, 60, 50, 40]} ,{history: [95, 80, 77, 94]}],
    teacherId: {
      first_name: "Allana",
    last_name: "Anderson",
    subject: "Math",
    students: [],
    },
  },
  {
    first_name: "Bryce",
    last_name: "Quinlan",
    grade: 6,
    detention_status: false,
    grades: [{subject: "math", scores: [10,20,30,40]}, {subject: "science", scores: [70, 60, 50, 40]} ,{subject: "history", scores: [95, 80, 77, 94]}],
    teacherId: {
      first_name: "Allana",
    last_name: "Anderson",
    subject: "Math",
    students: [],
    },
  },
  {
    first_name: "Hunt",
    last_name: "Athalar",
    grade: 7,
    detention_status: false,
    grades: [{subject: "math", scores: [10,20,30,40]}, {subject: "science", scores: [70, 60, 50, 40]} ,{subject: "history", scores: [95, 80, 77, 94]}],
    teacherId: {
      first_name: "Allana",
    last_name: "Anderson",
    subject: "Math",
    students: [],
    },
  },
  {
    first_name: "Danika",
    last_name: "Fendyr",
    grade: 7,
    detention_status: false,
    grades: [{subject: "math", scores: [10,20,30,40]}, {subject: "science", scores: [70, 60, 50, 40]} ,{subject: "history", scores: [95, 80, 77, 94]}],
    teacherId: {
      first_name: "Allana",
    last_name: "Anderson",
    subject: "Math",
    students: [],
    },
  },
  {
    first_name: "Fury",
    last_name: "Axatar",
    grade: 8,
    detention_status: false,
    grades: [{math: [10,20,30,40]}, {science: [70, 60, 50, 40]} ,{history: [95, 80, 77, 94]}],
    teacherId: {
      first_name: "Allana",
    last_name: "Anderson",
    subject: "Math",
    students: [],
    },
  },
  {
    first_name: "Connor",
    last_name: "Holstrom",
    grade: 8,
    detention_status: false,
    grades: [{math: [10,20,30,40]}, {science: [70, 60, 50, 40]} ,{history: [95, 80, 77, 94]}],
    teacherId: {
      first_name: "Allana",
    last_name: "Anderson",
    subject: "Math",
    students: [],
    },
  }
];

const teacherSeed = [
    {
      first_name: "Percy",
    last_name: "Jackson",
    subject: "Math",
    students: [],
    },
    {
        first_name: "Leo",
        last_name: "Valdez",
        subject: "Science",
        students: [],
      },
      {
        first_name: "Annabeth",
        last_name: "Chase",
        subject: "History",
        students: [],
      }
  ];

db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Teacher
  .remove({})
  .then(() => db.Teacher.collection.insertMany(teacherSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

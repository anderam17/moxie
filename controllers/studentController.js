const db = require("../models/index");

module.exports = {
  findAll: (req, res) => {
    db.Student.find(req.query)
      .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  //! How to include teacher line include: [Teacher]
  findOne: (req, res) => {
    db.Student.findOne({ _id: req.params.id })
      .then((student) => {
        res.json(student);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  create: (req, res) => {
    //after created, get _id for stu and push to corr teacher arr
      db.Student.create(req.body)
      .then(({_id}) => db.Teacher.findOneAndUpdate({_id: req.body.teacherId}, { $push: { students: _id } }, { new: true }))
      .then(dbTeacher => {
        res.json(dbTeacher);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteOne: (req, res) => {
      db.Student.deleteOne({ _id: req.params.id })
      .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        res.json(err);
      });
  },
updateOne: (req, res) => {
    db.Student.updateOne({_id: req.params.id}, req.body)
    .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        res.json(err);
      });
}

};


const router = require("express").Router();
const controller = require("../../controllers/teacherController");

router.route("/teachers/:id")
.get(controller.findOne)
.delete(controller.deleteOne)
.put(controller.updateOne);

router.route("/teachers")
.get(controller.findAll)
.post(controller.create);

module.exports = router;

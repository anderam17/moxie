const router = require("express").Router();
const controller = require("../../controllers/studentController");

router.route("/students/:id")
.get(controller.findOne)
.delete(controller.deleteOne)
.put(controller.updateOne);

router.route("/students")
.get(controller.findAll)
.post(controller.create);

module.exports = router;

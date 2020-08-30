const router = require("express").Router();
const controller = require("../../controllers/studentController");
//! NEed to change this mysql to mongoose

router.route("/student")
.get(controller.findAll)
.post(controller.create)

router.route("/student/:id")
.get(controller.findOne)
.put(controller.update)

module.exports = router;

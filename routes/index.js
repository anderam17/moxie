module.exports = function () {}

const path = require("path");
const router = require("express").Router();
const studentApiRoutes = require("./api/student-api-routes");
const teacherApiRoutes = require("./api/teacher-api-routes");

// API Routes
router.use("/api", studentApiRoutes);
router.use("/api", teacherApiRoutes);
 
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
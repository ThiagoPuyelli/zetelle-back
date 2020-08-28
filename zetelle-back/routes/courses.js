const router = require("express").Router();
const ctrl = require("../controllers/courses");
const upload = require("../middlewares/multer");

router.post("/save-course", ctrl.createCourse);
router.get("/find-courses", ctrl.findCourses);
router.get("/find-course/:id", ctrl.findCourse);
router.put("/update-course/:id", ctrl.uploadCourse);
router.delete("/delete-course/:id", ctrl.deleteCourse);

module.exports = router;
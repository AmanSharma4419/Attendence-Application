// All Requires
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");

// Handling The Router For The Student Registration
router.post("/register", studentController.studentRegistration);

// Handling The Router For The Student Login
router.post("/login", studentController.studentLogin);

// Handling The Router For Getting List Of All Students
router.get("/studentList", studentController.studentList);

// Handling The Router For Handling The Attendence
router.put("/attendence/:id", studentController.studentAttendence);

// Handling The Router For The Student Status
router.get("/singlestudent/:id", studentController.studentStatus);

// Exporting The Router
module.exports = router;

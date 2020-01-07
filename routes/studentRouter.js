// All Requires
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");

// Handling The Router For The Student Registration
router.post("/register", studentController.studentRegistration);

// Handling The Router For The Student Login
router.post("/login", studentController.studentLogin);
// Exporting The Router
module.exports = router;

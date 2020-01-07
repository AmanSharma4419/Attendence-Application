// All Requires
const express = require("express");
const router = express.Router();

// Registeration Controller
const studentController = require("../controllers/studentControllers");

// Handling The Router For The Student Registration
router.post("/register", studentController.studentRegistration);

// Exporting The Router
module.exports = router;

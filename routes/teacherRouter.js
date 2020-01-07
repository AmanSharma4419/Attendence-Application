const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherControllers");

router.post("/register", teacherController.teacherRegistration);
router.post("/login", teacherController.teacherLogin);

module.exports = router;

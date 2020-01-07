// Requring The Student Schema
var Student = require("../models/studentSchema");

// Registration Controller
function studentRegistration(req, res, next   ) {
  Student.create(req.body, (err, studentRegistred) => {
    if (err) return next(err);
    res.status(200).json({ student: studentRegistred });
  });
}

// Exporting The Controller
module.exports = { studentRegistration };

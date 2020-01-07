// Requring The Student Schema
var Student = require("../models/studentSchema");
var auth = require("../utils/auth");

// Registration Controller
function studentRegistration(req, res, next) {
  Student.create(req.body, (err, registredStudent) => {
    if (err) return next(err);
    return res.status(200).json({ student: registredStudent });
  });
}

// Login Controller
function studentLogin(req, res, next) {
  const { email, password } = req.body;
  Student.findOne({ email }, (err, loggedInStudent) => {
    if (err) return next(err);
    if (!loggedInStudent) {
      return res
        .status(401)
        .json({ student: "Student Not Found With This Email" });
    }
    if (!loggedInStudent.confirmPassword(password)) {
      return res.status(401).json({ student: "Password Is Not Correct" });
    }
    var token = auth.genToken(email);
    return res.status(200).json({ loggedInStudent, token });
  });
}

// Exporting The Controller
module.exports = { studentRegistration, studentLogin };

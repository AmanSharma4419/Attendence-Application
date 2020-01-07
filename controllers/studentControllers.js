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

// Listing All Students Controller
function studentList(req, res, next) {
  Student.find({}, (err, students) => {
    if (err) return next(err);
    return res.status(200).json({ student: students });
  });
}

// Attendence Controller
function studentAttendence(req, res, next) {
  req.body.Ispresent = true;
  const id = req.params.id;
  Student.findByIdAndUpdate(id, req.body, { new: true }, (err, student) => {
    if (err) return next(err);
    return res.status(200).json({ student: student });
  });
}

// Student Status Controller
function studentStatus(req, res, next) {
  console.log(req.params.id, "id");
  Student.findById(req.params.id, (err, student) => {
    if (err) return next(err);
    if (!student)
      return res
        .status(401)
        .json({ student: "Student Not Found With This Id" });
  });
  return res.status(200).json({ studentstatus: student });
}

// Exporting The Controller
module.exports = {
  studentRegistration,
  studentLogin,
  studentList,
  studentAttendence,
  studentStatus
};

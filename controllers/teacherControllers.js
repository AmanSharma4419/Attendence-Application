const Teacher = require("../models/teacherSchema");
const auth = require("../utils/auth");

function teacherRegistration(req, res, next) {
  Teacher.create(req.body, (err, registeredTeacher) => {
    if (err) return next(err);
    return res.status(200).json({ teacher: registeredTeacher });
  });
}

function teacherLogin(req, res, next) {
  var { email, password } = req.body;
  Teacher.findOne({ email }, (err, loggedInTeacher) => {
    if (err) return next(err);
    if (!loggedInTeacher) {
      return res
        .status(401)
        .json({ teacher: "Teacher Not Found With This Email" });
    }
    if (!loggedInTeacher.confirmPassword(password)) {
      return res.status(401).json({ teacher: "Password Is Not Correct" });
    }
    var token = auth.genToken(email);
    return res.status(200).json({ teacher: loggedInTeacher, token });
  });
}

module.exports = { teacherRegistration, teacherLogin };

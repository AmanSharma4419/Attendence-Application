// Requring The Student And Teacher Schema
var Student = require("../models/studentSchema");
var Teacher = require("../models/teacherSchema");

// Seeding Middlwe-Ware for Student
Student.find({}, (err, students) => {
  if (students.length === 0) {
    var student = {
      name: "AmanSharma",
      email: "sharmaama4419@gmail.com",
      password: "aman1234",
      class: 12,
      Ispresent: "false"
    };
    Student.create(student, (err, Seededstudent) => {
      if (err) return console.log("Error While Seeding");
      return console.log(Seededstudent, " Student Seeded Into Db Sucessfully");
    });
  } else {
    console.log("Student May Also Presented In The Database");
  }
});

// Seeding Middle-ware for Teacher
Teacher.find({}, (err, teachers) => {
  if (teachers.length === 0) {
    var teacher = {
      name: "Aman",
      email: "aman@gmail.com",
      password: "aman12345",
      subject: "Maths"
    };
    Teacher.create(teacher, (err, Seededteacher) => {
      if (err) return console.log("Error While Seedig");
      console.log(Seededteacher, " Teacher Seeded Into db Sucessfully");
    });
  } else {
    console.log("Teacher May Already Presented In The Database");
  }
});

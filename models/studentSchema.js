// All Requires
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Extracting The Schema From The Mongoose
const schema = mongoose.Schema;

// Creating The Schema For Students
const studentSchema = new schema(
  {
    name: {
      type: String,
      minlength: 4,
      required: true
    },
    email: {
      type: String,
      minlength: 5,
      unique: true,
      required: true
    },
    password: {
      type: String,
      minlength: 4,
      required: true
    },
    class: {
      type: Number,
      required: true
    },
    Ispresent: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// Implementing The Pre-save Function To Hash The Password
studentSchema.pre("save", function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

// Comparig The Hash And Plane Password
studentSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Making The Model Of The Schema
const Student = mongoose.model("Student", studentSchema);

// Exporting The Model Of The Schema
module.exports = Student;

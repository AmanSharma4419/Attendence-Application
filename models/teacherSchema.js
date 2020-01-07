const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = mongoose.Schema;

const teacherSchema = new schema(
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
    subject: {
      type: String,
      minlength: 4,
      unique: true,
      required: true
    },
    password: {
      type: String,
      minlength: 4,
      required: true
    }
  },
  { timestamps: true }
);

teacherSchema.pre("save", function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

teacherSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;

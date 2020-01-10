import React from "react";

class RegisterTeacher extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      teacherSubject: ""
    };
  }

  onKeyUp = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleRegister = () => {
    var teacherData = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password,
      subject: this.state.teacherSubject
    };
    fetch("http://localhost:3000/api/v1/teacher/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(teacherData)
    }).then(res => res.json());
    // .then(this.props.history.push("/teacherLogin"));
  };
  render() {
    return (
      <React.Fragment>
        <h1>Teacher Register</h1>
        <input
          type="text"
          placeholder="Enter Name"
          name="username"
          onChange={this.onKeyUp}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={this.onKeyUp}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={this.onKeyUp}
        />
        <input
          type="text"
          placeholder="Enter Subject"
          name="teacherSubject"
          onChange={this.onChange}
        />
        <button onClick={this.handleRegister}>Register</button>
      </React.Fragment>
    );
  }
}

export default RegisterTeacher;

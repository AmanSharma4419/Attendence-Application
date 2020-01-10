import React from "react";
import { withRouter } from "react-router-dom";
class RegisterStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      studentclass: ""
    };
  }

  onKeyUp = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleRegister = () => {
    var studentData = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    fetch("http://localhost:3000/api/v1/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(res => res.json())
      .then(this.props.history.push("/student-login"));
  };
  render() {
    return (
      <React.Fragment>
        <h1>Student Register</h1>
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
          type="number"
          placeholder="Enter Class"
          name="studentclass"
          onChange={this.onChange}
        />
        <button onClick={this.handleRegister}>Register</button>
      </React.Fragment>
    );
  }
}

export default withRouter(RegisterStudent);

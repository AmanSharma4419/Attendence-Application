import React from "react";

class LoginStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  onKeyup = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleLogin = () => {
    var studentData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(studentData);
    fetch("http://localhost:3000/api/v1/student/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(res => res.json())
      .then(loggedInstudent => {
        console.log(loggedInstudent);
        localStorage.setItem("studentId", loggedInstudent.loggedInStudent._id);
      });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Student Login</h1>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={this.onKeyup}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={this.onKeyup}
        />
        <button onClick={this.handleLogin}>Login</button>
      </React.Fragment>
    );
  }
}

export default LoginStudent;

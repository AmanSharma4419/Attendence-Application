import React from "react";

class LoginTeacher extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
      email: this.state.email,
      password: this.state.password
    };
    fetch("http://localhost:3000/api/v1/teacher/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(teacherData)
    })
      .then(res => res.json())
      .then(teacher => {
        console.log(teacher);
      });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Teacher Login</h1>
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
        <button onClick={this.handleRegister}>Login</button>
      </React.Fragment>
    );
  }
}

export default LoginTeacher;

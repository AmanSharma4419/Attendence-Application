import React from "react";

class RegisterStudent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onKeyUp = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <React.Fragment>
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
          name="class"
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default RegisterStudent;

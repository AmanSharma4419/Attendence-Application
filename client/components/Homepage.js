import React from "react";
import { Link } from "react-router-dom";
class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Link to="/student-registeration">
          <button>Student Register</button>
        </Link>
        <Link to="/teacher-registeration">
          <button>Teacher Register</button>
        </Link>
      </div>
    );
  }
}

export default Homepage;

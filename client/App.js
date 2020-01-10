import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import RegisterStudent from "./components/RegisterStudent";
import LoginStudent from "./components/LoginStudent";
import RegisterTeacher from "./components/RegisterTeacher";
import LoginTeacher from "./components/TeacherLogin";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={LoginStudent} />
          <Route path="/LoginTeacher" component={RegisterStudent} />
        </Router>
      </div>
    );
  }
}
export default App;

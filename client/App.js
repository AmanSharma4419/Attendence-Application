import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <React.Fragment>
        <BrowserRouter>
          <LoginStudent />
          <Switch>
            <Route exact path="/login" component={LoginTeacher} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;

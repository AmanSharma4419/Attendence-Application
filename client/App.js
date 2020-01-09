import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterStudent from "./components/RegisterStudent";
import LoginStudent from "./components/LoginStudent";
import RegisterTeacher from "./components/RegisterTeacher";
import LoginTeacher from "./components/TeacherLogin";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
function App() {
  return (
    <React.Fragment>
      <StudentDashboard />
      {/* <TeacherDashboard /> */}
      {/* <LoginTeacher /> */}
      {/* <LoginStudent /> */}
      {/* <RegisterTeacher /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginStudent} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;

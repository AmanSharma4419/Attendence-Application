import React from "react";
import AttendenceBtn from "./AttendenceButton";
class TeacherDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      allStudents: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/student/studentList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(studentList => {
        console.log(studentList.student, "in the res");
        this.setState({ ...this.state, allStudents: studentList.student });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>TeacherDashboard</h1>
          {this.state.allStudents &&
            this.state.allStudents.map((stud, i) => {
              return (
                <div>
                  <span key={i}>{stud.name}</span>
                  <span>
                    <AttendenceBtn studentid={stud._id} />
                  </span>
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherDashboard;

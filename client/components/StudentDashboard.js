import React from "react";

class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      StudentAttendence: ""
    };
  }
  componentDidMount() {
    var id = localStorage.getItem("studentId");
    fetch(`http://localhost:3000/api/v1/student/singlestudent/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(singleStudent => {
        this.setState({
          ...this.state,
          StudentAttendence: singleStudent.studentstatus.Ispresent
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Attendence Status</h1>
        <hr />
        {this.state.StudentAttendence ? <h1>Present</h1> : <h1>Absent</h1>}
      </div>
    );
  }
}

export default StudentDashboard;

import React from "react";

class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      StudentAttendence: ""
    };
  }
  toLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };
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
        <h1>Student Dashboard</h1>
        <h2>Attendence Status</h2>
        <hr />
        {this.state.StudentAttendence ? <h1>Present</h1> : <h1>Absent</h1>}
        <button onClick={this.toLogout}>Logout</button>
      </div>
    );
  }
}

export default StudentDashboard;

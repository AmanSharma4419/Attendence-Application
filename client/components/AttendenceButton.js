import React from "react";

function AttendenceBtn(props) {
  var id = props.studentid;
  var toGiveAttendence = () => {
    fetch(`http://localhost:3000/api/v1/student/attendence/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(alert("Student Present"));
  };
  return <button onClick={toGiveAttendence}>Click</button>;
}

export default AttendenceBtn;

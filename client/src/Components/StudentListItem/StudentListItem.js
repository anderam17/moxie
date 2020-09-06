import React from "react";
// import "./style.css"

function StudentListItem({student: {first_name, last_name, detention_status, teacherId, grade} }) {
    return (
      <>
      <div className="row">
      <div className="col-md-2 employee-info">
    <h4>{first_name} {last_name}</h4>
      </div>
      <div className="col-md-4 employee-info">
    <p>Grade: {grade}</p>
      </div>
      <div className="col-md-4 employee-info">
    <p>Homeroom Teacher: {teacherId.first_name} {teacherId.last_name}</p>
      </div>
      <div className="col-md-2 employee-info">
          <p>Detention: {detention_status ? "Yes" : "No"}</p>
      </div>
      </div>
      </>
    );
  }
  
  export default StudentListItem;
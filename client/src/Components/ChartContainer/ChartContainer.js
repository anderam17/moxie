import React from "react";
import GradeChart from "../GradeChart/GradeChart";
import "./ChartContainer.css"

// * WHEN SEARCH BY STUDENT:
// - For the student, drill to the grades array in their object
// - for each item in the array:
  // - I need the subject and the grades
// ? WHEN SEARCH BY TEACHER: --> MAy save for later
//  - For the TEACHER, drill to the student array in their object
//  - for each studentID, find that student and
  // - for each item in the array:
    // - I need the subject and the grades


function ChartContainer() {
  return (
    <>
      <div className="col-md-9 lead">
        <h3>Select Student to See Grades</h3>
            <GradeChart data={[56, 75, 58, 91]} header={"MATH"}/>
      </div>
    </>
  );
}

export default ChartContainer;

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

function ChartContainer({students}) {
  return (
    <>
      <div className="col-md-9 lead">
        <h3>Select Student to See Grades</h3>
            {students[0] && students[0].grades.map((classSubject) =>{
              return (
                <GradeChart data={classSubject.scores} header={classSubject.subject} key={classSubject.subject}/>
              )
            })
            }
            {/* <GradeChart data={[56, 75, 58, 91]} header={"MATH"}/> */}

            {console.log(`In Chart Container: `)} 
            {console.log(students)}
            {students[0] ? console.log(students[0].grades): console.log("Nothing yet")}
            {students[0] ? console.log(students[0].grades[0].subject) : console.log("No subject")}
            {students[0] ? console.log(students[0].grades[0].scores) : console.log("No scores")}


            {/* students[0].grades.find(subject => Object.keys(subject) === ['math']); */}
      </div>
    </>
  );
}

export default ChartContainer;

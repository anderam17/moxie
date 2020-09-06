import React from "react";
import GradeChart from "../GradeChart/GradeChart";
import "./ChartContainer.css";


// ? WHEN SEARCH BY TEACHER: --> May save for later: Might be a different container like TeacherChartContainer.
//  - For the TEACHER, drill to the student array in their object
//  - for each studentID, find that student and
  // - for each item in the array:
    // - I need the subject and the grades

function ChartContainer({students, handleFormSubmit, handleInputChange, newGrade, setNewGrade}) {

  return (
    <>
      <div className="col-md-9 lead">
      {students[0] ? <h3>{students[0].first_name} {students[0].last_name}</h3> : <h3>Select Student to See Grades</h3>}
            {students[0] && students[0].grades.map((classSubject) =>{
              return (
                <GradeChart data={classSubject.scores} header={classSubject.subject} key={classSubject.subject} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} newGrade={newGrade} setNewGrade={setNewGrade}/>
              )
            })
            }

      </div>
    </>
  );
}

export default ChartContainer;

import React from "react";
import StudentCard from "../StudentCard/StudentCard";
import ToggleButton from"../ToggleButton/ToggleButton";
import StudentListItem from "../StudentListItem/StudentListItem";
import "./CardContainer.css"

function CardContainer({
  students,
  onClickDelete,
  makeTeacherList,
  searchTerms,
  fetchStudents
}) {

  return (
    <>
      {/* <div className="col-md-9 lead" id="card-container-noflex"> */}
      <div className="col-md-9 lead" id="card-container-flex">
        <div id="card-container-header">
      {students[0] ? <h3>Students:</h3> : <h3>Select Criteria to Begin Your Search.</h3>}
      {/* <ToggleButton /> */}
        </div>
        <div id="card-container-body">
        {students[0] && students.map((student) => {
          return (
            <StudentListItem student={student} fetchStudents={fetchStudents} searchTerms={searchTerms} makeTeacherList={makeTeacherList} onClickDelete={onClickDelete}/>
            // <StudentCard
            //   key={student._id}
            //   student={student}
            //   onClickDelete={onClickDelete}
            //   makeTeacherList={makeTeacherList}
            //   searchTerms={searchTerms}
            //   fetchStudents={fetchStudents}
            // />
          );
        })}
        </div>
      </div>
    </>
  );
}

export default CardContainer;

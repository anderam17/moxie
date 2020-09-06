import React from "react";
import StudentCard from "../StudentCard/StudentCard";
import ToggleButton from"../ToggleButton/ToggleButton";
import StudentListItem from "../StudentListItem/StudentListItem";

function CardContainer({
  students,
  onClickDelete,
  makeTeacherList,
  searchTerms,
  fetchStudents
}) {

  return (
    <>
      <div className="col-md-9 lead" id="studentCard">
      {students[0] ? <h3>Students:</h3> : <h3>Select Criteria to Begin Your Search.</h3>}
      {/* <ToggleButton /> */}

        {students[0] && students.map((student) => {
          return (
            // <StudentListItem student={student}/>
            <StudentCard
              key={student._id}
              student={student}
              onClickDelete={onClickDelete}
              makeTeacherList={makeTeacherList}
              searchTerms={searchTerms}
              fetchStudents={fetchStudents}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardContainer;

import React from "react";
import StudentCard from "../StudentCard/StudentCard";

function CardContainer({
  stuCards,
  onClickDelete,
  makeTeacherList,
  searchTerms,
  fetchStudents
}) {

  return (
    <>
      <div className="col-md-9 lead" id="studentCard">
        <h3>Select Criteria to Begin Your Search.</h3>
        {stuCards[0] && stuCards.map((student) => {
          return (
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

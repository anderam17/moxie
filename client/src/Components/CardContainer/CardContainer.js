import React, { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
import ToggleButton from "../ToggleButton/ToggleButton";
import StudentListItem from "../StudentListItem/StudentListItem";
import "./CardContainer.css";

function CardContainer({
  students,
  onClickDelete,
  makeTeacherList,
  searchTerms,
  fetchStudents,
}) {
  const [cardView, setCardView] = useState(true);

  return (
    <>
      <div className="col-md-9 lead" id="card-container">
        <div id="card-container-header">
          {students[0] ? (
            <h3>Students:</h3>
          ) : (
            <h3>Select Criteria to Begin Your Search</h3>
          )}
          <ToggleButton
            cardView={cardView}
            setCardView={setCardView}
          />
        </div>
        <div id="card-container-body">
          {students[0] &&
            students.map((student) => {
              return (
                cardView ? 
                  <StudentCard
                  key={student._id}
                  student={student}
                  onClickDelete={onClickDelete}
                  makeTeacherList={makeTeacherList}
                  searchTerms={searchTerms}
                  fetchStudents={fetchStudents}
                  />
                  :
                  <StudentListItem
                    student={student}
                    fetchStudents={fetchStudents}
                    searchTerms={searchTerms}
                    makeTeacherList={makeTeacherList}
                    onClickDelete={onClickDelete}
                  />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default CardContainer;

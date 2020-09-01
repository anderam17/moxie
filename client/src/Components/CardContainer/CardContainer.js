import React from "react";
import StudentCard from "../StudentCard/StudentCard"

function CardContainer({stuCards}) {
  return (
    <>
      <div className="col-md-9 lead" id="studentCard">
        <h3>Select Criteria to Begin Your Search.</h3>
        {stuCards.map((student) => {
          return (
            <StudentCard
            key={student._id}
            id={student._id}
            first_name={student.first_name}
              last_name={student.last_name}
              grade={student.grade}
              detention={student.detention_status ? "Yes" : "No"}
              onClick={() => {}}
            />
          )
        })}
      </div>
    </>
  );
}

export default CardContainer;
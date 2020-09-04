import React, { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
// import StudentModal from "../StudentModal/StudentModal";
// import API from "../../utils/api";

function CardContainer({
  stuCards,
  onClickDelete
}) {

  return (
    <>
      <div className="col-md-9 lead" id="studentCard">
        <h3>Select Criteria to Begin Your Search.</h3>
        {stuCards.map((student) => {
          return (
            <StudentCard
              student={student}
              onClickDelete={onClickDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardContainer;

import React, { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
// import StudentModal from "../StudentModal/StudentModal";
// import API from "../../utils/api";

function CardContainer({
  stuCards,
  onClickDelete,
  makeTeacherList
}) {
const [modalStatus, setModalStatus] = useState({
  open: false
});

const openModal = () => setModalStatus({open: true});
const closeModal = () => setModalStatus({open: false});

  return (
    <>
      <div className="col-md-9 lead" id="studentCard">
        <h3>Select Criteria to Begin Your Search.</h3>
        {stuCards.map((student) => {
          return (
            <StudentCard
              key={student._id}
              student={student}
              onClickDelete={onClickDelete}
              makeTeacherList={makeTeacherList}
              openModal={() => openModal()}
              closeModal={() => closeModal()}
              modalStatus={modalStatus}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardContainer;

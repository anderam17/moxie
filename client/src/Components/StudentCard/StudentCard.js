import React, { useState } from "react";
import API from "../../utils/api";
import StudentModal from "../StudentModal/StudentModal";
import "./StudentCard.css"

function StudentCard({
  student,
  onClickDelete,
  makeTeacherList,
  searchTerms,
  fetchStudents
}) {
  const [modalStatus, setModalStatus] = useState({
    open: false
  });
  
  const openModal = () => setModalStatus({open: true});
  const closeModal = () => setModalStatus({open: false});

  const [detention, setDetention] = useState({
    status: student.detention_status,
  });

  const toggleDetention = (event) => {
    event.preventDefault();
    
    API.updateStudent(student._id, {
      ...student,
      detention_status: !detention.status,
    }).then(() => {
      setDetention({ status: !detention.status });
      fetchStudents(searchTerms.category, searchTerms.value);
    });
  };

  const [stuToUpdate, setStuToUpdate] = useState(student);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStuToUpdate({...stuToUpdate, [name]: value})
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.updateStudent(stuToUpdate._id, stuToUpdate).then((response) => {
      console.log("student Updated");
      fetchStudents(searchTerms.category, searchTerms.value)
      closeModal();
    })
  }

  return (
    <>
    {/* {student.grade === 6 ? className="card mt-3 col-md-4 blue-stu" : student.grade === 7 ? className="card mt-3 col-md-4 green-stu" : className="card mt-3 col-md-4 red-stu"} */}
      <div data-id={student._id} id="this-student-card"  className="card mt-3 col-md-4" >
        <div className={student.grade === 6 ? "card-header text-center blue-stu" : student.grade === 7 ? "card-header text-center green-stu" : "card-header text-center red-stu"}>
          <h5 className="student-name">
            {student.first_name} {student.last_name}
          </h5>
        </div>
        <div className="card-body" id="cardBody">
          <p className="card-text studentGrade">
            Grade:
            <span className="stuGrade">{student.grade} </span>{" "}
          </p>
          <p className="card-text teacher">
            Homeroom Teacher: <br />{" "}
            <span className="hrTeacher">
              {" "}
              {student.teacherId.first_name} {student.teacherId.last_name}
            </span>{" "}
          </p>
          <p className="card-text studentDetention">
            Detention:{" "}
            <span className="hasDetention">
              {" "}
              {detention.status ? "Yes" : "No"}
            </span>{" "}
          </p>
        </div>

        <div className="card-footer mx-auto">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn darkblue"
              data-id={student.id}
              data-toggle="modal"
              onClick={openModal}
              data-target="#updateModal"
              id="edit"
            >
              Edit
            </button>

            <button
              type="button"
              className="btn yellow"
              data-id={student.id}
              data-detention={student.detention_status}
              id="detentionBtn"
              onClick={toggleDetention}
            >
              Detention
            </button>

            <button
              type="button"
              className="btn red"
              id="deleteBtn"
              data-id={student._id}
              onClick={onClickDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <StudentModal
          show={modalStatus.open}
          onClick={() => closeModal()}
          teacherList={makeTeacherList()}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          student={stuToUpdate}
          title="Update Student"
        />

    </>
  );
}

export default StudentCard;

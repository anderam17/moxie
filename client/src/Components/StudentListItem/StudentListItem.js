import React, {useState} from "react";
import API from "../../utils/api";
import StudentModal from "../StudentModal/StudentModal"
import "./StudentListItem.css"

function StudentListItem({student, fetchStudents, searchTerms, makeTeacherList, onClickDelete}) {
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
      <div data-id={student._id} className="mt-3 col-md-12">
      <div className="row">
      <div className="col-md-2 student-info">
    <h4>{student.first_name} {student.last_name}</h4>
      </div>
      <div className="col-md-2 student-info">
    <p>Grade: {student.grade}</p>
      </div>
      <div className="col-md-2 student-info">
    <p>Homeroom Teacher: {student.teacherId.first_name} {student.teacherId.last_name}</p>
      </div>
      <div className="col-md-2 student-info">
          <p>Detention: {student.detention_status ? "Yes" : "No"}</p>
      </div>

      <div className="col-md-4 student-info">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn darkblue"
              data-id={student._id}
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
              data-id={student._id}
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
  
  export default StudentListItem;
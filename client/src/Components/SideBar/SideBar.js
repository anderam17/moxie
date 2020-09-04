import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import API from "../../utils/api";
import TeacherModal from "../TeacherModal/TeacherModal";
import StudentModal from "../StudentModal/StudentModal";

function SideBar({
  fetchStudents,
  onChange,
  onSubmit,
  makeTeacherList
}) {
  const [newTeacher, setNewTeacher] = useState({
    first_name: "",
    last_name: "",
    subject: "",
    students: [],
  });
  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name: "",
    grade: 0,
    detention_status: false,
    teacherId: "",
  });

  const [modalStatus, setModalStatus] = useState({
    teacher: false,
    student: false,
  });

  const openModal = (modalName) => setModalStatus({ ...modalStatus, [modalName]: true });
  const closeModal = () => setModalStatus({ teacher: false, student: false });

  const filterStudents = (category) => (event) => {
    fetchStudents(category, event.target.value);
  };

  const getName = (name) => (event) => {
    onChange(name, event.target.value);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher({ ...newTeacher, [name]: value });
  };

  const handleStudentInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.addTeacher(newTeacher).then((response) => {
      setNewTeacher({
        first_name: "",
        last_name: "",
        subject: "",
        students: [],
      });
    });
  };

  const handleStudentFormSubmit = (e) => {
    e.preventDefault();
    API.addStudent(newStudent).then((response) => {
      setNewStudent({
        first_name: "",
        last_name: "",
        grade: 0,
        detention_status: false,
        teacherId: "",
      });
    });
  };

  return (
    <>
      <div className="sidebar nav flex-column col-md-3 text-center mx-auto">
        <h3 className="left lead">Filter Students By:</h3>
        {/* //!might not need fild or id here idk */}
        <DropDown
          onChange={filterStudents("teacherId")}
          field="Teacher"
          options={makeTeacherList()}
          id="teacherId"
        />

        <DropDown
          field="Grade"
          options={[
            { search: 6, print: "6th" },
            { search: 7, print: "7th" },
            { search: 8, print: "8th" },
          ]}
          id="grade"
          onChange={filterStudents("grade")}
        />
        <DropDown
          onChange={filterStudents("detention_status")}
          field="Detention"
          options={[
            { search: 1, print: "Has Detention" },
            { search: 0, print: "Does not have Detention" },
          ]}
          id="detention_status"
        />
        <SearchForm onChange={getName} onClick={onSubmit} />

        <Button
          onClick={() => openModal("student")}
          id="addNewStudent"
          type="button"
          title="Add New Student"
          data-target="#studentModal"
        />
        <Button
          onClick={() => openModal("teacher")}
          id="addNewTeacher"
          type="button"
          title="Add New Teacher"
          dataTarget="#teacherModal"
        />

        <TeacherModal
          show={modalStatus.teacher}
          onClick={() => closeModal()}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          newTeacher={newTeacher}
        />

        <StudentModal
          show={modalStatus.student}
          onClick={() => closeModal()}
          teacherList={makeTeacherList()}
          handleFormSubmit={handleStudentFormSubmit}
          handleInputChange={handleStudentInputChange}
          student={newStudent}
          title="Add Student"
        />
      </div>
    </>
  );
}

export default SideBar;

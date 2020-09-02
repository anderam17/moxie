import React, { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import api from "../../utils/api";
import TeacherModal from "../TeacherModal/TeacherModal";
import StudentModal from "../StudentModal/StudentModal";

function SideBar({ fetchStudents, onChange, onSubmit }) {
  const [teachers, setTeachers] = useState([]);
  
  const [modalStatus, setModalStatus] = useState({
    teacher: false,
    student: false
  });

  const openModal = (modalName) => setModalStatus({ ...modalStatus, [modalName]: true });
  const closeModal = () => setModalStatus({ teacher: false, student: false });

  const filterStudents = (category) => (event) => {
    fetchStudents(category, event.target.value);
  };

  const getName = (name) => (event) => {
    onChange(name, event.target.value);
  };

  useEffect(() => {
    api.getTeachers().then((response) => {
      console.log(`API call: ${response.data}`);
      setTeachers(response.data);
    });
  }, []);

  const makeTeacherList = () => {
    return teachers.map((teacher) => {
      return {
        search: teacher.id,
        print: `${teacher.first_name} ${teacher.last_name}`,
      };
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
          id="teacherSearch"
        />

        <DropDown
          field="Grade"
          options={[
            { search: 6, print: "6th" },
            { search: 7, print: "7th" },
            { search: 8, print: "8th" },
          ]}
          id="gradeSearch"
          onChange={filterStudents("grade")}
        />
        <DropDown
          onChange={filterStudents("detention_status")}
          field="Detention"
          options={[
            { search: 1, print: "Has Detention" },
            { search: 0, print: "Does not have Detention" },
          ]}
          id="detentionSearch"
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

        <TeacherModal show={modalStatus.teacher} onClick={() => closeModal()} />

        <StudentModal show={modalStatus.student} onClick={() => closeModal()} />
      </div>
    </>
  );
}

export default SideBar;


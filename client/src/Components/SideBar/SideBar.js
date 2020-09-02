import React, { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import api from "../../utils/api";
import TeacherModal from "../TeacherModal/TeacherModal";

function SideBar({ fetchStudents, onChange, onSubmit }) {
  const [teachers, setTeachers] = useState([]);
  const [modalStatus, setModalStatus] = useState({
    isOpen: false
  });

  const openModal = () => setModalStatus({ isOpen: true });
  const closeModal = () => setModalStatus({ isOpen: false });

  // const [modalStatus, setModalStatus] = useState(false);

  // const showModal = (e) => {
  //   if(modalStatus){
  //     setModalStatus(false);
  //   }else{
  //     setModalStatus(true);
  //   }
  //   console.log(modalStatus);
  // }

  const filterStudents = (category) => (event) => {
    fetchStudents(category, event.target.value);
  };

  const getName = (name) => (event) => {
    onChange(name, event.target.value)
  };

  useEffect(() => {
    api.getTeachers().then((response) => {
      console.log(`API call: ${response.data}`);
      setTeachers(response.data);
    });
  }, []);

  const makeTeacherlist = () => {
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
          options={makeTeacherlist()}
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
        <SearchForm onChange={getName} onClick={onSubmit}/>
        <Button
          onclick={() => {}}
          id="addNewStudent"
          type="button"
          title="Add New Student"
          // data-target="#studentModal"
        />
        <Button
          onClick={openModal}
          id="addNewTeacher"
          type="button"
          title="Add New Teacher"
          dataTarget="#teacherModal"
        />

        <TeacherModal  
        show={modalStatus.isOpen}
        onClick={closeModal}
        />
      </div>
    </>
  );
}

export default SideBar;

// {

// <button class="btn  mb-1 p-2 sideBtn" type="button" data-toggle="modal" data-target="#studentModal">Add New Student</button>
// <button type="button" data-toggle="modal" class="btn  mb-1 p-2 sideBtn" data-target="#teacherModal" id="addNewTeachers">Add New
//   Teacher</button> */
// }

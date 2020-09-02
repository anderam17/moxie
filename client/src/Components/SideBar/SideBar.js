import React, { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import api from "../../utils/api";

function SideBar({ fetchStudents }) {
  const [teachers, setTeachers] = useState([]);

  const filterStudents = (category) => (event) => {
    fetchStudents(category, event.target.value);
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

  console.log(teachers);

  return (
    <>
      <div className="sidebar nav flex-column col-md-3 text-center mx-auto">
        <h3 class="left lead">Filter Students By:</h3>

        {/* <div className="nav-item mb-1 p-2">
          <select className="form-control  custom-select-lg" id="teacher">
            <option value="">Teacher</option>
          </select>
        </div> */}
        {/* //!might not need fild or id here idk */}
        {/* !This is the current project */}
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
        <SearchForm />
        <Button
          onclick={() => {}}
          id="addNewStudent"
          type="button"
          title="Add New Student"
          // data-target="#studentModal"
        />
        <Button
          onclick={() => {}}
          id="addNewTeacher"
          type="button"
          title="Add New Teacher"
          // data-target="#teacherModal"
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

import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";

function SideBar({ fetchStudents }) {
  const filterStudents = (category) => (event) => {
    fetchStudents(category, event.target.value);
  };

  return (
    <>
      <div className="sidebar nav flex-column col-md-3 text-center mx-auto">
        <h3 class="left lead">Filter Students By:</h3>

        <div className="nav-item mb-1 p-2">
          <select className="form-control  custom-select-lg" id="teacher">
            <option value="">Teacher</option>
          </select>
        </div>
        <DropDown field="Grade" options={[6, 7, 8]} id="gradeSearch" onChange={filterStudents('grade')} />
        <DropDown
          onChange={filterStudents('detention_status')}
          field="Detention"
          options={["Has Detention", "Does not have Detention"]}
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

import React from "react";
import DropDown from "../DropDown/DropDown"
import SearchForm from "../SearchForm/SearchForm"

function GradeSideBar({makeTeacherList, onChange, onSubmit}) {
    const getName = (name) => (event) => {
        onChange(name, event.target.value);
      };

  return (
      <>
      <div className="sidebar nav flex-column col-md-3 text-center mx-auto">
      <h3 className="left lead">Filter Grades By Homeroom</h3>
      <DropDown
        //   onChange={filterStudents("teacherId")}
          field="Teacher"
          options={makeTeacherList()}
          id="teacherId"
        />
        <SearchForm onChange={getName} onClick={onSubmit} />
      {/* Student */}
        {/* Search by dropdown name list? HR TEacher */}
      {/* toggle table & chart? */}

      </div>

    </>
  );
}

export default GradeSideBar;
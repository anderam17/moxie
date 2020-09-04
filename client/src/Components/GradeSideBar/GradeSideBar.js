import React from "react";
import DropDown from "../DropDown/DropDown"

function GradeSideBar({makeTeacherList}) {
  return (
      <>
      <div className="sidebar nav flex-column col-md-3 text-center mx-auto">
      <h3 className="left lead">Filter Grades By:</h3>
      <DropDown
        //   onChange={filterStudents("teacherId")}
          field="Teacher"
          options={makeTeacherList()}
          id="teacherId"
        />
      {/* Homeroom */}
      {/* Student */}
        {/* Search by dropdown name list? HR TEacher */}
      {/* toggle table & chart? */}

      </div>

    </>
  );
}

export default GradeSideBar;
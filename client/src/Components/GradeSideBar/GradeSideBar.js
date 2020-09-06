import React from "react";
// import DropDown from "../DropDown/DropDown";
import SearchForm from "../SearchForm/SearchForm";


function GradeSideBar({makeTeacherList, onChange, onSubmit, fetchStudents}) {
    const getName = (name) => (event) => {
        onChange(name, event.target.value);
      };
      
      //
      //! Will be used when I make teacher dropdown
      // const filterStudents = (category) => (event) => {
      //   fetchStudents(category, event.target.value);
      // };

  return (
      <>
      <div className="sidebar nav flex-column col-md-3 text-center mx-auto">
        <SearchForm onChange={getName} onClick={onSubmit} />

      </div>

    </>
  );
}

export default GradeSideBar;

{/* Maybe another time */}
{/* <h3 className="left lead">Filter Grades By Homeroom</h3> */}
{/* <DropDown
  onChange={filterStudents("teacherId")}
  field="Teacher"
  options={makeTeacherList()}
  id="teacherId"
/> */}
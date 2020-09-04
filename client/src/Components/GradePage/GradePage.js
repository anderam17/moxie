import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
// import SideBar from "../SideBar/SideBar";


function GradePage() {

  return (
    <>
      <NavBar />
      <Header />

      {/* <div className="self-container">
        <div className="row">
          <SideBar
            fetchStudents={fetchStudents}
            onChange={handleChange}
            onSubmit={handleSubmit}
            makeTeacherList={makeTeacherList}
          />

        </div>
      </div> */}
    </>
  );
}

export default GradePage;
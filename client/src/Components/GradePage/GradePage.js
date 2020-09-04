import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import GradeSideBar from "../GradeSideBar/GradeSideBar";


function GradePage() {

  return (
    <>
      <NavBar />
      <Header />

      <div className="self-container">
        <div className="row">
          <GradeSideBar />

        </div>
      </div>
    </>
  );
}

export default GradePage;
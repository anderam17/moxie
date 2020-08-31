import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import StudentCard from "../StudentCard/StudentCard";
import CardContainer from "../CardContainer/CardContainer";

function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <div class="self-container">
        <div className="row">
          <SideBar />

          <CardContainer>
            <StudentCard
              id="6"
              first_name="Ashley"
              last_name="Bernal"
              grade="8"
              detention="No"
              onClick={() => {}}
            />
          </CardContainer>
        </div>
      </div>

      <p>HOMEPAGE</p>
    </>
  );
}

export default HomePage;

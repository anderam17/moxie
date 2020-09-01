import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardContainer from "../CardContainer/CardContainer";
import API from "../../utils/api";


function HomePage() {
  const [students, setStudents] = useState([]);

  const fetchStudents = (category, value) => {
    console.log(`Category: ${category} Value: ${value}`)
    API.getStudentsFiltered(category, value).then(response => {
      setStudents(response.data);
    });
  };

  return (
    <>
      <NavBar />
      <Header />
      <div class="self-container">
        <div className="row">
          <SideBar fetchStudents={fetchStudents} />
          <CardContainer 
          stuCards={students}
          />
        </div>
      </div>

      <p>HOMEPAGE</p>
    </>
  );
}

export default HomePage;

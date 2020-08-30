import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import StudentCard from "../StudentCard/StudentCard";

function HomePage() {

  
    return (
      <>
      <NavBar />
      <Header />
      <StudentCard 
      id="6"
      first_name="Ashley"
      last_name="Bernal"
      grade="8"
      detention="No"
      onClick={}
      />

      <p>HOMEPAGE</p>
      </>
    );
  }
  
  export default HomePage;
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardContainer from "../CardContainer/CardContainer";
import API from "../../utils/api";


function HomePage() {
  const [students, setStudents] = useState([]);
  const [singleStudent, setSingleStudent] = useState({
    first_name: "",
    last_name: ""
  });

  const {first_name, last_name} = singleStudent;


  const handleChange = (name, value) => {
    setSingleStudent({...singleStudent, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.getStudentsByName(first_name.trim(), last_name.trim()).then((response) => {
      console.log(response.data);
        setStudents(response.data);
      }); 
  };

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
      <div className="self-container">
        <div className="row">
          <SideBar fetchStudents={fetchStudents} onChange={handleChange} onSubmit={handleSubmit}/>
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

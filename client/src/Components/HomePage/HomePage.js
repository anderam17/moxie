import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardContainer from "../CardContainer/CardContainer";
import API from "../../utils/api";

function HomePage() {
  //? GOOD
  const [students, setStudents] = useState([]);
  //? GOOD
  const [singleStudent, setSingleStudent] = useState({
    first_name: "",
    last_name: "",
  });
  
  //? GOOD
  const { first_name, last_name } = singleStudent;

  //? GOOD
  const handleChange = (name, value) => {
    setSingleStudent({ ...singleStudent, [name]: value });
  };

  //? GOOD
  const handleSubmit = (event) => {
    event.preventDefault();
    API.getStudentsByName(first_name.trim(), last_name.trim()).then(
      (response) => {
        console.log(response.data);
        setStudents(response.data);
      }
    );
  };

  //? GOOD
  const fetchStudents = (category, value) => {
    console.log(`Category: ${category} Value: ${value}`);
    API.getStudentsFiltered(category, value).then((response) => {
      setStudents(response.data);
    });
  };

  //TODO Double Check this when everything else works
  const deleteStudent = (e) => {
    e.preventDefault();
    API.deleteStudent(e.target.getAttribute("data-id")).then((response) => {
      console.log("It is finished");
    });
  };

  return (
    <>
      <NavBar />
      <Header />
      <div className="self-container">
        <div className="row">
          <SideBar
            fetchStudents={fetchStudents}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <CardContainer
            stuCards={students}
            onClickDelete={deleteStudent}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;

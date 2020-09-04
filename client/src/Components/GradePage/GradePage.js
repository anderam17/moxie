import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import GradeSideBar from "../GradeSideBar/GradeSideBar";
import API from "../../utils/api";
import ChartContainer from "../ChartContainer/ChartContainer";

function GradePage() {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    value: "",
    category: ""
  });
  
const [singleStudent, setSingleStudent] = useState({
  first_name: "",
  last_name: "",
});
const { first_name, last_name } = singleStudent;

  const handleChange = (name, value) => {
    setSingleStudent({ ...singleStudent, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.getStudentsByName(first_name.trim(), last_name.trim()).then(
      (response) => {
        console.log(response.data);
        setStudents(response.data || []);
      }
    );
  };

  useEffect(() => {
    API.getTeachers().then((response) => {
      setTeachers(response.data);
    });
  }, []);

  const makeTeacherList = () => {
    return teachers.map((teacher) => {
      return {
        search: teacher._id,
        print: `${teacher.first_name} ${teacher.last_name}`,
      };
    });
  };

  const fetchStudents = (category, value) => {
    setSearchTerms({value: value, category: category});
    console.log(`Category: ${category} Value: ${value}`);
    API.getStudentsFiltered(category, value).then((response) => {
      console.log(response.data)
      setStudents(response.data || []);
    });
  };

  return (
    <>
      <NavBar />
      <Header />

      <div className="self-container">
        <div className="row">
          <GradeSideBar
            makeTeacherList={makeTeacherList}
            onChange={handleChange}
            onSubmit={handleSubmit}
            fetchStudents={fetchStudents}
          />
          <ChartContainer/>
        </div>
      </div>
    </>
  );
}

export default GradePage;

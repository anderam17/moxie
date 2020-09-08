import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
// import SideBar from "../SideBar/SideBar";
import GradeSideBar from "../GradeSideBar/GradeSideBar";
import API from "../../utils/api";
import ChartContainer from "../ChartContainer/ChartContainer";

//make a state value for new grade
// subject: ""
// grade=0
//handle input change
//check that it's a number
//need to grab what subject it is for.
//on submit, need to push it to student info
//refresh page automatically

function GradePage() {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    value: "",
    category: "",
  });
  const [newGrade, setNewGrade] = useState({
    subject: "",
    score: 0,
  });

  const handleInputChange = (e) => {
    setNewGrade({
      subject: e.target.getAttribute("data-subject"),
      score: e.target.value.trim(),
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if(!Number.isInteger(newGrade.score)){
    //   console.log("NEEDS TO BE AN INTEGER")
    // }else{
    const grades = students[0].grades;
    var index = 0;
    for (var i = 0; i < grades.length; i++) {
      if (grades[i].subject === newGrade.subject) {
        index = i;
      }
    }
    console.log(
      `index: ${index} grades: ${grades} grades[index]: ${grades[index]}`
    );
    grades[index].scores.push(newGrade.score);

    API.updateStudent(students[0]._id, students[0]).then((res) => {
      console.log("DONE MAYBE");
    });

    setNewGrade({
      subject: "",
      score: 0,
    });
    //! NEED TO MOVE MODAL OUT TO THIS LEVEL SO I CAN USE IT HERE
    // }
  };

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
        console.log(`Response.DAta: ${response.data}`);
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
    setSearchTerms({ value: value, category: category });
    console.log(`Category: ${category} Value: ${value}`);
    API.getStudentsFiltered(category, value).then((response) => {
      console.log(response.data);
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
          <ChartContainer
            students={students}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            newGrade={newGrade}
            setNewGrade={setNewGrade}
          />
        </div>
      </div>
    </>
  );
}

export default GradePage;

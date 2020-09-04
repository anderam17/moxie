import React, { useEffect, useState} from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardContainer from "../CardContainer/CardContainer";
import API from "../../utils/api";

function HomePage() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    value: "",
    category: ""
  });

  //i need this to run whenever there is a new teacher
  useEffect(() => {
    API.getTeachers().then((response) => {
      setTeachers(response.data);
    });
  }, []);

  //!!!!
  const fetchTeachers = () => {
    API.getTeachers().then((response) => {
      setTeachers(response.data);
    });
  };

  const makeTeacherList = () => {
    return teachers.map((teacher) => {
      return {
        search: teacher._id,
        print: `${teacher.first_name} ${teacher.last_name}`,
      };
    });
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
        console.log(response.data);
        setStudents(response.data || []);
      }
    );
  };


  const fetchStudents = (category, value) => {
    setSearchTerms({value: value, category: category});
    console.log(`Category: ${category} Value: ${value}`);
    API.getStudentsFiltered(category, value).then((response) => {
      console.log(response.data)
      setStudents(response.data || []);
    });
  };

  const deleteStudent = (e) => {
    e.preventDefault();
    API.deleteStudent(e.target.getAttribute("data-id")).then((response) => {
      console.log("It is finished");
    });
    fetchStudents(searchTerms.category, searchTerms.value);
  };

  return (
    <>
      <NavBar />
      <Header />
      <div className="self-container">
        <div className="row">
          <SideBar
          fetchTeachers={fetchTeachers}
            fetchStudents={fetchStudents}
            onChange={handleChange}
            onSubmit={handleSubmit}
            makeTeacherList={makeTeacherList}
          />
          <CardContainer
            stuCards={students}
            onClickDelete={deleteStudent}
            makeTeacherList={makeTeacherList}
            searchTerms={searchTerms}
            fetchStudents={fetchStudents}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;

import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import GradeSideBar from "../GradeSideBar/GradeSideBar";
import API from "../../utils/api"
import ChartContainer from "../ChartContainer/ChartContainer"


function GradePage() {
    const [teachers, setTeachers] = useState([]);

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

  return (
    <>
      <NavBar />
      <Header />

      <div className="self-container">
        <div className="row">
          <GradeSideBar 
          makeTeacherList={makeTeacherList}
        //   onChange={filterStudents("teacherId")}
          />
          <ChartContainer />

        </div>
      </div>
    </>
  );
}

export default GradePage;
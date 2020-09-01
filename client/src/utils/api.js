import axios from "axios";
//* This is front end, this is what we call

export default {
  getStudents: () => {
    return axios.get("/api/students");
  },
  getStudentById: (id) => {
    return axios.get("/api/students/:id", id);
  },
  getStudentsFiltered: (category, value) => {

    return axios.get("/api/students", { params: { [category]: value } });
  },
  //! DO I NEED THESE ANYMORE?
  // getStudentsByDetention: (detentionStatus) => {
  //   return axios.get("/api/students", { params: { detention_status: detentionStatus } });
  // },
  // getStudentsByGrade: (grade) => {
  //   return axios.get("/api/students", { params: { grade: grade } });
  // },
  getStudentsByFirstName: (firstName) => {
    return axios.get("/api/students", { params: { first_name: firstName } });
  },
  getStudentsByLastName: (lastName) => {
    return axios.get("/api/students", { params: { last_name: lastName }});
  },
  getStudentsByFirstAndLastName: (firstName, lastName) => {
    return axios.get("/api/students", { params: { first_name: firstName, last_name: lastName }});
  },
  addStudent: (studentData) => {
    return axios.post("/api/students", studentData);
  },
  deleteStudent: (id) => {
    return axios.delete("/api/students/:id", id);
  },
  updateStudent: (id, studentData) => {
    return axios.put(`/api/students/${id}`, studentData);
  },
  getTeachers: () => {
    return axios.get("/api/teachers");
  },
  addTeacher: (teacherData) => {
    return axios.post("/api/teachers", teacherData);
  },
  deleteTeacher: (id) => {
    return axios.delete("/api/teachers/:id", id);
  },
  updateTeacher: (id, teacherData) => {
    return axios.put(`/api/teachers/${id}`, teacherData);
  },
  getTeacherById: (id) => {
    return axios.get("/api/teachers/:id", id);
  }
};

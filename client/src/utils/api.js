import axios from "axios";

export default {
    getStudents: 
    () => {
        return axios.get("/student")
    },
    getStudentById:
    (id) => {
        return axios.get("/student/:id", id)
    },
    getTeachers: 
    () => {
        return axios.get("/teacher")
    },
    addStudent:
    (studentData) => {
        return axios.post("/student", studentData);
    }
}
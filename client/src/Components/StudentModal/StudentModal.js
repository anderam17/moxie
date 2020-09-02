import React from "react";
import MyButton from "../Button/Button";
import { Modal, Button } from "react-bootstrap";
import DropDown from "../DropDown/DropDown";

function StudentModal({ show, onClick, teacherList }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header onClick={onClick} closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" method="POST">
            <div className="form-group">
              <label for="">First Name</label>
              <input
                type="text"
                className="form-control"
                id="student_first_name"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label for="">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="student_last_name"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label for=""> Grade level</label>
              <select className="form-control custom-select-lg" id="grade">
                <option value="">Grade</option>
                <option value="6"> 6th </option>
                <option value="7"> 7th </option>
                <option value="8"> 8th </option>
              </select>
            </div>
            {/*!! !!LOAD TEACHER LIST */}
            <DropDown
              field="Teacher"
              options={teacherList}
              id="teacherSearch"
            />
            {/* <div className="form-group">
                <label for=""> Teacher Name</label>
                <select className="custom-select" id="teacher-student">
                  <option value="">Teacher</option>
                </select>
              </div> */}
            <div className="form-group">
              <label for=""> Detention</label>
              <select className="custom-select" id="detention">
                <option value="">Detention</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Close
          </Button>
          <MyButton
            onClick={() => {}}
            id="submitNewStudent"
            type="submit"
            title="Add Student"
            dataTarget="#studentModal"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentModal;

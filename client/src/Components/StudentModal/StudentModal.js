import React from "react";
import MyButton from "../Button/Button";
import { Modal, Button } from "react-bootstrap";
import DropDown from "../DropDown/DropDown";

function StudentModal({
  show,
  onClick,
  teacherList,
  handleFormSubmit,
  handleInputChange,
  newStudent: { first_name, last_name, grade, detention_status, teacherId },
}) {
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
                placeholder="First Name"
                value={first_name}
                name="first_name"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label for="">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="student_last_name"
                placeholder="Last Name"
                value={last_name}
                name="last_name"
                onChange={handleInputChange}
              />
            </div>
            <DropDown
              field="Grade"
              options={[
                { search: 6, print: "6th" },
                { search: 7, print: "7th" },
                { search: 8, print: "8th" },
              ]}
              id="gradeSearch"
              name="grade"
              onChange={handleInputChange}
            />

            <DropDown
              field="Teacher"
              options={teacherList}
              id="teacherSearch"
              onChange={handleInputChange}
            />
            <DropDown
              onChange={handleInputChange}
              field="Detention"
              options={[
                { search: 1, print: "Has Detention" },
                { search: 0, print: "Does not have Detention" },
              ]}
              id="detentionSearch"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Close
          </Button>
          <MyButton
            onClick={handleFormSubmit}
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

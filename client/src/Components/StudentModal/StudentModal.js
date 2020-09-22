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
  title,
  student: { first_name, last_name, grade, detention_status, teacherId },
}) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header onClick={onClick} closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" method="POST">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={first_name}
                name="first_name"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
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
              value={grade}
              name="grade"
              onChange={handleInputChange}
            />

            <DropDown
              field="Teacher"
              options={teacherList}
              value={teacherId}
              onChange={handleInputChange}
              name="teacherId"
            />
            <DropDown
              onChange={handleInputChange}
              field="Detention"
              options={[
                { search: 1, print: "Has Detention" },
                { search: 0, print: "Does not have Detention" },
              ]}
              value={detention_status}
              name="detention_status"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={onClick}>
            Close
          </Button>
          <MyButton
            onClick={handleFormSubmit}
            id="submitNewStudent"
            type="submit"
            title="Submit"
            dataTarget="#studentModal"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentModal;

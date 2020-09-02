import React from "react";
import MyButton from "../Button/Button";
import { Modal, Button } from "react-bootstrap";

function TeacherModal({ show, onClick, handleFormSubmit, handleInputChange, newTeacher: {first_name, last_name, subject}}) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header onClick={onClick} closeButton>
          <Modal.Title>Add Teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" method="POST">
            <div className="form-group">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="First Name"
                value={first_name}
                name="first_name"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Last Name"
                value={last_name}
                name="last_name"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor=""> Subject </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Close
          </Button>
          <MyButton
          onClick={handleFormSubmit}
          id="submitNewTeacher"
          type="submit"
          title="Add Teacher"
          dataTarget="#teacherModal"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TeacherModal;

import React from "react";
import MyButton from "../Button/Button";
import { Modal, Button } from "react-bootstrap";

function TeacherModal({ show, onClick }) {
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
                id="teacher_first_name"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="teacher_last_name"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label htmlFor=""> Subject </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder=""
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Close
          </Button>
          <MyButton
          onClick={() => {}}
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

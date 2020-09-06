import React from "react";
import MyButton from "../Button/Button";
import { Modal, Button } from "react-bootstrap";
import DropDown from "../DropDown/DropDown";

function StudentModal({
  show,
  onClick,
  handleFormSubmit,
  handleInputChange,
}) {
  return (
    <>
      <Modal
        show={show}
      >
        <Modal.Header
          onClick={onClick}
          closeButton
        >
          <Modal.Title>Add Grade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" method="POST">

            <h3>Enter Grade Between 0 and 105</h3>
            <div className="form-group">
              <label>Grade</label>
              <input
                type="text"
                className="form-control"
                placeholder="0-105"
                //! ONLY THING I MIGHT NEED TO CHANGE
                // value={first_name}
                name="grade"
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
              onClick={onClick}
          >
            Close
          </Button>
          <MyButton
            onClick={handleFormSubmit}
            id="submitNewGrade"
            type="submit"
            title="Submit"
            dataTarget="#gradeModal"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentModal;

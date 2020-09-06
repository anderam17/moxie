import React from "react";
import MyButton from "../Button/Button";
import { Modal, Button } from "react-bootstrap";

function GradeModal({
  show,
  onClick,
  handleFormSubmit,
  handleInputChange,
  header,
  newGrade: {score},
  setNewGrade
}) {
//*NEW
  setNewGrade.subject=header;

  return (
    <>
      <Modal
        show={show}
      >
        <Modal.Header
          onClick={onClick}
          closeButton
        >
          <Modal.Title>Add {header} Grade</Modal.Title>
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
                value={score}
                data-subject={header}
                name="score"
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

export default GradeModal;

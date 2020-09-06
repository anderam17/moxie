import React from "react";
import MyButton from "../Button/Button";
import { Modal, Button } from "react-bootstrap";

//I just need to make sure value is what I need it to be so that it pushes to the state correctly. And I need to make sure the handle form submit and handleInputChange work correctly

//!!! THIS NAME NEEDS TO CHANGE
function GradeModal({
  show,
  onClick,
  handleFormSubmit,
  handleInputChange,
  header,
  //* THIS MIGHT NEED TO CHANGE
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
                //! ONLY THING I MIGHT NEED TO CHANGE
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

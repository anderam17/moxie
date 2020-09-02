import React from "react";
// import Button from "../Button/Button";
import {Modal, Button} from "react-bootstrap"; 
// import "./TeacherModal.css";


function TeacherModal({show, onClick}) {
  return (
    <>
    <Modal show={show}>
        <Modal.Header onClick={onClick} closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
    };
 
  
  export default TeacherModal;


  // function TeacherModal({show, onClick}) {
  //   if(!show){
  //     return null;
  //   }else{
  //     return (
  //       <>
  
  //       <Button
  //             onClick={onClick}
  //             title="Close"
  //           /> 
  
  //         </>
  //       )
  //     }
  //   };
    
  //   export default TeacherModal;
  
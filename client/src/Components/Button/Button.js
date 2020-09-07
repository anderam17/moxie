import React from "react";
import "./Button.css";

function Button({onClick, id, type, title, dataTarget}) {
  return (
    <>
    <button type={type} className="btn moxie-buttons" onClick={onClick} id={id} data-toggle="modal" data-target={dataTarget}>
  {title}
</button>
    </>
  );
}

export default Button;

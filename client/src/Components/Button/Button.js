import React from "react";

function Button({onClick, id, type, title, dataTarget}) {
  return (
    <>
    <button type={type} className="btn btn-primary" onClick={onClick} id={id} data-toggle="modal" data-target={dataTarget}>
  {title}
</button>
    </>
  );
}

export default Button;

import React from "react";

function Button({onclick, id, type, title, dataTarget}) {
  return (
    <>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <button className="btn btn-secondary" data-target="dataTarget" onClick={() => onclick()} id={id} type={type}> {title} </button>
</div>
    </>
  );
}

export default Button;

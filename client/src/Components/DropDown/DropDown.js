import React from "react";

function DropDown({ field, options, id }) {
  return (
    <>
      <div className="nav-item mb-1 p-2">
        <select className="form-control custom-select-lg" id={id}>
          <option value="">{field}</option>
          {options.map((item) => {
            return (
              <option className="dropdown-item" value={item}>
                {" "}
                {item}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default DropDown;




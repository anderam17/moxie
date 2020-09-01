import React from "react";

function DropDown({ field, options, id, onChange}) {
  return (
    <>
      <div className="nav-item mb-1 p-2">
        <select className="form-control custom-select-lg" data-id={id} onChange={onChange}>
          <option value="">{field}</option>
          {options.map((item) => {
            return (
              <option className="dropdown-item" value={item.search}>
                {" "}
                {item.print}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default DropDown;


// {{item} === "Has Detention" ? true : {item} === "Does not have Detention" ? false : {item}}


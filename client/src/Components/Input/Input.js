import React from "react";

function Input({id, placeholder, onChange}) {
  return (
    <>
      <input
            className="form-control  custom-select-lg"
            id={id}
            type="search"
            placeholder={placeholder}
            aria-label="Search"
            onChange={onChange}
          />
    </>
  );
}

export default Input;
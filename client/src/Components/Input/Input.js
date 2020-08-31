import React from "react";

function Input({id, placeholder}) {
  return (
    <>
      <input
            className="form-control  custom-select-lg"
            id={id}
            type="search"
            placeholder={placeholder}
            aria-label="Search"
          />
    </>
  );
}

export default Input;
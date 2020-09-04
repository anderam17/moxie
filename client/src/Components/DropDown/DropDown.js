import React from "react";

function DropDown({ field, options, value, onChange, name }) {

  return (
    <>

      <div className="nav-item mb-1 p-2">
    <select onChange={onChange} value={value} name={name} className="form-control custom-select-lg">
      <option key={`${field}-default`}>{field}</option>
      {options.map((item) => {
        return (
          <option className="dropdown-item" value={item.search} key={item.print}>
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





//* Almost works, but buttons do not filter students. I assume because I do not have access to the bootstrap components and can't set their values and names
{/* <DropdownButton
  id="dropdown-basic-button"
  onChange={onChange}
  value={value}
  name={name}
  title={field}
>
  {options.map((item) => {
    return (
      <Dropdown.Item value={item.search} key={item.print}>
        {item.print}
      </Dropdown.Item>
    );
  })}
</DropdownButton> */}

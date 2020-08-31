import React from "react";
import Input from "../Input/Input"
import Button from "../Button/Button"

function SearchForm() {
  return (
    <>
      <div className="nav-item mb-1 p-2">
        <form className="form-inline my-2 my-lg-0 mb-1 p-2">
          <h5 className="mx-auto lead">Search By Student Name</h5>
          <Input
            id="search-first-name"
            placeholder="First Name"
          />
          <Input
            id="search-last-name"
            placeholder="Last Name"
          />
          <Button
          onclick={() => {}}
          id="stuSearch"
          type="submit"
          title="Search"
          >
            Search
          </Button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;

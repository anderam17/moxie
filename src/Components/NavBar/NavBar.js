import React from "react";
import LogInBtn from "../LogInBtn";

function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Pantheos
        </a>
        <LogInBtn />
      </nav>
    </>
  );
}

export default NavBar;

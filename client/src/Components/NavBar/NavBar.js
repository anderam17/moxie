import React from "react";
import Button from "../Button/Button"
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <a className="navbar-brand" href="#">
        <img src="../../../assets/Moxie.png" alt="" />
          MOXIE
        </a>
        <Button 
        onclick={() => loginWithRedirect()}
        id="singIn"
        title="Sign In"
        />
      </nav>
    </>
  );
}

export default NavBar;

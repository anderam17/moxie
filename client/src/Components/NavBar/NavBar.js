import React from "react";
import Button from "../Button/Button"
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="navbar-brand" href="#">
        <img src="../../../assets/Moxie.png" alt="" />
          MOXIE
        </div>
        <Button 
        onclick={() => loginWithRedirect()}
        id="signIn"
        title="Sign In"
        />
      </nav>
    </>
  );
}

export default NavBar;

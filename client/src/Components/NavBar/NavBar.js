import React from "react";
import Button from "../Button/Button"
import { useAuth0 } from "@auth0/auth0-react";
import{ useHistory } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const { loginWithRedirect } = useAuth0();
  const history = useHistory();

  const toGradePage = () => {
    history.push("/grades")
  };

  const toHomePage = () => {
    history.push("/")
  }
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="navbar-brand" href="#">
        <img src="../../../assets/Moxie.png" alt="" />
          MOXIE
        </div>
        <div className="nav-buttons">
        <Button 
        onClick={toHomePage}
        id="homePage"
        title="HomePage"
        />
        <Button 
        onClick={toGradePage}
        id="grades"
        title="Grades"
        />
        <Button 
        onClick={() => loginWithRedirect()}
        id="signIn"
        title="Sign In"
        />
        </div>
      </nav>
    </>
  );
}

export default NavBar;

import React from "react";
import Button from "../Button/Button"
import { useAuth0 } from "@auth0/auth0-react";
import{ useHistory } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./NavBar.css";

function NavBar() {
  const { loginWithRedirect, logout } = useAuth0();
  const history = useHistory();

  const toGradePage = () => {
    history.push("/grades")
  };

  const toHomePage = () => {
    history.push("/")
  };
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light" id="navbar-header">
        <div className="navbar-brand" id="moxie-nav-logo">
          MOXIE
        </div>
        <div className="nav-buttons">
        <Button 
        onClick={toHomePage}
        id="homePage"
        title="Home"
        />
        <Button 
        onClick={toGradePage}
        id="grades"
        title="Grades"
        />
      
        <Button 
        onClick={isAuthenticated ? () => logout() : () => loginWithRedirect()}
        id="signIn"
        title={isAuthenticated ? "Sign Out" : "Sign In"}
        />
        </div>
        {/* <BurgerMenu /> */}
      </nav>
    </>
  );
}

export default NavBar;

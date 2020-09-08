import React from "react";
import Button from "../../Components/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";
import "./LogInCard.css";

function LogInCard() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className="card text-center" id="sign-in-card">
        <div className="card-body">
          <h1 className="card-title">Welcome to Moxie!</h1>
          <h3 className="card-text">Please Sign In to continue</h3>
          <Button
            onClick={() => loginWithRedirect()}
            id="sign-in-card-btn"
            title={isAuthenticated ? "Sign Out" : "Sign In"}
          />
        </div>
        <div className="card-footer">
          <p id="site-demo">
            {" "}
            To demo site, use: <br /> <b>Email: </b> email@email.com <br /> <b>Password: </b> 
            Password!
          </p>
        </div>
      </div>
    </>
  );
}

export default LogInCard;

import React from "react";
import Button from "../../Components/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";

function LogInCard() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">Welcome to...</h5>
    <p className="card-text">Please Sign In to continue</p>
    <Button 
        onClick={() => loginWithRedirect()}
        id="signIn"
        title={isAuthenticated ? "Sign Out" : "Sign In"}
        />
  </div>
  <div className="card-footer text-muted">
    To demo site, use: <br/> Email: sjdhfakdja <br/> Password: shdjfkasdf
  </div>
</div>
    </>
  );
}

export default LogInCard;
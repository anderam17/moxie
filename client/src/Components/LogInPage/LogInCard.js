import React from "react";
import LogInBtn from "../LogInBtn"

function LogInCard() {
  return (
    <>
      <div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">Welcome to...</h5>
    <p className="card-text">Please Sign In to continue</p>
    <LogInBtn />
  </div>
  <div className="card-footer text-muted">
    To demo site, use: <br/> Email: sjdhfakdja <br/> Password: shdjfkasdf
  </div>
</div>
    </>
  );
}

export default LogInCard;
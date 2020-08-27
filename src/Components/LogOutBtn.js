import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogOutBtn() {
    const { logout } = useAuth0();
return (

<div className="btn-group btn-group-toggle" data-toggle="buttons">
    <button className="btn btn-secondary" onClick={() => logout({ returnTo: window.location.origin })} id="option1"> Sign In </button>
</div>
)
}

export default LogOutBtn;
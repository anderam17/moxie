import React from "react";
import "./Header.css"
import logo from '../../assets/moxie-logo.png';

function Header() {
return (
    <div className="jumbotron"  id="moxie-logo">
        <img src={logo} />
    </div>
)
}

export default Header;
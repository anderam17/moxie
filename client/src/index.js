import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-5emoha6c.us.auth0.com"
    clientId="E4otJPmqzSfnPoJqcSIVyQnQgG14rClI"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import LogInPage from "./Components/LogInPage/LogInPage";
import HomePage from "./Components/HomePage/HomePage";
import GradePage from "./Components/GradePage/GradePage"


function App() {
  // const { isAuthenticated } = useAuth0();
  //   if (isAuthenticated) {
    //! I have this commented out so that I dont have to sign in every tiem
      return (
      <BrowserRouter>
        <Switch>
          <Route path="/grades" component={GradePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      )
    // } else{
    //   return (
    //     <LogInPage />
    //     )
    // };
}

export default App;

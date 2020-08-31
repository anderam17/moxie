import React from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LogInPage from "./Components/LogInPage/LogInPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
      return (
      <HomePage />
      )
    } else{
      return (
        <LogInPage />
        )
    };
}

export default App;

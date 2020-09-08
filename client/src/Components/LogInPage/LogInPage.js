import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import LogInCard from "./LogInCard";
import "./LogInPage.css"

function LogInPage() {
  return (
    <>
      <NavBar />
      <Header />
      <LogInCard />
    </>
  );
}

export default LogInPage;

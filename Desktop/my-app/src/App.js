import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/UI/NavLinks";
import HeroBanner from "./components/UI/HeroBanner";
import Tours from "./components/UI/Tours";

const App = () => {
  return (
    <div className='App'>
      <Example />
      <HeroBanner title={"Hello"} name={"Joe"} />
      <Tours />
    </div>
  );
};

export default App;

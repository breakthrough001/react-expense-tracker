import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavLinks from "./components/UI/NavLinks";
import HeroBanner from "./components/UI/HeroBanner";
import Headline from "./components/UI/Headline";
import Tours from "./components/UI/Tours";
import ExploreSection from "./components/UI/ExploreSection";
import FastTravelSection from "./components/FastTravelSection";

const App = () => {
  return (
    <div className='App container'>
      <NavLinks />
      <HeroBanner title={"Hello"} name={"Joe"} />
      <Headline />
      <Tours />
      <ExploreSection />
      <FastTravelSection />
    </div>
  );
};

export default App;

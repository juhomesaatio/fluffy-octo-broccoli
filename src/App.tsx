import React, { useState } from "react";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="main">
      <div className="hero">
        <div className="hero__bg hero__bg--1"></div>
        <div className="hero__bg hero__bg--2"></div>
        <div className="hero__bg hero__bg--3"></div>
        <div className="hero__bg hero__bg--4"></div>
        <div className="hero__content">
          <h1 className="hero__title">SocialHack</h1>
          <div className="hero__divider"></div>
          <h2 className="hero__subtitle">November 23 - 24, 2023</h2>
          <Countdown />
        </div>
      </div>
    </div>
  );
}

export default App;

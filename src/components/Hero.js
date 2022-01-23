import React from "react";

import Slider from "./Slider";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero-text">
        <h1 className="hero-text">
          IZDELAVA <br /> SUHOMONTAŽNIH <br /> SISTEMOV <br />
        </h1>
        <h2 className="hero-text-sub">
          MODEREN SISTEM IZDELAVE <br /> NOTRANJIH PROSTOROV PO
          <br /> ŽELJAH UPORABNIKOV.
        </h2>
      </div>
      <Slider />
    </div>
  );
};

export default Hero;

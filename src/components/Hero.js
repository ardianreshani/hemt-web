import React from "react";
import heroImg from "../images/sildeOne.png";
import arrowLeft from "../images/arrow.png";
import arrowRight from "../images/arrowRight.png";
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
      <div className="arrows">
        <div className="left">
          <img src={arrowLeft} alt="arrow" />
        </div>
        <div className="right">
          <img src={arrowRight} alt="arrow" />
        </div>
      </div>
      <div className="right-hero-images">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

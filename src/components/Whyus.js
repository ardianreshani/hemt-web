import React from "react";
import OpenEmail from "../images/icon openEmail.png";
import whyusIMG from "../images/image4WhyUs.png";
import thumbUp from "../images/-e-icon thumb.png";
const Whyus = () => {
  return (
    <div className="why-container">
      <div className="why-us-text">
        <h1>
          Zakaj izbrati <span className="hemt">HEMT?</span>
        </h1>
        <div className="two-colum">
          <div className="gren-cart">
            <h2>Celovite</h2>
            <p>rešitve</p>
            <h2>Osebni</h2>
            <p>pristop</p>
            <img src={thumbUp} alt="thumbUp Icone" />
          </div>
          <div className="text"></div>
        </div>
      </div>
      <div className="why-us-image">
        <div className="image">
          <img src={whyusIMG} alt="Happy Family" />
        </div>
        <div className="green-cart">
          <h2>PRIDOBITE BREZPLAČNO PONUDBO</h2>
          <div className="circle">
            <img src={OpenEmail} alt="OpenEmail Icone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;

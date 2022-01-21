import React from "react";
import serviceBlack from "../images/serviceBlack.png";
import wall from "../images/ICON WALL.png";
import brush from "../images/brush icon.png";
import worker from "../images/-e-icon wokrer.png";
const Service = () => {
  return (
    <div className="service">
      <div className="bg-img"></div>
      <div className="row">
        <div className="service-container">
          <div className="service-image">
            <img src={serviceBlack} alt="backBackgorund" />
            {/* <img src={serviceGreen} alt="serviceGreen" className="bg-image" /> */}
          </div>
          <div className="service-icone">
            {" "}
            <img src={wall} alt="Wall icone" />{" "}
          </div>
          <div className="service-text">
            <h1>01</h1> <h3>Izdelava suhomontažnih sistemov</h3>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image">
            <img src={serviceBlack} alt="backBackgorund" />
          </div>
          <div className="service-icone">
            {" "}
            <img src={brush} alt="Wall icone" />{" "}
          </div>
          <div className="service-text">
            <h1>02</h1> <h3>Pleskanje</h3>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image">
            <img src={serviceBlack} alt="backBackgorund" />
          </div>
          <div className="service-icone">
            {" "}
            <img src={worker} alt="worker icone" />{" "}
          </div>
          <div className="service-text">
            <h1>03</h1> <h3>Ostala zaključna gradbena dela</h3>
          </div>
        </div>
      </div>
      <div className="cta-text">
        <h3>NAŠ CILJ JE: NIČ DELA IN NIČ SKRBI ZA VAS</h3>
        <h1>OPRAVIMO HITRO, UGODNO IN KVALITETNO Z ŽE UVELJAVLJENO EKIPO</h1>
      </div>
    </div>
  );
};

export default Service;

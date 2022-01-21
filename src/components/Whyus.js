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
          <div className="green-cart thub">
            <div>
              <h2>Celovite</h2>
              <p>rešitve</p>
            </div>
            <div>
              <h2>Osebni</h2>
              <p>pristop</p>
            </div>

            <div className="circle thub-icon">
              <img src={thumbUp} alt="thumbUp Icone" />
            </div>
          </div>
          <div className="text">
            <h4>
              Uporabljamo najsodobnejše tehnologije in premikamo meje
              inovativnosti v iskanju rešitev za zadovoljevanje potreb naših
              strank. Smo partner, ki govori vaš jezik in vam stoji ob strani
              med celotnim potekom projekta.
            </h4>
            <h3>
              Prepričani smo, da boste pri nas našli prav to kar potrebujete!
            </h3>
          </div>
        </div>
      </div>
      <div className="why-us-image">
        <div className="image">
          <img src={whyusIMG} alt="Happy Family" />
          <div className="green-cart email">
            <h2>PRIDOBITE BREZPLAČNO PONUDBO</h2>
            <div className="circle email-icon">
              <img src={OpenEmail} alt="OpenEmail Icone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;

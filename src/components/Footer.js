import React from "react";
import Email from "../images/-e-EMAIL Green.png";
import Gsm from "../images/-e-ICON GSM green.png";
import Map from "../images/-e-ICON LOCATION green.png";
import webtim from "../images/-e-webtim logo.png";
import logo from "../images/logo4footer.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="item">
          <img src={Map} alt="Map ICONE" />
          <p>Kotnikova ulica 5, 1000 Ljubljana</p>
        </div>
        <div className="item">
          <img src={Email} alt="email ICONE" />
          <p>info@hemt.si</p>
        </div>
        <div className="item">
          <img src={Gsm} alt="Gsm ICONE" />
          <p>+386 70 555 238</p>
        </div>
      </div>

      <div className="footer-copyright">
        <img src={logo} alt="logo" />
        <p>
          © 2021 HEMT, Edin Hamulić s.p. | splošni pogoji poslovanja | avtorji:{" "}
        </p>{" "}
        <img src={webtim} alt="webtim icon" />
      </div>
    </footer>
  );
};

export default Footer;

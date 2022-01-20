import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "../images/-e-EMAIL ICON.png";
import PhoneIcon from "../images/-e-GSM ICON.png";
import euIcon from "../images/-e-eu LOGO.png";
import HemtLogo from "../images/LOGO.png";

const Navbar = () => {
  return (
    <div>
      <div className="mini-nav">
        <div className="cta-nav">
          <div className="cta-contact">
            <div className="cta-nav-items">
              <img src={emailIcon} alt="email icon" />
              <Link to="/">info@hemt.si</Link>
            </div>
            <div className="cta-nav-items">
              <img src={PhoneIcon} alt="phone icon" />
              <Link to="/">+386 70 555 238</Link>
            </div>
          </div>
          <div className="cta-b2b">
            <div className="b2b">
              <h2>B2B</h2>
              <p>prijava za partnerje</p>
              <div className="line">|</div>
            </div>
            <div className="language">
              <p className="active">slo</p>
              <p>|</p>
              <p>eng</p>
            </div>
            <div className="eulogo">
              <img src={euIcon} alt="Eu Icone" />
            </div>
          </div>
        </div>
        <nav>
          <div className="logo">
            {" "}
            <img src={HemtLogo} alt="logo" width="193px" />
          </div>
          <ul>
            <li>
              <Link to="/" className="active">
                DOMOV
              </Link>
            </li>
            <li>
              <Link to="#" className="dropbox">
                {" "}
                STORITVE{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/about">O NAS</Link>
            </li>
            <li>
              <Link to="#"> KONTAKT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

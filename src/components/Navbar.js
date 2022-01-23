import React from "react";
import { NavLink } from "react-router-dom";
import emailIcon from "../images/-e-EMAIL ICON.png";
import PhoneIcon from "../images/-e-GSM ICON.png";
import euIcon from "../images/-e-eu LOGO.png";
import HemtLogo from "../images/LOGO.png";
import useWindowDimensions from "./Windows";
const Navbar = ({ open, setOpen }) => {
  const { width } = useWindowDimensions();
  let clasName = "menu";
  let hamburger = "hamburger";
  let ul = "";
  if (open && width < 769) {
    clasName = "menu on";
    hamburger = "hamburger on";
    ul = "on";
  }

  return (
    <div>
      <div className="mini-nav">
        <div className="cta-nav">
          <div className="cta-contact">
            <div className="cta-nav-items">
              <img src={emailIcon} alt="email icon" />

              <a href="mailto:info@hemt.si">info@hemt.si</a>
            </div>
            <div className="cta-nav-items">
              <img src={PhoneIcon} alt="phone icon" />

              <a href="tel:+386 70 555 238">+386 70 555 238</a>
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
          <div className={clasName} onClick={() => setOpen(!open)}>
            <div className="logo">
              <NavLink to="/">
                {" "}
                <img src={HemtLogo} alt="logo" width="193px" />
              </NavLink>
            </div>
            <ul className={ul}>
              <li>
                <NavLink
                  to="/"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  DOMOV
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  {" "}
                  STORITVE{" "}
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/about"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  O NAS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  {" "}
                  KONTAKT
                </NavLink>
              </li>
            </ul>
            <div className={hamburger} onClick={() => setOpen(!open)}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

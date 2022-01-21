import React from "react";
import avatar from "../images/AboutUS heroImg.png";
import WorkerBackgorund from "../images/WorkerBackgorund.png";
const AboutUs = () => {
  return (
    <div>
      <div className="o-nas">
        <h1>O NAS</h1>
        <img src={WorkerBackgorund} alt="WorkerBackgorund" />
        <div className="green-bg"></div>
      </div>
      <div className="solutions">
        <div className="left-solutions-text">
          <h4>Celovite Rešitve, Osebni Pristop</h4>
          <p>
            Uporabljamo <span className="bold">najsodobnejše tehnologije</span>{" "}
            in premikamo meje inovativnosti v
            <span className="bold">iskanju rešitev</span> za zadovoljevanje
            potreb naših strank.{" "}
          </p>
          <p>
            Smo partner, ki govori vaš jezik in vam stoji ob strani med celotnim
            potekom projekta.
          </p>
          <p className="bold">
            Prepričani smo, da boste pri nas našli prav to kar potrebujete!
          </p>
        </div>
        <div className="left-solutions-image">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="green-box">
          <h1>Vas zanima, kako Vam lahko pomagamo?</h1>
          <p>
            V kolikor potrebujete podrobnejše informacije z zvezi z našimi
            <br />
            storitvami ali izdelki, vas prosimo, da izpolnete{" "}
            <span className="bold">
              kontaktni <br /> obrazec
            </span>{" "}
            ali pa nas pokličete na{" "}
            <span className="bold">+386 70 555 238</span>
          </p>
          <p>
            V primeru, da nam boste svoja vprašanja posredovali pisno,
            <br /> vam bomo odgovorili v najkrajšem možnem času.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

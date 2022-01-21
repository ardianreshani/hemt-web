import React from "react";
import spirit from "../images/HEMT - NASLOVNA.png";
import eu from "../images/-e-MGRT.png";
import mgrt from "../images/-e-EU nalozba.png";

const hh = () => {
  return (
    <div className="vonchers-container">
      <div className="vouchers-imges">
        <img src={spirit} alt="spirit icone" />
        <img src={eu} alt="eu icone" />
        <img src={mgrt} alt="mgrt icone" />
      </div>
      <div className="vouchers-text">
        <p>
          Operacija je bila za sofinanciranje izbrana na »Javnem pozivu za
          sofinanciranje stroškov digitalizacije prodajnih poti ter
          predstavitvenih in trženjskih gradiv za promocijo na tujih trgih«.
          <br />
          Naložbo sofinancirata Republika Slovenija in Evropska unija iz{" "}
          <span className="active bold">
            {" "}
            Evropskega sklada za regionalni razvoj.
          </span>
        </p>
        <p>
          Naziv operacije: <span className="bold">HEMT promocija v tujini</span>
          <br />h Obdobje trajanja operacije: 5.8.2020 – 30.10.2020
        </p>
      </div>
    </div>
  );
};

export default hh;

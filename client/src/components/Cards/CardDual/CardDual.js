import React from "react";

import "../card.css";

//CardLeft has the image on the left
export default function CardDual() {
  return (
    <>
      <div className="about">
        <div className="left-dual-img">
          <img className="img-about" src="./images/scott.png" alt="scott" />
        </div>

        <div className="card-info font-style">
          <span className="card-title">About Us</span>
          <hr className="line-break" />
          <span>
            This is Jeremy and Scott, long-time gamers who know what gamers
            want. These guys know what they're talking about when it comes to
            games and it shows. They've worked hard to create a fun community
            where gamers from all over can come and have a great time!
          </span>
        </div>

        <div className="right-dual-img">
          <img className="img-about" src="./images/jeremy.jpg" alt="jeremy" />
        </div>
      </div>
    </>
  );
}

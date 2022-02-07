import React from "react";

import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div id="home">
        <img
          id="logo"
          src="../../images/dragonlogo.png"
          alt="Chromatic Dragon Games Logo"
        />
      </div>
      <div>
        <span className="intro-info">
          The Seacoast's premier gaming store, with plenty of tables to
          accommodate whatever tabletop, CCG, or role playing game you play! We
          are an active and diverse community of gamers so stop in today and see
          why so many call us home.
        </span>
      </div>
    </div>
  );
}

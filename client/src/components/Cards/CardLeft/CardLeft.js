import React from "react";

import "../card.css";

//CardLeft has the image on the left
export default function CardLeft(props) {
  return (
    <>
      <div className="feature-card left-image">
        <div className="img-box">
          <img className="image" src={props.img} alt={props.alt} />
        </div>
        <div className="card-info">
          <span className="card-title">{props.title}</span>
          <hr className="line-break" />
          <span>{props.text}</span>
        </div>
      </div>
    </>
  );
}

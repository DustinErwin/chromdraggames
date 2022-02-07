import React from "react";

import "../card.css";

//CardLeft has the image on the left
export default function CardRight(props) {
  return (
    <>
      <div className="feature-card right-image">
        <div className="card-info">
          <span className="card-title">{props.title}</span>
          <hr className="line-break" />
          <span>{props.text}</span>
        </div>
        <div className="img-box">
          <img className="image" src={props.img} alt={props.alt} />
        </div>
      </div>
    </>
  );
}

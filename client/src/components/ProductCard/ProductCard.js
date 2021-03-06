import React from "react";
import "react-google-photo/styles.css";
import "./ProductCard.css";

//CardLeft has the image on the left
export default function ProductCard(props) {
  return (
    <>
      <div className="prod-card">
        <div className="prod-img-box">
          <img
            className="prod-img"
            src={process.env.PUBLIC_URL + "/images/" + props.img}
            alt={props.alt}
          />
        </div>
        <div className="prod-info-box">
          <span className="prod-title">{props.prodTitle}</span>
          <hr className="prod-info" />
          <span>{props.prodDescription}</span>
        </div>
      </div>
    </>
  );
}

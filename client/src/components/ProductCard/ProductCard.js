import React from "react";
import "react-google-photo/styles.css";
import GooglePhoto from "react-google-photo";
import "./ProductCard.css";

//CardLeft has the image on the left
export default function ProductCard(props) {
  const [open, setOpen] = React.useState(false);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      width: 10,
      height: 10,
    },
  ];

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

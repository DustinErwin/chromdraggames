import React from "react";

import "./AddFeatureBtn.css";
import Button from "../Button/Button";

export default function AddFeatureBtn() {
  return (
    <div className="add-item-btn">
      <input type="text" placeholder="Title"></input>
      <input type="text" placeholder="Description"></input>
      <input type="url" placeholder="Image Url"></input>
      <input type="text" placeholder="Image Alt text"></input>
      <Button title="Add Feature"></Button>
    </div>
  );
}

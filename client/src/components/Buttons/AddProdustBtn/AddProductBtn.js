import React from "react";

import "./AddProductBtn.css";
import Button from "../Button/Button";

export default function AddProductBtn() {
  return (
    <div className="add-item-btn">
      <input type="text" placeholder="Title"></input>
      <input type="text" placeholder="Description"></input>
      <input type="url" placeholder="Image Url"></input>
      <input type="text" placeholder="Image Alt text"></input>
      <Button title="Add Product"></Button>
    </div>
  );
}

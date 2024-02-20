import React from "react";

import "./AddEventBtn.css";
import Button from "../Button/Button";

//CardLeft has the image on the left
export default function AddEventBtn() {
  return (
    <div className="add-item-btn">
      <input type="text" placeholder="Title"></input>
      <input type="text" placeholder="Description"></input>
      <input type="url" placeholder="Icon Url"></input>
      <input type="datetime-local" placeholder="Date"></input>
      <Button title="Add Event"></Button>
    </div>
  );
}

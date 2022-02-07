import React from "react";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="RoleplayingGames">Role Playing Games</a>
          </li>
          <li>
            <a href="BoardGames">Board Games</a>
          </li>
          <li>
            <a href="TableTopGames">Table Top Games</a>
          </li>
          <li>
            <a href="MagicTheGathering">Magic The Gathering</a>
          </li>
          <li>
            <a href="Events">Events</a>
          </li>
          <li>
            <a href="About">About Us</a>
          </li>
          <li className="phone-li">
            <div>
              <span className="phone">603 • 841 • 5943</span>
              <span className="adress">
                56 Market St, Somersworth, NH 03878
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

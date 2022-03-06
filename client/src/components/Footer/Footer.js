import SocialBox from "../SocialBox/SocialBox";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="foot-div">
          Hours of operation
          <hr></hr>
          Pretty much always open
        </div>
        <div className="foot-div">
          Stay Connected
          <hr></hr>
          <SocialBox></SocialBox>
        </div>
        <div className="foot-div">
          Shop Information
          <hr></hr>
          56 Market St, Somersworth, NH 03878
        </div>
      </div>
      <div className="copy-write">
        © 2020 - 2022 by Chromatic Dragon Games. All rights reserved.
      </div>
    </footer>
  );
}

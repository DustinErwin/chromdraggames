import SocialBox from "../SocialBox/SocialBox";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="foot-div">
          Hours of operation
          <hr></hr>
          <div className="open-times">
            <div className="days">
              Monday
              <br />
              Tuesday
              <br />
              Wednsday
              <br />
              Thursday
              <br />
              Friday
              <br />
              Saturday
              <br />
              Sunday
              <br />
            </div>
            <div className="hours">
              10:00am - 9:00pm <br />
              10:00am - 9:00pm <br />
              10:00am - 9:00pm <br />
              10:00am - 9:00pm <br />
              10:00am - 11:00pm <br />
              10:00am - 11:00pm <br />
              10:00am - 7:00pm <br />
            </div>
          </div>
          <br />
          We are often open much later than listed above. Please call ahead to
          see how late we will be open on any given night.
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

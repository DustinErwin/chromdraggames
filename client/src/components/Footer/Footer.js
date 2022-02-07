import SocialBox from "../SocialBox/SocialBox";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="foot-div">© 2021 Dustin Erwin</div>
      <div className="foot-div">
        <SocialBox></SocialBox>
      </div>
      <div className="foot-div"></div>
    </footer>
  );
}

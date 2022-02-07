import "./SocialBox.css";

export default function SocialBox() {
  return (
    <div className="social-box">
      <a href="https://www.facebook.com/chromaticdragongames/">
        <img
          className="facebook-icon"
          src="./images/icons/facebook.png"
          alt="facebook icon"
        />
      </a>

      <a href="https://twitter.com/gameschromatic/">
        <img
          className="twitter-icon"
          src="./images/icons/twitter.png"
          alt="nowhere"
        />
      </a>

      <a href="https://discord.gg/wcBZ8cSJhC">
        <img
          className="facebook-icon"
          src="./images/icons/discord.png"
          alt="nowhere"
        />
      </a>
    </div>
  );
}

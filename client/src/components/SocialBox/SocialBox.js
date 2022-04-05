import "./SocialBox.css";

export default function SocialBox() {
  return (
    <div className="social-box">
      <a href="https://www.facebook.com/chromaticdragongames/">
        <img
          className="icon"
          src="./images/button-facebook.png"
          alt="facebook icon"
        />
      </a>

      <a href="https://twitter.com/gameschromatic/">
        <img className="icon" src="./images/button-twitter.png" alt="nowhere" />
      </a>

      <a href="https://discord.gg/wcBZ8cSJhC">
        <img className="icon" src="./images/button-discord.jpg" alt="nowhere" />
      </a>
    </div>
  );
}

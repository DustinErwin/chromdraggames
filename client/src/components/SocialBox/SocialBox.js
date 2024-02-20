import "./SocialBox.css";

export default function SocialBox() {
  return (
    <div className="social-box">
      <a href="https://www.facebook.com/chromaticdragongames/">
        <img
          className="icon"
          src="./images/button-facebook.png"
          alt="facebook account link"
        />
      </a>
      <a href="https://discord.gg/wcBZ8cSJhC">
        <img
          className="icon"
          src="./images/button-discord.jpg"
          alt="discord chat account link"
        />
      </a>
    </div>
  );
}

import "./HomePage.css";
import Intro from "../components/Intro/Intro.js";
import NavBar from "../components/NavBar/NavBar.js";
import CardLeft from "../components/Cards/CardLeft/CardLeft.js";
import CardRight from "../components/Cards/CardRight/CardRight.js";
import cards from "../data/homeCards.json";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="container" id="home">
        <div className="introDiv"></div>

        <Intro></Intro>
        <div className="inbetween bg-one"></div>
        <CardLeft
          alt={cards[0].alt}
          img={cards[0].img}
          text={cards[0].text}
          title={cards[0].title}
        />
        <div className="inbetween bg-two"></div>

        <CardRight
          alt={cards[1].alt}
          img={cards[1].img}
          text={cards[1].text}
          title={cards[1].title}
        />

        <div className="inbetween bg-three"></div>
        <CardLeft
          alt={cards[2].alt}
          img={cards[2].img}
          text={cards[2].text}
          title={cards[2].title}
        />
        <div className="inbetween bg-four"></div>
        <CardRight
          alt={cards[3].alt}
          img={cards[3].img}
          text={cards[3].text}
          title={cards[3].title}
        />
        <div className="inbetween bg-five"></div>
        <CardLeft
          alt={cards[4].alt}
          img={cards[4].img}
          text={cards[4].text}
          title={cards[4].title}
        />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
